var mongoose = require('mongoose');

User = mongoose.model('UserModel');


exports.listAll = function(req,res){
    User.find({},function(err,user){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        res.json({status: true,data:user});
    });
}



exports.createAUser = function(req,res){

    var newUser = new User(req.body);

    newUser.save(function(err,user){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:user});
    });
};


exports.readASingleUser = function(req,res){
    User.findById(req.params.Id,function(err,user){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:user});
    });
};

exports.checkUser = function(req,res){
    User.find({username:req.params.user,password:req.params.pass},function(err,user){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }

        var count = Object.keys(user).length;
        if(count == 1){
            res.json({status:true,data:"user found"});
        }else{
            res.json({status:false,data:"User not found"});
        }
        
    });
};

exports.updateAUser = function(req,res){
    User.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},function(err,user){
        if(err){
            res.json({status:false,data:'unable to update'});
        }


        res.json({status:true,data:user});
    });
};


exports.deleteAUser = function(req,res){
    User.remove({_id:req.params.Id},function(err,user){
        if(err){
            res.json({status:false,data:'unable to delete'});
        }


        res.json({status:true,data:'Student Removed successfully'});
    });
};











