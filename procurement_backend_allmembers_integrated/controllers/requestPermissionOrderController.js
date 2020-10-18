const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const RequestPermissionOrderSchema = require('../models/RequestPermissionOrder');

router.get('/', async(req, res) => {
    try {
        const orders = await RequestPermissionOrderSchema.find();
        res.json(orders);
    }catch(err){
        res.json({ message : err});
    }
});

router.post('/many', async(req, res) => {
    let permissionOrders = req.body;
    for( let perOrder of permissionOrders){
        perOrder._id = mongoose.Types.ObjectId(perOrder._id);
    }

    RequestPermissionOrderSchema.collection.insertMany(permissionOrders, function (err, req_orders) {
        if(err){
            return console.error(err);
        } else {
            res.status(200).json('Multiple records inserted successfully');
        }
    });
});

router.delete('/del/:orderId', async(req, res) => {
    let orderId = req.params.orderId;
    try{
        const deleteOrder = await RequestPermissionOrderSchema.findByIdAndDelete(orderId);
        res.status(200).json(deleteOrder);
    } catch(err){
        res.status(500).json({ message : err})
    }
});

router.put('/updorder/:orderId', async(req, res) => {
    let update_orderId = req.params.orderId;
    let new_item = req.body.item;
    let new_item_desc = req.body.item_desc;
    let new_quantity = req.body.quantity;
    let new_unit_price =  req.body.unit_price;
    let new_total_cost = new_quantity * new_unit_price;
    let new_status = req.body.status;
    let new_priority = req.body.priority;

    await RequestPermissionOrderSchema.findByIdAndUpdate( update_orderId, {

                item: new_item,
                item_desc: new_item_desc,
                quantity: new_quantity,
                unit_price: new_unit_price,
                total_cost: new_total_cost,
                status: new_status,
                priority: new_priority,
                directOrder: false

        },
        { new: true, useFindAndModify: false}, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                res.json(docs);
            }
        });
});

router.delete('/delone', async(req, res) => {
    let del_ord = {
        item : ""
    };
    del_ord.item = req.body.item;

    const doc = await RequestPermissionOrderSchema.deleteOne(del_ord );
    res.send(doc);
});

router.delete('/delall', async(req, res) => {
    let permissionOrders = req.body;
    let permissionOrdersId = [];
    for (let order of permissionOrders) {
        permissionOrdersId.push(order._id);
    }
    RequestPermissionOrderSchema.deleteMany({
        _id : {
            $in : permissionOrdersId
        }
    }, function (err, result) {
        if (err){
           res.send(err);
        } else {
            res.json('Multiple records deleted successfully');
        }
    })
});

module.exports = router;