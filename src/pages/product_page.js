const Wrapper = require("../utils/wdio_wrapper");

class ProductPage {


    async addProductToCart(products) {
        products.forEach(async (element) => {
            let id = `#add-to-cart-${element.replace(/ /g, '-').toLowerCase()}`
            console.log(id);
            await Wrapper.click(id)
        });
    }

    async getCartCount() {
        return await Wrapper.getText(".shopping_cart_badge")
    }

}




module.exports = new ProductPage()