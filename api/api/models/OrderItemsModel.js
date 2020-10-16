var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderItemsSchema = new Schema({
    itemId:{
        type:String,
        required: 'Please enter item id'
    },
    qty:{
        type:Number,
        required: 'Please enter qty'
    },
    oDate:{
        type:String,
        required: 'Please enter ordered date'
    },orderId:{
        type:String,
        required: 'Please enter ordered id'
    },
    supId:{
        type:String
    },
    status:{
        type:String
    },
    dDate:{
        type:String
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('orderItemsModel',orderItemsSchema);