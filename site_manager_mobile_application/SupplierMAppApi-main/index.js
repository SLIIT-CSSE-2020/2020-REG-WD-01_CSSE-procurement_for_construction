var express = require('express');

var cors = require('cors');
var bodyParser = require('body-parser');


var app = express();

app.use(cors());
var port =  process.env.PORT || 5000;
var mongoose = require('mongoose');
var Item = require('./models/ItemsModel');
var Supplier = require('./models/SupplierModel');
var Stock = require('./models/StockModel');
var OrderCustomer = require('./models/OrderCustomerModel');
var User = require('./models/UserModel');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/procureconstruct_integrated',{useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/ItemsRoutes');
var supplierRoutes = require('./routes/SupplierRoutes');
var StockRoutes = require('./routes/StockRouter');
var OrderCustomerRoutes = require('./routes/OrderCustomerRouter');
var UserRoutes = require('./routes/UserRoutes');

routes(app);
supplierRoutes(app);
StockRoutes(app);
OrderCustomerRoutes(app);
UserRoutes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl+' not found!'});
});

app.listen(port);
console.log("App is started on :"+port);