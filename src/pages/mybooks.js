import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



import SingleProduct from '../components/SingleProduct/SingleProduct'


const MyBooksPage = () => (
  
  <Layout>
   
      <Seo title="MyBooks" />
      
      <SingleProduct />
              


  </Layout>
)



// graphql sql query 
export const query = graphql`
{
  img:file(relativePath:{eq: "heromain.png"}){

  childImageSharp{
    
    fluid{
      ...GatsbyImageSharpFluid_tracedSVG

        }
    }
  }


  mybooks:allContentfulBooks(limit:6) {
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
       
            gatsbyImageData(width: 150, height:250)
          
          
        }
      }
    }
  }


}




`


export default MyBooksPage
