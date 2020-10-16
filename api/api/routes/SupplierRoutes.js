module.exports = function(app){
    var supplier = require('../controllers/SupplierController');

    app.route('/supplier').get(supplier.listAllSuppliers)

    app.route('/supplier').post(supplier.createASupplier);

    app.route('/supplier/:Id').get(supplier.readASingleSupplier);
    
    app.route('/supplierSearchEmail/:email').get(supplier.readASupplierFromEmail);


    app.route('/supplier/:Id').put(supplier.updateASupplier);

    app.route('/supplier/:Id').delete(supplier.deleteASupplier);
}
