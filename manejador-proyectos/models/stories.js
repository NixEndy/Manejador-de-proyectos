const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const schema = mongoose.Schema({
  _name: String,
  _priority: String,
  _size: Int16Array,
  _role: String,
  _functionality: String,
  _benefit: String,
  _acceptanceName: String,
  _context: String,
  _event: String,
  _result: String
});