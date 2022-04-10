const { expect } = require('chai')
const LoginPage = require("../../src/pages/login_page")
const ProductPage = require("../../src/pages/product_page")

describe("verify user login", () => {
    const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"]
    before(async () => await LoginPage.login("standard_user", "secret_sauce"))

    it("verify valid user login", async () => {
        await ProductPage.addProductToCart(products)
        const product_count = await ProductPage.getCartCount()
        expect(product_count).to.be.eq('2')
    })
})