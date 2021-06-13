import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
export default function CarouselCategory() {
  return (
    <StaticQuery
      query={graphql`
      {
      mybooks:allContentfulBooks(sort: {fields: category}) {
        edges {
          node {
            id
            title
            category
          }
        }
      }
    }
      `}
      render={data => (
        <section>

        <Carousel>
            <Carousel.Item interval={500}>
          
              <Carousel.Caption>
                <h3>{data.node.id}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
        
          </Carousel>
            </section>
            
      )}
    />
  )
}
