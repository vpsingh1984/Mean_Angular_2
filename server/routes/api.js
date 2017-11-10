const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user'); 

const db = 'mongodb://userahsanul:pwdahsanul@ds235785.mlab.com:35785/module_concept';

mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
	if(err){
		console.error('error occure while connecting db !' + err);
	}
})

router.get('/', function(req, res){
	console.log("api works fine !")
	res.send("api works fine !");
});

router.get('/users', function(req,res){
	console.log('get request for all users');
	User.find({}).exec(function(err,users){
		if(err){
			res.send('Error retrieving users !!!')
		}else{
			res.json(users);
		}
	});
});

router.get('/users/:id', function(req,res){
	console.log('get request for single user');
	User.findById(req.params.id).exec(function(err,user){
		if(err){
			res.send('Error retrieving user !!!')
		}else{
			res.json(user);
		}
	});
});

router.post('/user', function(req,res){
	console.log('user insertion is called ');
	newUser = new User();
	newUser.email = req.body.email;
	newUser.name = req.body.name;
	newUser.save(function(err, insertedUser){
		if(err){
			res.send('error occures while inserting user !!! ' + err);
		}else{
			res.json(insertedUser);
		}
	});
});

router.put('/user/:id',function(req, res){
	console.log('update user');
	User.findByIdAndUpdate(req.params.id,{
		$set: {"email": req.body.email, "name" : req.body.name}
	},
	{
		new : true
	},
	function(err, updatedUser){
		if(err){
			res.send('Error occures while updating user' + err);
		}else{
			res.json(updatedUser);
		}

	});
});

router.delete('/user/:id', function(req, res){
	console.log(' Deleting user');
	User.findByIdAndRemove(req.params.id, function(err, deletedUser){
		if(err){
			res.send('Error deleting user' + err);
		}else{
			res.json(deletedUser);
		}
	});
});


module.exports = router;