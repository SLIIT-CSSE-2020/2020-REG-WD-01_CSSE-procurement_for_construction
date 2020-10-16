module.exports = function(app){
    var item = require('../controllers/OrderItemsController');

    app.route('/order-item').get(item.listAllItems)

    app.route('/order-item').post(item.createAItem);

    app.route('/order-item/:Id').get(item.readASingleItem);


    app.route('/order-item/:Id').put(item.updateAStudent);
    // app.route('/order-item/:Id').put(item.updateAStudent);
    // app.route('/order-item/:Id').put(item.updateAStudent);
    // app.route('/order-item/:Id').put(item.updateAStudent);

    app.route('/order-item/:Id').delete(item.deleteAItem);
}
