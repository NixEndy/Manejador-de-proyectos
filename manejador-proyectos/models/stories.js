const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const schema = mongoose.Schema({
  _como: String,
  _quiero: String,
  _manera: Sting,
  _dado: String,
  _cuando: String,
  _entonces: String
});

class Stories{
  constructor (como,quiero,manera,dado,cuando,entonces){
    this._como = como,
    this._quiero = quiero,
    this._manera = manera,
    this._dado = dado,
    this._cuando = cuando,
    this._entonces = entonces
  }

    get como(){
      return this.como;
    }

    set como(v){
      this.como = v;
    }
    //
    get quiero(){
      return this.quiero;
    }

    set quiero(v){
      this.quiero = v;
    }
    //
    get manera(){
      return this.manera;
    }

    set manera(v){
      this.manera = v;
    }
    //
    get dado(){
      return this.dado;
    }

    set dado(v){
      this.dado = v;
    }
    //
    get cuando(){
      return this.cuando;
    }

    set cuando(v){
      this.cuando = v;
    }
    //
    get entonces(){
      return this.entonces;
    }

    set entonces(v){
      this.entonces = v;
    }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Stories);
module.exports = mongoose.model('Stories', schema);
