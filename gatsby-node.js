// const fs = require('fs')






// // module.exports.onCreateNode = ({ node, actions }) => {
// //     const { createNodeField } = actions

// //     if(node.internal.type === 'ContentfulAsset'){
// //     // console.log(JSON.stringify(node, undefined, 4))
// //     data= JSON.stringify(node, undefined, 4)

    
// //     fs.writeFile('Output2.json', data,{ flag: 'a+' }, (err) => {
// //           if (err) throw err;
// // })
// //     }  

    
// // }

// exports.createPage = async function({actions, graphql}){
//     const {data} = await graphql`
//     query{
//         mybooks: allContentfulBooks {
//             edges {
//               node {
//                 id
//                 title
//               }
//             }
//           }
//         }`

        


//     //create single
//     data.allContentfulBooks.edges.forEach(edge=>{
//         const slug = edge.node.id
//         const title = edge.node.title

//         actions.createPage({
//             path:slug,
//             components: require.resolve(`./src/components/SingleProduct/SingleProduct.js`),
//             context:{id},
//         })

//     })


//   }

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

const productComponent = require.resolve("./src/components/SingleProduct/SingleProduct.js") 

data.data.allContentfulBooks.edges.forEach(edge => {
  createPage({
    path:`${edge.node.id}/`,
    component:productComponent,
    context:{
      id:edge.node.id
    }
  })
  
});

}