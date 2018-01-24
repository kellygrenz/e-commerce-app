const express = require('express')
const Router = express.Router()
const User = require('../models/User')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    User.find()
      .populate('cart')
      .exec((err, users) => {
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

  Router.route('/cart/:userId')
  .put((req, res) => {
    console.log(req.params)
    const userId = req.params.userId
    User.findById({_id: userId}, (err, user) => {
      if (err) {
        res.json({ error: err })
      } else {
        console.log('THIS IS THE PRODUCT ID', req.body.product_id)
        user.cart.push(mongoose.Types.ObjectId(req.body.product_id))        
        console.log('USER CART FOUND', user.cart)
        user.save((err, user) => {
          if (err) {
            res.json({ error: err })
          } else {
            User.findById({_id: userId})
              .populate('cart')
              .exec((err, foundUser) => {
                console.log('FOUND USER', foundUser.cart)
                if (err) {
                  res.json({ error: err })
                } else {
                  res.json({ cart: foundUser.cart })
                }
              })
          }
        })
      }
    })
  })

  Router.route('/removeFromCart/:userId')
    .put((req, res) => {
      const userId = req.params.userId
      User.findById({_id: userId}, (err, user) => {
        if (err) {
          res.json({ error: err })
        } else {
          user.cart.splice(user.cart.indexOf(req.body.product_id), 1)
          user.save((err, user) => {
            if (err) {
              res.json({ error: err})
            } else {
              User.findById(user._id)
              .populate('cart')
              .exec((err, user) => {
                if (err) {
                  res.json({ error: err})
                } else {
                  res.json({ data: user.cart})
                }
              })
            }
          })
        }
      })
    })

  Router.route('/:userId')
    .get((req, res) => {
      const userId = req.params.userId
      User.findById({_id: userId})
      .populate('cart')
      .exec((err, user) => {
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