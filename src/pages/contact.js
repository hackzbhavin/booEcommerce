
import * as React from "react"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



import HeroSection from '../components/Reusable/Hero'
import Infoblock from '../components/Reusable/Infoblock'
import Contact from '../components/contact/Contact'




const ContactPage = ({data}) => (
  
  <Layout>
   
      <Seo title="Contact" />
              
              <HeroSection
              img={data.img.childImageSharp.fluid}
              title='Contact Page'
              heroclass = 'about-background'
              />

        

              <Infoblock 
              heading='How can we Help'

              />

              <Contact />

  </Layout>
)


// graphql sql query 
export const query = graphql`
{
  img:file(relativePath:{eq: "contact.png"}){

  childImageSharp{
    
    fluid{
      ...GatsbyImageSharpFluid_tracedSVG

        }
    }
  }
}
`



export default ContactPage
