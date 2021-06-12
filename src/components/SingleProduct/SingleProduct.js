import React from "react"
import { graphql } from "gatsby"
// import {MDXRenderer} from 'gatsby-plugin-mdx'
import { GatsbyImage } from "gatsby-plugin-image"
import Prism from "prismjs"

import Layout from "../layout"

//css
import "../css/bootstrap.css"

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
          <div class="row mt-5">
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
                      <div className="col-6">
                        <GatsbyImage image={image} class="rounded float-left" />
                      </div>

                      <div className="col-6">
                          {/* Write the code to print on webpage */}
                        <pre>
                          <code className="language-javascript">
                            {`
  
                                onSubmit(e) {
                                e.preventDefault();
                                cart = {
                                    title: '${prod.title}',
                                    price : 'Rs. ${prod.price}' 
                                    };
                                }
                            `}
                          </code>
                        </pre>

                        <a
                          href="https://github.com/LeaVerou/prism/"
                          class="btn btn-danger svg-icon "
                        >
                          <em class="mr-2" data-feather="github"></em>
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
