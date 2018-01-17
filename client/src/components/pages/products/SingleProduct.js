import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#263238',
    width: '75vw',
    alignItems: 'center'
  },
  title: {
    color: '#fff'
  },
  img: {
    maxWidth: '700px',
    marginBottom: '20px'
  },
  price: {
    color: '#F0F4C3',
    fontSize: '18px'
  }
}

const SingleProduct = ({ product }) => 
  <div style={style.container}>
    <h1 style={style.title}>{product.name}</h1>
    <p style={style.price}>{product.price}</p>
    <img style={style.img} src={product.img} />
  </div>

SingleProduct.PropTypes = {
  product: PropTypes.string.isRequired
}

export default SingleProduct
