module.exports = function(app){
    var order = require('../controllers/OrderCustomerController');

    app.route('/order-customer').get(order.listAllOc)

    app.route('/order-customer').post(order.createAOc);

    app.route('/order-customer/:Id').get(order.readASingleOc);

    app.route('/order-customer/:Id').put(order.updateAOc);

    app.route('/order-customer/:Id').delete(order.deleteAOc);
}
