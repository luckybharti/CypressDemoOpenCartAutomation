// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath';
import "cypress-real-events/support";

Cypress.Commands.add('selectNavOptionsAndHover',(navOptions)=>{

    cy.get(`ul.navbar-nav > li > a`).contains(navOptions).realHover('mouse')

})

Cypress.Commands.add('selectValueFromDropDown',(selectId,value_Text_Index)=>{

    cy.get(selectId).select(value_Text_Index)

})

Cypress.Commands.add('selectItem',(itemName)=>{

    cy.fixture('productItem.json').then((item)=>{

        cy.xpath(`//h4//a[contains(text(),'${item.productItem.itemName}')]`)


    })
   
})
