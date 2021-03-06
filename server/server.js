const express = require('express')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')
const orderRoutes = require('./routes/orders')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__ECOMM')
console.log(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  name: 'ecommerce',
  secret: 'shhhhh',
  secure: false
}))
app.use(passport.initialize())
app.use(passport.session())
require('./passport/Strategies')(passport)
require('./passport/Routes')(app, passport)
app.use(require('./config/error-handler'))

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

const server = app.listen(port, () => console.log(` 🤠 Running on port: ${port} 🤠`))

module.exports = server
