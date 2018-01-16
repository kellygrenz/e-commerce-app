import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'
// import PropTypes from 'prop-types'

const Layout = ({ domainData}) =>
  <div>
    <Header />
    <Main 
      domainData={domainData}
    />
    <Footer />
  </div>

  // Layout.propTypes = {
  //   domainData: AppPropTypes.domainData
  // }

export default Layout