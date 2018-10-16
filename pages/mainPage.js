module.exports = {
    selector: 'body',

    commands: [{
        navigate: function ()  {
            this.api.url('http://edubirdie.com.stageprod');
            return this; // не забывайте в каждом методе возвращать обьект браузера: this, иначе вы не сможете продолжать цепочку
        },

        openLoginPopup: function () {
            let mainPage = this.page.mainPage(),
                loginPopup = this.page.loginPopup();
            mainPage.header = this.page.mainPage().section.header;

            mainPage.header
                .click('@loginButton');
            loginPopup
                .waitForElementVisible('@popup');
            return this;
        },

        login: function (email, password) {
            let mainPage = this.page.mainPage(),
                customerOrdersPage = this.page.customerOrdersPage();
            mainPage.header = this.page.mainPage().section.header;
            customerOrdersPage.header = this.page.customerOrdersPage().section.header;

            mainPage
                .openLoginPopup()
                .setValue('@emailField', email)
                .click('@continueButton')
                .waitForElementVisible('@passwordField', 5000)
                .setValue('@passwordField', password)
                .click('@loginButton');
            customerOrdersPage.header
                .waitForElementVisible('@userBalance');
            return this;
        }
    }],

    sections: {
        header: {
            selector: 'header',
            elements: {
                loginButton: '.header__login-btn',
            },
        }
    }
};