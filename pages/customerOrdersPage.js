module.exports = {
    selector: 'body',

    elements: {
        placeOrderButton: 'a[data-atest=atest_order_create_elem_new_order_btn]'
    },

    sections: {
        header: {
            selector: 'header',
            elements: {
                userBalance: '.user-balance',
            },
        }
    }
};