import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

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

const ProductList = ({ products, deleteProduct, addItemToCart }) => 
  <div style={style.container}>
    {
      products.map(product => {
        return <ProductCard {...product} deleteProduct={deleteProduct} addItemToCart={addItemToCart}/>

      })
    }
  </div>

  ProductList.propTypes = {
    products: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired
  }

export default ProductList
