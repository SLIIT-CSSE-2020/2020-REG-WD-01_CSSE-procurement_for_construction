var mongoose = require('mongoose');

Supplier = mongoose.model('SupplierModel');


exports.listAllSuppliers = function(req,res){
    Supplier.find({},function(err,supplier){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        res.json({status: true,data:supplier});
    });
}



exports.createASupplier = function(req,res){

    var newSupplier = new Supplier(req.body);

    newSupplier.save(function(err,supplier){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:supplier});
    });
};


exports.readASingleSupplier = function(req,res){
    Supplier.findById(req.params.Id,function(err,supplier){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:supplier});
    });
};


//find supplier by email
exports.readASupplierFromEmail = function(req,res){
    Supplier.find({email:req.params.email},function(err,supplier){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:supplier});
    });
};


exports.updateASupplier = function(req,res){
    Supplier.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},function(err,supplier){
        if(err){
            res.json({status:false,data:'unable to update'});
        }


        res.json({status:true,data:supplier});
    });
};


exports.deleteASupplier = function(req,res){
    Supplier.remove({_id:req.params.Id},function(err,supplier){
        if(err){
            res.json({status:false,data:'unable to delete'});
        }


        res.json({status:true,data:'Student Removed successfully'});
    });
};











