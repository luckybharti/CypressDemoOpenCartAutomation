import AddItemPage from "../Pages/AddItemPage"
import BasePage from "../Pages/BasePage"


describe('Select an item to put into AddToCart',()=>{

   /*let basePage

    before(()=>{

        basePage = new BasePage()
        basePage.open()


    })*/


    it('Validate user is able to select Monitors from component',()=>{
        
      AddItemPage.selectMontiorsAsItemFromComponents();
    })

    it('Validate user can able to change the layout',()=>{
      AddItemPage.changeToGridView();
      AddItemPage.changeToListView();  

    })

    it('Validate user can sort the product with multiple option',()=>{

        AddItemPage.sortItemWithDifferentValue();

    })
    
    it('Validate user can able to add item in cart',()=>{

      AddItemPage.addItemToCart();

    })

    it('Validate the success message on adding the item into cart',()=>{

      AddItemPage.successItemAddedToCartMessage();
    })

    it('Validate that item has been added to cart',()=>{
c
      AddItemPage.verifyAddedItemInCart();

    })
    
})