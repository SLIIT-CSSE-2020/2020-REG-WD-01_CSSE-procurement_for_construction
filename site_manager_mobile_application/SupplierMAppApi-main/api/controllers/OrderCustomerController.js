var mongoose = require('mongoose');

OrderC = mongoose.model('OrderCustomerModel');


exports.listAllOc = function(req,res){
    OrderC.find({itemId:req.params.Id},function(err,orderC){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        res.json({status: true,data:orderC});
    });
}

exports.createAOc = function(req,res){
    
    var newO = new OrderC(req.body);

    newO.save(function(err,orderC){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:orderC});
    });
};

exports.createAOcFromGet = function(req,res){

    dataNew = {
        dAddress : req.params.dAddress,
        dDate : req.params.dDate,
        requis : req.params.requis,
        itemId : req.params.itemId,
        supId : req.params.supId,
        qty : req.params.qty,
        uprice : req.params.uprice,
        total : req.params.total
    }

    
    var newO = new OrderC(dataNew);

    newO.save(function(err,orderC){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:orderC});
    });
};


exports.readASingleOc = function(req,res){
    OrderC.findById(req.params.Id,function(err,orderC){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:orderC});
    });
};


exports.updateAOc = function(req,res){
    OrderC.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},function(err,orderC){
        if(err){
            res.json({status:false,data:'unable to update'});
        }


        res.json({status:true,data:orderC});
    });
};


exports.deleteAOc = function(req,res){
    OrderC.remove({_id:req.params.Id},function(err,orderC){
        if(err){
            res.json({status:false,data:'unable to delete'});
        }


        res.json({status:true,data:'Student Removed successfully'});
    });
};











