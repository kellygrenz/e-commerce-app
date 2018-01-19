import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import AddProductContainer from '../pages/products/AddProductContainer'
import ProductsContainer from '../pages/products/ProductsContainer'
import ProductPage from '../pages/products/ProductPage'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'
import {Route} from 'react-router-dom'


const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#455A64',
    padding: '20px'
  }
}

const Main = ({ domainData }) =>
  <main style={style.container}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
      <Route path='/add-products' component={AddProductContainer} />
      <Route exact path='/product/:_Id' component={ProductPage} />
      <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
      <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
  </main>

export default Main
