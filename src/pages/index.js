import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from '../components/Reusable/Hero'
import Infoblock from '../components/Reusable/Infoblock'
import Dualinfoblock from '../components/Reusable/Dualinfoblock'
import BooksCart from '../components/cart/BooksCart'



const IndexPage = ({data}) => (
  
  <Layout>
   
      <Seo title="Home" />
              



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

              <Dualinfoblock 
              heading='First Product' 
              img='https://images.pexels.com/photos/373465/pexels-photo-373465.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
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
       
            gatsbyImageData(width: 150, height:250)
          
          
        }
      }
    }
  }


}




`

export default IndexPage
