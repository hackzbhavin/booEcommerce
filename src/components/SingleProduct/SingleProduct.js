import React, {useEffect} from "react"
import { graphql } from "gatsby"
// import {MDXRenderer} from 'gatsby-plugin-mdx'
import { GatsbyImage } from "gatsby-plugin-image"
import Aos from 'aos'

import Layout from "../layout"
import SingleProductFeatures from "./SingleProductFeatures"
// import CarouselCategory from "./CarouselCategory"

//css
import "../css/bootstrap.css"
import 'aos/dist/aos.css'



export const query = graphql`
  query($id: String!) {
    contentfulBooks(id: { eq: $id }) {
      id
      title
      price
      author
      category
      description {
        description
      }
      image {
        gatsbyImageData(height: 250, width: 150)
      }
    }
  }


`

export default function SingleProduct({ data }) {
  const prod = data.contentfulBooks
  const image = data.contentfulBooks.image.gatsbyImageData
  
//for animations
useEffect(() => {
    
    Aos.init({duration:2000});

}, [])


  return (
    <Layout>
      <section class=" pt-5 pb-6 mt-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex flex-row align-items-center justify-content-between">
              <div class="heading-brand">Written By - {prod.author}</div>
              {/* <a href="https://prismjs.com/download.html" class="btn btn-dark" target="_blank">Download</a> */}
            </div>
          </div>
          <div class="row mt-6">
            <div class="col-md-8 mx-auto text-center">
              <h1>{prod.title}</h1>
              <p class="lead mb-5">{prod.description.description}</p>
            </div>
          </div>

          <div class="row mt-5" data-aos='fade-up' data-aos-anchor-placement="top-center">
            <div class="col-md-9 mx-auto">
              <div class="code-window">
                <div class="dots">
                  <div class="red"></div>
                  <div class="orange"></div>
                  <div class="green"></div>
                </div>
                <pre class="language-html line-numbers">
                  <code class="language-html">
                    <div class="row mt-4 p-3">
                      <div className="col-md-4 ">
                        <GatsbyImage image={image} class="rounded float-left" />
                      </div>

                      <div className="col-md-8 ">
                        {/* Write the code to print on webpage */}
                        <pre>
                          <code className="language-javascript">
                            {`
    onSubmit(e) {
        e.preventDefault();
        cart = {
            title: '${prod.title}',
            price : 'Rs. ${prod.price}', 
            author : '${prod.author}', 
            genre : '${prod.category}', 
        };
    }
                            `}
                          </code>
                        </pre>

                        <button
                          class="snipcart-add-item btn btn-danger svg-icon "
                          data-item-id={prod.id}
                          data-item-price={prod.price}
                          data-item-url="https://boo-ecomm.netlify.app/"
                          data-item-name={prod.title}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Component */}
<SingleProductFeatures />

    </Layout>
  )
}
