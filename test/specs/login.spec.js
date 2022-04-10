const { expect } = require('chai')
const CartPage = require('../../src/pages/cart_page')
const CustomerInformationPage = require('../../src/pages/customer_info_page')
const LoginPage = require("../../src/pages/login_page")
const ProductPage = require("../../src/pages/product_page")

describe("verify user login", () => {
    const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"]
    const customer = {firstName:"John",lastName:"Carter",zip:15896}

    before(async () => await LoginPage.login("standard_user", "secret_sauce"))

    it("verify valid user login", async () => {
        await ProductPage.addProductToCart(products)
        const product_count = await ProductPage.getCartCount()
        expect(product_count).to.be.eq('2')
    })
    it("verify items on cart page",async ()=>{
        await ProductPage.navigateToCartPage()
        const items = await CartPage.getCartItems()
        expect(items).to.be.deep.members(products)
    })

    it("provide customer information",async ()=>{
        await CartPage.navigateToCheckout()
       await CustomerInformationPage.enterCustomerInformation(customer)
    })
})