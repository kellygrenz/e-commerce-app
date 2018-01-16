import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import AddProductContainer from '../pages/products/AddProductContainer'
import ProductsContainer from '../pages/products/ProductsContainer'
import {Route} from 'react-router-dom'


const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#DCC6E0',
    padding: '20px'
  }
}

const Main = () =>
  <main style={style.container}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={ProductsContainer} />
      <Route path='/add-products' component={AddProductContainer} />
  </main>

export default Main
