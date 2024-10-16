import BasePage from "../Pages/BasePage"
import LoginPage from "../Pages/LoginPage";

describe('Sucess and Fail login flow ', () => {
  let basePage
  

  before(() => {

    basePage = new BasePage();
    basePage.open();
  })

  beforeEach(() => {

    cy.fixture('user.json').as('users')
  })

  it('should fail to login with invalid credentials', () => {

    cy.get('@users').then((user)=>{

      LoginPage.performLogin(user.invalidUser.email, user.invalidUser.password);
      
       
    })

    LoginPage.unsuccesfullLoginMessage();

  })

  it('should login sucessfully with valid credentials', () => {

    cy.get('@users').then((user)=>{

      LoginPage.performLogin(user.validUser.email, user.validUser.password);
    })

     LoginPage.performLogout();
  })

 })