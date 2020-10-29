const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const skill = require('./skill');

const schema = new mongoose.Schema({
  _name: {type: String},
  _birthdate: {type: Date},
  _curp: {type: String},
  _rfc: {type: String},
  _address: {type: String},
  _username: {type: String},
  _password: {type: String},
  _salt: {type: String},
});

class Member {
  constructor (name,birthdate,curp,rfc,address,skills,username,password,salt){
    this._name = name,
    this._birthdate = birthdate,
    this._curp = curp,
    this._rfc = rfc,
    this._address = address,
    this._skills = skills,
    this._username = username,
    this._password = password,
    this._salt = salt
  }

  get name(){
    return this.name;
  }

  set name(v){
    this.name = v;
  }

  get birthdate(){
    return this.birthdate;
  }

  set birthdate(v){
    this.birthdate = v;
  }

  get curp(){
    return this.curp;
  }

  set curp(v){
    this.curp = v;
  }

  get rfc(){
    return this.rfc;
  }

  set rfc(v){
    this.rfc = v;
  }

  get address(){
    return this.address;
  }

  set address(v){
    this.address = v;
  }

  get skills(){
    return this.skills;
  }

  set skills(v){
    this.skills = v;
  }

  get username(){
    return this.username;
  }

  set username(v){
    this.username = v;
  }

  get password(){
    return this.password;
  }

  set password(v){
    this.password = v;
  }

  get salt(){
    return this.salt;
  }

  set salt(v){
    this.salt = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Member);
module.exports = mongoose.model('Member', schema);