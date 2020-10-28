const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const member = require('./member');

const schema = mongoose.Schema({
  _name: String,
  _requestedDate: Date,
  _startDate: Date,
  _description: String,
  _projectManager: String,
  _productOwner: String,
  _members: [Member]
});