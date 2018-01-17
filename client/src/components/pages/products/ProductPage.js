import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SingleProduct from './SingleProduct'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'

class ProductPage extends Component {
  state = {
    product: null
  }

  componentDidMount () {
    this.singleProductFromServer(this.props.match.params._Id)
  }

  singleProductFromServer = (_Id) => {
    $.ajax({
      url: `/api/products/${_Id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, 'YOU FOUND THE PRODUCT')
      this.setState({product: response.product })
    })
  }

  render () {
    return (
    <div>
      {
        this.state.product
        ? <SingleProduct product={this.state.product} />
        : 'NO PRODUCTS'
      }
     
    </div>
    )
  }

}

ProductPage.PropTypes = {
  product: PropTypes.string.isRequired
}

export default withRouter(ProductPage)
