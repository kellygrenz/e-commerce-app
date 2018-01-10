const express = require('express')
const Router = express.Router()
const Product = require('../models/Product')

// we shortened this code below, but updating the app.use in server.js
Router.route('/')
  .get((req, res) => {
    Product.find((err, products) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: products})
      }
    })
  })
  .post((req, res) => {
      const product = new Product()
      product.setProductData(req.body)
      product.setDate()
      product.save((err, savedProduct) => {
        if (err) {
          res.json({error: err})
        } else {
          res.json({msg: 'SUCCESS', data: savedProduct})
        }
      })
    })

    Router.route('/:productId')
      .get((req, res) => {
        const productId = req.params.productId
        Product.findById({ _id: productId }, (err, product) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: `FOUND: ${productId}`, product })
          }
        })
        
      })
    .put((req, res) => {
      const productId = req.params.productId
      Product.findById({ _id: productId }, (err, product) => {
        if (err) {
          res.json({ error: err})
        } else {
         product.setProductData(req.body)
          product.save((err, updatedProduct) => {
            if (err) {
              res.json({ error: err})
            } else {
              res.json({ msg: `SUCCESSFULLY UPDATED: ${productId}`, data: updatedProduct})
            }
          })
        }
      })
    })

module.exports = Router