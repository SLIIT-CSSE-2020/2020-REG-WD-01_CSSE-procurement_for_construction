var mongoose = require('mongoose');

Item = mongoose.model('ItemsModel');


exports.listAllItems = function(req,res){
    Item.find({},function(err,item){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        res.json({status: true,data:item});
    });
}



exports.createAItem = function(req,res){

    var newItem = new Item(req.body);

    newItem.save(function(err,item){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:item});
    });
};


exports.readASingleItem = function(req,res){
    Item.findById(req.params.Id,function(err,item){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:item});
    });
};

exports.updateAStudent = function(req,res){
    Item.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},function(err,item){
        if(err){
            res.json({status:false,data:'unable to update'});
        }


        res.json({status:true,data:item});
    });
};


exports.deleteAItem = function(req,res){
    Item.remove({_id:req.params.Id},function(err,item){
        if(err){
            res.json({status:false,data:'unable to delete'});
        }


        res.json({status:true,data:'Student Removed successfully'});
    });
};











