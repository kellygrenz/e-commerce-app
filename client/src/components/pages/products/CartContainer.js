import React from 'react'
import CartList from './CartList'


const style = {
  container: {
    border: 'none',
    display: 'flex',
    width: '80vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}

const CartContainer = ({ domainData }) =>

  <div>
    {
       domainData.user != null
        ? <CartList
            cartProducts={domainData.user.cart}
            cartReady={domainData.cartReady}
          />
        : 'you must be logged in'
        
      }
    
  </div>


export default CartContainer
