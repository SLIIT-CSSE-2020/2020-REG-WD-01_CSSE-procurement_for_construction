var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StockSchema = new Schema({
    supplierId:{
        type:String,
        required: 'Please enter supplier id'
    },
    qty:{
        type:Number,
        required: 'Please enter qty'
    },
    uprice:{
        type:Number ,
        required: 'Please enter unit price'
    },
    itemId:{
        type:String,
        required: 'Please enter item id'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('StockModel',StockSchema);