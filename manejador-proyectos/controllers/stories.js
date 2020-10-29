const async = require('async');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Stories = require('../models/stories');

function list(req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  Projects.paginate({}, {page: page, limit: 100}).then(project => res.status(200).json({
      message: stories.list.ok,
      objs: stories
  })).catch(error => res.status(500).json({
      message: stories.list.err,
      obj: error
  }));
  }

  function index(req, res) {
    let id = req.params.id;
    Projects.findOne({_id: id}).then(user => res.status(200).json({
        message: stories.index.ok,
        objs: stories
    })).catch(error => res.status(500).json({
        message: stories.index.err,
        obj: error
    }));
  }

  function create(req, res) {

    let como = req.body.como;
    let quiero = req.body.quiero;
    let manera = req.body.manera;
    let dado = req.body.dado;
    let cuando = req.body.cuando;
    let entonces = req.body.entonces;

    let story = new Projects({
      _como : como,
      _quiero : quiero,
      _manera : manera,
      _dado : dado,
      _cuando : cuando,
      _entonces : entonces
    });

    story.save().then(obj => res.status(200).json({
      message : story.create.ok,
      objs : story
    })).catch(err=> res.status(500).json({
      message : story.create.err,
      objs : err
    }));

  }

  function update(req, res) {
    let id = req.params.id;

    let story = new Object();

    if(req.body.como)
        user._como = req.body.como;
    if(req.body.quiero)
        user._quiero = req.body.quiero;
    if(req.body.manera)
        user._manera = req.body.manera;
    if(req.body.dado)
        user._dado = req.body.dado;
    if(req.body.cuando)
        user._cuando = req.body.cuando;
    if(req.body.entonces)
        user._entonces = req.body.entonces;

    Stories.findOneAndUpdate({_id: id}, story, {omitUndefined: true}).then(story => res.status(200).json({
        message: story.update.ok,
        objs: story
    })).catch(error => res.status(500).json({
        message: story.update.err,
        obj: error
    }));
  }

  function destroy(req, res) {
    const id = req.params.id;
    Stories.deleteOne({_id: id}).then(story => res.status(200).json({
        message: story.destroy.ok,
        objs: story
    })).catch(error => res.status(500).json({
        message: story.destroy.err,
        obj: error
    }));
  }



