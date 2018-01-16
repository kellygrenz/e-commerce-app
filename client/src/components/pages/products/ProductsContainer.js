import React, {Component} from 'react'
import ProductList from './ProductList'
import $ from 'jquery'

class ProductsContainer extends Component {

state = {
  products: undefined
}

componentDidMount () {
  this.loadProductsFromServer()
}

loadProductsFromServer = () => {
  $.ajax({
    url: '/api/products',
    method: 'GET'
  }).done((response) => {
    console.log(response, 'products from server')
    this.setState({ products: response.data})
    this.props.loadProduct
  })
}

deleteProduct = (id) => {
  $.ajax({
    url: `/api/products/${id}`,
    method: 'DELETE'
  }).done((response) => {
    console.log('deleted product', response)
    this.loadProductsFromServer()
  })
}

render () {
  return (
    <div>
     
      {
        this.state.products
        ? <ProductList products={this.state.products} deleteProduct={this.deleteProduct} />
        : 'No Products'
      }
    </div>
  )
}

}

export default ProductsContainer

