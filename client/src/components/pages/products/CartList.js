import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    width: '90vw',
    justifyContent: 'column',
    alignItems: 'center'
  },
  heading: {
    fontSize: '30px',
    textAlign: 'center'
  }
}


const CartList = ({cartProducts, cartReady, removeItemFromCart }) =>
  <div style={style.container}>
    <h2 style={style.heading}>Items in Your Cart: </h2>
    {
      cartReady
      ? cartProducts.map(product => 
         <CartCard 
          product={product}
          removeItemFromCart={removeItemFromCart}
         />
         )
         : 'Cart is empty'
    }
  </div>

CartList.propTypes = {
  cartProducts: PropTypes.object.isRequired,
  cartReady: PropTypes.bool.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
  
}

export default CartList
