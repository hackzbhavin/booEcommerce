import React from 'react'
import {graphql} from 'gatsby'
// import {MDXRenderer} from 'gatsby-plugin-mdx'


export const query = graphql`
query($id: String!){
    contentfulBooks(id: {eq: $id}) {
        id
        author
        category
      }
}`

export default function SingleProduct({ data })  {

    const prod = data.contentfulBooks
    return (
        <section>
        <h1> {prod.id}</h1>
        <h1> {prod.author}</h1>
        <h1> {prod.category}</h1>
      </section>

    )
}




