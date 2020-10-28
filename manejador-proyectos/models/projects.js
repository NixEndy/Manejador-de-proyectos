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

class Project{
  class(name,requestedDate,startDate,description,projectManager,productOwner,members){
    this._name = name,
    this._requestedDate = requestedDate,
    this._startDate= startDate,
    this._description = description,
    this._projectManager = projectManager,
    this._members = members
  }
  get name(){
    return this.name;
  }

  set name(v){
    this.name = v;
  }
  //
  get requestedDate(){
    return this.requestedDate;
  }

  set requestedDate(v){
    this.requestedDate = v;
  }
  //
  get startDate(){
    return this.startDate;
  }

  set startDate(v){
    this.startDate = v;
  }
  //
  get description(){
    return this.description;
  }

  set description(v){
    this.description = v;
  }
  //
  get projectManager(){
    return this.projectManager;
  }

  set projectManager(v){
    this.projectManager = v;
  }
  //
  get productOwner(){
    return this.productOwner;
  }

  set productOwner(v){
    this.productOwner = v;
  }
  //
  get members(){
    return this.members;
  }

  set members(v){
    this.members = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Project);
module.exports = mongoose.model('Project', schema);
