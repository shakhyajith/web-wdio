const Wrapper = require("../utils/wdio_wrapper");

class CustomerInformationPage{


    async enterCustomerInformation(customer){
        await Wrapper.sendKeys('#first-name',customer.firstName)
        await Wrapper.sendKeys('#last-name',customer.lastName)
        await Wrapper.sendKeys('#postal-code',customer.zipCode)
        await Wrapper.click('#continue')
    }
}


module.exports = new CustomerInformationPage()