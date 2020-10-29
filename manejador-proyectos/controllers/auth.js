const async = require('async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Member = require('../models/member');


function signup(req, res, next) {

  async.parallel({
    salt: (callback) => {
      bcrypt.genSalt(10, callback);
    }
  }, (err, result) => {
    bcrypt.hash(req.body.password, result.salt, (err, hash) => {
      let member = new Member({
        _name : req.body.name,
        _birthdate : req.body.birthdate,
        _curp : req.body.curp,
        _rfc : req.body.rfc,
        _address : req.body.address,
        _skills : req.body.skills,
        _username : req.body.username,
        _password : hash,
        _salt : result.salt
      });

      member.save().then(obj => res.status(200).json({
        message: 'User created',
        objs: obj
      })).catch(err => res.status(500).json({
        message: 'Unable to create user',
        objs: err
      }));
    });
  });

}

function login(req, res) {
  console.log('login');
  
}

module.exports = {
  signup,
  login
}