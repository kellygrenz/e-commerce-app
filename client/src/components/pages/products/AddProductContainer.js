import React, {Component} from 'react'
import AddProductForm from './AddProductForm'
import $ from 'jquery'

class AddProductContainer extends Component {
  state = {
    name: undefined,
    price: undefined,
    img: undefined,
    category: undefined,
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  submitProductToServer = () => {
    const {name, price, img, category} = this.state
    const newProduct={name, price, img, category}
    $.ajax ({
      url: '/api/products',
      method: 'POST',
      data: newProduct
    }).done((response) => {
      console.log(response, 'hey!')
    }) 

  }

  render () {
    return <AddProductForm 
      {...this.state}
      onChangeHandler={this.onChangeHandler}
      submitProductToServer={this.submitProductToServer}
      />
  }

}

export default AddProductContainer
