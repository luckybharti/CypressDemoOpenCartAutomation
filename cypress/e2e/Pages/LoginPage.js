import HeaderComponents from "../components/HeaderComponents.js";
import BasePage from "./BasePage.js";

class LoginPage extends BasePage {

    emailAddress() {return cy.get('#input-email');}
    password() {return cy.get('#input-password');}
    loginbtn() {return cy.get("input[type='submit']");}
    errorLoginMessage(){return cy.get(".alert.alert-danger");}
    logoutMessage(){return cy.get("#content>h1");}
    
    performLogin(email, password) {
        
        this.myAccountDropdown().click();
        this.loginOption().click();
        this.emailAddress().type(email);
        this.password().type(password);
        this.loginbtn().click();
    }

    unsuccesfullLoginMessage(){
        this.errorLoginMessage().should('be.visible').and('contain.text','Warning: No match for E-Mail Address and/or Password.')
    } 

    performLogout(){

        this.myAccountDropdown().click();
        this.logoutOption().click();
        this.logoutMessage().should('be.visible').and('contain.text','Account Logout')
    }

}
export default new LoginPage;
