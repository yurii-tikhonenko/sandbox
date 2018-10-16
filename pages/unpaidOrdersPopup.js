module.exports = {
    selector: '#non_payment_popup',

    elements: {
        popup: {
            selector: '//div[contains(text(), "You already have")]',
            locateStrategy: 'xpath'
        },
        placeNewOrderButton: {
            selector: '//a[contains(text(), "Place")]',
            locateStrategy: 'xpath'
        }
    }
};