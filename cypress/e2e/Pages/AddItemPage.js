import BasePage from "./BasePage";

class AddItemPage extends BasePage{

monitorsOption(){return cy.xpath("//li//a[contains(text(),'Monitors' )]")}
listViewOption(){return cy.get("button[id='list-view']")}
gridViewOption(){return cy.get("button[id='grid-view']")}
sortBy(){return cy.get("select[id='input-sort']")}
addToCart(){return cy.xpath("(//span[text()='Add to Cart']//parent::button)[1]")}

selectMontiorsAsItemFromComponents(){

    cy.selectNavOptionsAndHover('Components');
    this.monitorsOption().click();
    
}

changeToListView(){
    
    this.listViewOption().click().then(()=>{

        cy.get('.product-thumb').parent().should('have.class','product-layout product-list col-xs-12')

    });


}

changeToGridView(){

    this.gridViewOption().click().then(()=>{

        cy.get('.product-thumb').parent().should('have.class','product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12')

    });
}

sortItemWithDifferentValue(){

    cy.selectValueFromDropDown('#input-sort','Name (Z - A)').then(()=>{
        
        cy.xpath('(//h4)[1]').should('have.text','Samsung SyncMaster 941BW')
        cy.xpath('(//h4)[2]').should('have.text','Apple Cinema 30"')


    })

    cy.selectValueFromDropDown('#input-sort','Price (High > Low)').then(()=>{

        let highValue;
        let lowValue;

       cy.xpath("(//p[@class='price'])[1]").invoke('text').then((captureValue)=>{

        highValue=parseFloat(captureValue.replace(/[^0-9.-]+/g, ''));
        
        cy.xpath("(//p[@class='price'])[2]").invoke('text').then((captureValue)=>{

            lowValue=parseFloat(captureValue.replace(/[^0-9.-]+/g, ''));
           
           }).then(()=>{

                expect(highValue).to.be.greaterThan(lowValue);

           })
    
       })

        })

}

addItemToCart(){

    this.addToCart().click();
}

successItemAddedToCartMessage(){


}
verifyAddedItemInCart(){

    
}


}
export default new AddItemPage;