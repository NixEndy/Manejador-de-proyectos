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
  const username = req.body.email;
  const password = req.body.password;
  async.parallel({
    user: callback => Member.findOne({ _email: email })
      .select('_password _salt')
      .exec(callback)
  }, (err, result) => {
    if (result.member) {
      bcrypt.hash(password, result.member.salt, (err, hash) => {
        if (hash === result.member.password) {
          res.status(200).json({
            message: res.__('member.login.ok'),
            objs: jwt.sign(result.member.id, jwtKey)
          });
        } else {
          res.status(403).json({
            message: res.__('member.login.err')
          });
        }
      });
    } else {
      res.status(403).json({
        message: res.__('member.login.err')
      });
    }
  });
}

module.exports = {
  signup,
  login
}