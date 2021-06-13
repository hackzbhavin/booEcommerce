// const fs = require('fs')


exports.createPages = async ({ actions: {createPage},graphql }) => {

  const data = await graphql(`
  {
    allContentfulBooks {
      edges {
        node {
          id
        }
      }
    }
  }
  `)

  if(data.errors){
    console.log('Error Retriving data', data.errors)
    return 
  }

//stores the path of components where we want to catch the id
const productComponent = require.resolve("./src/components/SingleProduct/SingleProduct.js") 


data.data.allContentfulBooks.edges.forEach(edge => {
  createPage({
    path:`${edge.node.id}/`,
    component:productComponent,
    context:{
      id:edge.node.id,
    }
  })
  
});

}