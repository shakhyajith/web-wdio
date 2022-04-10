const configs = require("../config/configs")
const Wrapper = require("../utils/wdio_wrapper")


class LoginPage {


    async login(username, password) {
        await Wrapper.openURL(configs.BASE_URL)
        await Wrapper.wait("#login-button")
        await Wrapper.sendKeys("#user-name", username)
        await Wrapper.sendKeys("#password", password)
        await Wrapper.click('#login-button')
    }


}





module.exports = new LoginPage()