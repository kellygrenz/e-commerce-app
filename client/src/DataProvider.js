import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'

class DataProvider extends Component {
  
  state = {
    isLoaded: false,
    products: []
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'products from SERVER')
        this.setState({ isLoaded: true, products: response.data})
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log('deleted data provider', response)
        this.methods.getAllProducts()
      })
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
  }

  render () {
    const domainData = {
      ...this.state, 
      ...this.methods
    }
    return (
      this.state.isLoaded 
        ? <Layout domainData={domainData}/>
        : <div>...Loading</div>
    )
  }
}
export default DataProvider
