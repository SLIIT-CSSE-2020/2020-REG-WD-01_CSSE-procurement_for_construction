var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    username:{
        type:String,
        required: 'Please enter username'
    },
    password:{
        type:String,
        required: 'Please enter user password'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model('UserModel',User);