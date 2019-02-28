var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ahmed:ahmed@cluster0-shard-00-00-mrhp9.mongodb.net:27017,cluster0-shard-00-01-mrhp9.mongodb.net:27017,cluster0-shard-00-02-mrhp9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', ['tasks']);

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;
