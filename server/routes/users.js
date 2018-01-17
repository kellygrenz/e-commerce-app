const express = require('express')
const Router = express.Router()
const User = require('../models/User')

Router.route('/')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: users})
      }
    })
  })
  .post((req, res) => {
    const user = new User()
    user.setUserData(req.body)
    user.setDate()
    user.save((err, savedUser) => {
      if (err) {
        res.json({ error: err})
      } else {
        res.json({ msg: 'SUCCESS ON POST', data: savedUser})
      }
    })
  })

  Router.route('/:userId')
    .get((req, res) => {
      const userId = req.params.userId
      User.findById({_id: userId}, (err, user) => {
        if (err) {
          res.json({ error: err})
        } else {
          res.json({ msg: `Found ${userId}`, data: user})
        }
      })
    })
    .put((req, res) => {
      const editUserId = req.params.userId
      User.findById({ _id: editUserId}, (err, user) => {
        if (err) {
          res.json({ error: err})
        } else {
          user.setUserData(req.body)
          user.save((err, updatedUser) => {
            if (err) {
              res.json({ error: err})
            } else {
              res.json({msg: `Updated ${editUserId}`, user: updatedUser})
            }
          })
        }
      })
    })
    .delete((req, res) => {
      const deleteId = req.params.userId
      User.remove({_id: deleteId}, (err, user) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({ msg: `${deleteId} has been deleted` })
        }
      })
    })

  module.exports = Router