var express  = require('express');
var router   = express.Router();
var UserInfo = require('../models/UserInfo_DB');
var mongoose = require('mongoose');

// Index
router.get('/',
  function(req, res, next){
    var query = {};
    if(req.query.name) query.name = {$regex:req.query.name, $options:'i'};

    UserInfo.find(query)
    .sort({id: 1})
    .exec(function(err, useres){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else {
        res.json({success:true, data:useres});
      }
    });
  }
);

// Show
router.get('/:id',
  function(req, res, next){
    UserInfo.findOne({id:req.params.id})
    .exec(function(err, user){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else if(!user){
        res.json({success:false, message:"user not found"});
      }
      else {
        res.json({success:true, data:user});
      }
    });
  }
);

// Create
router.post('/',
  function(req, res, next){
    UserInfo.findOne({})
    .sort({id: -1})
    .exec(function(err, user){
      if(err) {
        res.status(500);
        return res.json({success:false, message:err});
      }
      else {
        res.locals.lastId = user?user.id:0;
        next();
      }
    });
  },
  function(req, res, next){
    var newuser = new UserInfo(req.body);
    newuser.id = res.locals.lastId + 1;
    newuser.save(function(err, user){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else {
        res.json({success:true, data:user});
      }
    });
  }
);

// Update
router.put('/:id',
  function(req, res, next){
    UserInfo.findOneAndUpdate({id:req.params.id}, req.body)
    .exec(function(err, user){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else if(!user){
        res.json({success:false, message:"user not found"});
      }
      else {
        res.json({success:true});
      }
    });
  }
);

// Destroy
router.delete('/:id',
  function(req, res, next){
    UserInfo.findOneAndRemove({id:req.params.id})
    .exec(function(err, user){
      if(err) {
        res.status(500);
        res.json({success:false, message:err});
      }
      else if(!user){
        res.json({success:false, message:"user not found"});
      }
      else {
        res.json({success:true});
      }
    });
  }
);

module.exports = router;
