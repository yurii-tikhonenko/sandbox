module.exports = {

    // suite который проверяет что каждое из доступных полей ордера может быть выбрано или изменено
    
    before: (browser) => {
        let mainPage = browser.page.mainPage(),
            customerOrdersPage = browser.page.customerOrdersPage();

        mainPage.header = browser.page.mainPage().section.header;
        customerOrdersPage.header = browser.page.customerOrdersPage().section.header;
        //
        // mainPage
        //     .navigate();

        // mainPage.header
        //     .click('@loginButton');
        // loginPopup
        //     .waitForElementVisible('@popup', 5000)
        //     .setValue('@emailField', 'iamcustomer@bigmir.net')
        //     .click('@continueButton')
        //     .waitForElementVisible('@passwordField', 5000)
        //     .setValue('@passwordField', 'custom546')
        //     .click('@loginButton');
        // customerOrdersPage.header
        //     .waitForElementVisible('@userBalance');

        // customerOrdersPage
        //     .click('@placeOrderButton');
        // unpaidOrdersPopup
        //     .waitForElementVisible('@popup', 5000)
        //     .click('@placeNewOrderButton', res => {console.log(res)});
        // в случае если метод по какой-то причине не произвел ожидаемое действие,
        // необходимо последним параметром передать callback функцию для вывода результата выполнения
        // createOrderPage
        //     .waitForElementVisible('@form');


        // может быть сведено к такому виду
        mainPage
            .navigate()
            .login('iamcustomer@bigmir.net','custom546');
        customerOrdersPage
            .openCreateOrderPage();
    },

    'Пользователь изменил поле заказа: Type of paper': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@paperTypeDropdown')
            .click('@assignmentOption')
            .expect.element('@assignmentOption').to.be.selected.before(1000);
        // проверка что значение поле type of paper: assignment было выбрано
    },

    'Пользователь заполнил поле заказа: Topic ': () => {
        // проверка что значение поле topic равно новому значению
    },

    // и так по всем доступным полям
};