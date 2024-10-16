import HeaderComponents from "../components/HeaderComponents.js";

class BasePage extends HeaderComponents {
 
    
    open(){

        cy.visit('/')
    }


}

export default BasePage;