onst async = require('async');
const bcrypt = require('bcrypt');
const Member = require('../models/member');

function list(req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  Member.paginate({}, {
    page: page,
    limit: 100
  }).then(member => res.status(200).json({
    message: res.__('member.findAll.ok'),
    objs: member
  })).catch(error => res.status(500).json({
    message: res.__('member.findAll.err'),
    obj: error
  }));
}

function index(req, res) {
  let id = req.params.id;
  Member.findOne({ _id: id }).then(member => res.status(200).json({
    message: res.__('member.findOne.ok'),
    objs: member
  })).catch(error => res.status(500).json({
    message: res.__('member.findOne.err'),
    obj: error
  }));
}

function update(req, res) {
  let id = req.params.id;

  let member = new Object();

  if (req.body.name)
    member._name = req.body.name;
  if (req.body.birthdate)
    member._birthdate = req.body.birthdate;
  if (req.body.curp)
    member._curp = req.body.curp;
  if (req.body.rfc)
    member._rfc = req.body.rfc;
  if (req.body.address)
    member._address = req.body.address;
  if (req.body.email)
    member._email = req.body.email;
    if (req.body.username)
      member._username  = req.body.username;
  if (req.body.password)
    member._password = req.body.password;


  Member.findOneAndUpdate({ _id: id }, member).then(member => res.status(200).json({
    message: res.__('user.update.ok'),
    objs: user
  })).catch(error => res.status(500).json({
    message: res.__('user.update.err'),
    obj: error
  }));
}

function destroy(req, res) {
  const id = req.params.id;
  Member.deleteOne({ _id: id }).then(membe => res.status(200).json({
    message: res.__('member.delete.ok'),
    objs: user
  })).catch(error => res.status(500).json({
    message: res.__('member.delete.err'),
    obj: error
  }));
}

module.exports = {
  list,
  index,
  update,
  destroy
}
