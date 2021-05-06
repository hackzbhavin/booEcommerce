import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import AllBooks from '../components/cart/AllBooks'



const ProductsPage = ({data}) => (
  
  <Layout>
   
      <Seo title="Products" />
              


              <AllBooks  
              books = {data.mybooks}
              />





  </Layout>
)

// graphql sql query 
export const query = graphql`
{
  mybooks:allContentfulBooks {
    edges {
      node {
        id
        title
        price
        category
        author
        description {
          description
        }
        image {
       
            gatsbyImageData(width: 150)
          
          
        }
      }
    }
  }


}




`

export default ProductsPage
