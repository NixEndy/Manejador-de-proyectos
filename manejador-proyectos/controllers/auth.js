const async = require('async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const Member = require('../models/member');

const jwtKey = config.get('secret.key');

/*function signup(req, res) {
  async.parallel({
    salt: (callback) => {
      bcrypt.genSalt(10, callback);
    }
  }, (err, result) => {
    bcrypt.hash(req.body.password, result.salt, (err, hash) => {
      let member = new Member({
        _name: req.body.name,
        _birthdate: req.body.birthdate,
        _curp: req.body.curp,
        _rfc: req.body.rfc,
        _address: req.body.address,
        _skillList: req.body.skillList,
        _email: req.body.email,
        _username: hash,
        _salt: result.salt
      });

      member.save().then(member => res.status(200).json({
        message: res.__('member.register.ok'),
        objs: member
      })).catch(error => res.status(500).json({
        message: res.__('member.register.err'),
        obj: error
      }));
    });
  });
}

function login(req, res) {
  const email = req.body.username;
  const password = req.body.password;
  async.parallel({
    member: callback => member.findOne({ _username: username })
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
}*/

module.exports = {
  /*signup,
  login*/
}