const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const passport = require("passport");

const app = express();

var Item = require('./models/ItemsModel');
var Supplier = require('./models/SupplierModel');
var Stock = require('./models/StockModel');
var OrderCustomer = require('./models/OrderCustomerModel');
var OrderItems = require('./models/OrderItemsModel');

require("./config/passport") (passport);

app.use(bodyParser.json());
app.use(cors());

const order = require('./controllers/orderController');
const requestOrder = require('./controllers/requestPermissionOrderController');

var routes = require('./routes/ItemsRoutes');
var supplierRoutes = require('./routes/SupplierRoutes');
var StockRoutes = require('./routes/StockRouter');
var OrderCustomerRoutes = require('./routes/OrderCustomerRouter');
var OrderItemsRoutes = require('./routes/OrderItemsRoutes');

const users = require("./controllers/users");
const task = require("./controllers/Task");

app.use('/order', order );
app.use('/request', requestOrder);

app.use("/api/users", users);
app.use("/api", task);

routes(app);
supplierRoutes(app);
StockRoutes(app);
OrderCustomerRoutes(app);
OrderItemsRoutes(app);

mongoose.connect('mongodb://127.0.0.1:27017/procureconstruct_integrated' ,   { useNewUrlParser: true, useUnifiedTopology: true  } ,function(err){
    if(err){
        console.log("Error occured while connecting ot the Database ...!");
        throw err;
    }
    console.log("MongoDB : Connected to the Database successfully ...!");
});

app.listen( 3000, () =>{
    console.log("Server up and running on port : " + 3000 );
});