import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const style = {
  container: {
    border: '2px solid black',
    display: 'flex',
    width: '90vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}

const ProductList = ({ products, deleteProduct }) => 
  <div style={style.container}>
    {
      products.map(product => {
        return <ProductCard {...product} deleteProduct={deleteProduct}/>

      })
    }
  </div>

  ProductList.propTypes = {
    products: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired
  }

export default ProductList
