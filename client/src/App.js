import React from 'react'
import DataProvider from './DataProvider'

// import Layout from './components/structure/Layout'
import {BrowserRouter} from 'react-router-dom'


const App = () => 

  <BrowserRouter>
    <DataProvider />
  </BrowserRouter>



export default App