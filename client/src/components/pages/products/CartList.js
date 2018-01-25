import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, cartReady }) =>
  <div>
    {
      cartProducts.length > 0
      ? cartProducts.map(product => 
         <CartCard 
          product={product}
         />
         )
         : 'Cart is empty'
    }
  </div>

CartList.propTypes = {
  cartProducts: PropTypes.object.isRequired,
  cartReady: PropTypes.bool.isRequired
  
}

export default CartList
