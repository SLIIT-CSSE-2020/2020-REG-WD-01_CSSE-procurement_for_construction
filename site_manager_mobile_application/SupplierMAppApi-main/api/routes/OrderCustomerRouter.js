module.exports = function(app){
    var order = require('../controllers/OrderCustomerController');

    app.route('/order').get(order.listAllOc)

    app.route('/order').post(order.createAOc);

    app.route('/order/:Id').get(order.readASingleOc);

    app.route('/order/:dAddress/:dDate/:requis/:itemId/:supId/:qty/:uprice/:total').get(order.createAOcFromGet);

    app.route('/order/:Id').put(order.updateAOc);

    app.route('/order/:Id').delete(order.deleteAOc);
}
