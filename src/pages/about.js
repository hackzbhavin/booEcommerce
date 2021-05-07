import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



import HeroSection from '../components/Reusable/Hero'
import Infoblock from '../components/Reusable/Infoblock'
import Teamphoto from '../components/about/Teamphoto'




const AboutPage = ({data}) => (
  
  <Layout>
   
      <Seo title="About" />
              
              <HeroSection
              img={data.img.childImageSharp.fluid}
              title='About Boo-Ecomm'
              heroclass = 'about-background'
              />

           
              
              <Teamphoto 
              person1_img ='https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              person2_img ='https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              person3_img ='https://images.pexels.com/photos/263564/pexels-photo-263564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              
              />

              <Infoblock 
              heading='About Vision'

              />

  </Layout>
)


// graphql sql query 
export const query = graphql`
{
  img:file(relativePath:{eq: "about.png"}){

  childImageSharp{
    
    fluid{
      ...GatsbyImageSharpFluid_tracedSVG

        }
    }
  }
}
`



export default AboutPage
