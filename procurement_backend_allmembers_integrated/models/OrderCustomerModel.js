var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderCustomerSchema = new Schema({
    cName:{
        type:String,
        required: 'Please enter customer  name'
    },
    cEmail:{
        type:String,
        required: 'Please enter Email'
    },
    orderedDate:{
        type:String,
        required: 'Please enter order date'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('OrderCustomerModel',OrderCustomerSchema);