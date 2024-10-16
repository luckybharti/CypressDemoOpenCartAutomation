export default class HeaderComponents{

   myAccountDropdown() {return cy.get('#top-links a[title="My Account"]');}
   loginOption() {return cy.get("ul[class='dropdown-menu dropdown-menu-right']>li:nth-of-type(2)");}
   logoutOption(){return cy.get("ul[class='dropdown-menu dropdown-menu-right']>li:nth-of-type(5)") } 
  


}