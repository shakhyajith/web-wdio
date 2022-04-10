class Wrapper {

    async openURL(url) {
        await browser.maximizeWindow()
        await browser.url(url)
    }

    async getElement(locator) {
        return await $(locator)
    }

    async getElements(locator) {
        return await $$(locator)
    }

    async sendKeys(locator, text) {
        await $(locator).setValue(text)
    }


    async click(locator) {
        await $(locator).click()
    }

    async wait(locator) {
        await $(locator).waitForDisplayed()
    }

    async getText(locator){
       return await $(locator).getText()
       
    }
}


module.exports = new Wrapper()