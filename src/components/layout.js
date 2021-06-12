/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

//imports
import Footer from './Reusable/Footer'
import Navbar from './Reusable/Navbar'

// css 
import "./css/bootstrap.min.css"
import "./css/layout.css"
import "./css/product.css"


const Layout = ({children}) => (
  
  <div className="bg-light">
<Navbar />
 
 
  {children}


<Footer  />
  
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
