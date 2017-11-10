const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: String,
	name: String
})

module.exports = mongoose.model('username', userSchema, 'users');

