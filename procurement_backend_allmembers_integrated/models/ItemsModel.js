var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    name:{
        type:String,
        required: 'Please enter name of the Item'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('ItemsModel',ItemsSchema);