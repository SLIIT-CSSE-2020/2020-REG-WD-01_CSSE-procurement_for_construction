module.exports = function(app){
    var stock = require('../controllers/StockController');

    app.route('/stock-by-item/:Id').get(stock.listAllStocks)
    app.route('/num-of-suppliers/:Id').get(stock.NumOfSuppliersForAItem)

    app.route('/stock').post(stock.createAStock);

    app.route('/stock/:Id').get(stock.readASingleStock);

    app.route('/stock/:Id').put(stock.updateAStock);

    app.route('/stock/:Id').delete(stock.deleteAStock);
}
