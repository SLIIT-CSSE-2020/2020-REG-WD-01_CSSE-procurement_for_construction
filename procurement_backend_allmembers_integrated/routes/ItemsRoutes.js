module.exports = function(app){
    var item = require('../controllers/ItemsController');

    app.route('/item').get(item.listAllItems)

    app.route('/item').post(item.createAItem);

    app.route('/item/:Id').get(item.readASingleItem);
    app.route('/item-a/:Id').get(item.readASingleItem);
    // app.route('/item/:Id').get(item.readASingleItem);
    // app.route('/item/:Id').get(item.readASingleItem);
    // app.route('/item/:Id').get(item.readASingleItem);
    // app.route('/item/:Id').get(item.readASingleItem);
    // app.route('/item/:Id').get(item.readASingleItem);


    app.route('/item/:Id').put(item.readASingleItem);

    app.route('/item/:Id').delete(item.deleteAItem);
}
