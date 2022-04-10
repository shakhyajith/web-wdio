const Wrapper = require("../utils/wdio_wrapper");

class CartPage {

    async getCartItems() {
        const products = []
        const items = await Wrapper.getElements(".inventory_item_name")

        for (let index = 0; index < items.length; index++) {
            const element = await items[index];
            products.push(await element.getText())
            
        }

        return products
    }


    async navigateToCheckout(){
        await Wrapper.click('#checkout')
    }
    
}



module.exports = new CartPage()