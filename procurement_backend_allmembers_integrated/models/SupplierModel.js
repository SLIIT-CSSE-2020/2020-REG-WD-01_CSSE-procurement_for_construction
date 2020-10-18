var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SupplierSchema = new Schema({
    name:{
        type:String,
        required: 'Please enter name of the Item'
    },
    tel:{
        type:String,
        required: 'Please enter Telephone Number'
    },
    email:{
        type:String,
        required: 'Please enter Email'
    },
    address:{
        type:String,
        required: 'Please enter Address'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('SupplierModel',SupplierSchema);