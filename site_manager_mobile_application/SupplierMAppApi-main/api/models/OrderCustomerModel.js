var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderCustomerSchema = new Schema({
    dAddress:{
        type:String,
        required: 'Please enter Address'
    },
    dDate:{
        type:String,
        required: 'Please enter delivery date'
    },
    requis:{
        type:String,
        required: 'Please enter requistioner name'
    },
    itemId:{
        type:String,
        required: 'Please enter item id'
    },
    supId:{
        type:String,
        required: 'Please enter supplier id'
    },
    qty:{
        type:Number,
        required: 'Please enter qty'
    },
    uprice:{
        type:Number,
        required: 'Please enter unit price'
    },
    total:{
        type:Number,
        required: 'Please enter total'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('OrderCustomerModel',OrderCustomerSchema);