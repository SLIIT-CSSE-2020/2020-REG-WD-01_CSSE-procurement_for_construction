var mongoose = require('mongoose');

Stock = mongoose.model('StockModel');


exports.listAllStocks = function(req,res){
    Stock.find({itemId:req.params.Id},function(err,stock){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        res.json({status: true,data:stock});
    });
}

exports.NumOfSuppliersForAItem = function(req,res){
    Stock.find({itemId:req.params.Id},function(err,stock){
        if(err){
            res.json({status: false,data:'Invalid Request!'});
        }

        var count = Object.keys(stock).length;
        res.json({status: true,data:count});
    });
}



exports.createAStock = function(req,res){

    var newStock = new Stock(req.body);

    newStock.save(function(err,stock){
        if(err){
            res.json({status: false,data:'unable to create'});
        }

        res.json({status: true,data:stock});
    });
};


exports.readASingleStock = function(req,res){
    Stock.findById(req.params.Id,function(err,stock){
        if(err){
            res.json({status:false,data:'Invalid ID'});
        }


        res.json({status:true,data:stock});
    });
};


exports.updateAStock = function(req,res){
    Stock.findOneAndUpdate({_id:req.params.Id},req.body,{new:true},function(err,stock){
        if(err){
            res.json({status:false,data:'unable to update'});
        }


        res.json({status:true,data:stock});
    });
};


exports.deleteAStock = function(req,res){
    Stock.remove({_id:req.params.Id},function(err,stock){
        if(err){
            res.json({status:false,data:'unable to delete'});
        }


        res.json({status:true,data:'Student Removed successfully'});
    });
};











