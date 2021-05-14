import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Welcome from '../components/Reusable/Welcome'
import HeroSection from '../components/Reusable/Hero'
import Infoblock from '../components/Reusable/Infoblock'
import BooksCart from '../components/cart/BooksCart'



const IndexPage = ({data}) => (
  
  <Layout>
   
      <Seo title="Home" />
              

<Welcome />

              <HeroSection
              img = {data.img.childImageSharp.fluid}
              title='BooEcomm'
              subtitle='Bring Brains not Heads'
              heroclass = 'hero-background '
            />

              <BooksCart  
              books = {data.mybooks}
              />


              <Infoblock 
              heading='About Us'

              />




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

export default IndexPage
