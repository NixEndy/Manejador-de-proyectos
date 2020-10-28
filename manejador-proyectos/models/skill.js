const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const schema = mongoose.Schema({
  _name: String,
  _rank: String
});