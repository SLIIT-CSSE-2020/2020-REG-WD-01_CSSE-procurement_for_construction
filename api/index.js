var express = require('express');

var cors = require('cors');
var bodyParser = require('body-parser');


var app = express();

app.use(cors());
var port =  process.env.PORT || 5000;
var mongoose = require('mongoose');
var Item = require('./api/models/ItemsModel');
var Supplier = require('./api/models/SupplierModel');
var Stock = require('./api/models/StockModel');
var OrderCustomer = require('./api/models/OrderCustomerModel');
var OrderItems = require('./api/models/OrderItemsModel');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/supplier',{useNewUrlParser: true,useUnifiedTopology: true,  useFindAndModify: false});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var routes = require('./api/routes/ItemsRoutes');
var supplierRoutes = require('./api/routes/SupplierRoutes');
var StockRoutes = require('./api/routes/StockRouter');
var OrderCustomerRoutes = require('./api/routes/OrderCustomerRouter');
var OrderItemsRoutes = require('./api/routes/OrderItemsRoutes');

routes(app);
supplierRoutes(app);
StockRoutes(app);
OrderCustomerRoutes(app);
OrderItemsRoutes(app)

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl+' not found!'});
});

app.listen(port);
console.log("App is started on :"+port);