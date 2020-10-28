const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const schema = mongoose.Schema({
  _name: String,
  _rank: String
});

class Skills{
  constructor(name,rank){
    this._name = name,
    this._rank = rank
  }

  get name(){
    return this.name;
  }

  set name(v){
    this.name = v;
  }
  //
  get rank(){
    return this.rank;
  }

  set rank(v){
    this.rank = v;
  }

}

schema.plugin(mongoosePaginate);
schema.loadClass(Skills);
module.exports = mongoose.model('Skills', schema);
