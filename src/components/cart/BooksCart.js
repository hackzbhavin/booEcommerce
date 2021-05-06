import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import { GatsbyImage  } from "gatsby-plugin-image"



export default class BooksCart extends Component {

constructor(props){
    super(props)
    this.state ={
        books: props.books.edges,
        mybooks: props.books.edges
    } 
}

    render() {
        return (
            <div>
            <section className='py-5 '>
            <div className='container'>
            
                <Heading title='Books' />
            
                <div className='row'>
            
                {
                    this.state.mybooks.map(({node})=>{
                        const image = node.image.gatsbyImageData

                        return(
                            <div
                            
                            key ={node.id}
                            
                            className='card-deck my-2  col-12 col-md-4 mx-auto '
                        >

                      

                                                    
                          
                            <div class="row no-gutters bg-light position-relative ">
                            <div class="col-md-6 mb-md-0 p-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                            <GatsbyImage image={image} class="card-img-top mx-auto p-2 mh-100 mw-100 " />
                            </div>
                            <div class="col-md-6 position-static p-4 pl-md-0 ">
                              <h5 class="mt-0 m-2">{node.title}</h5>
                              <p className='text-monospace m-2'>{node.author}</p>
                              <p class='text-muted m-2'>{node.category}</p>
                              <p class="card-text text-left text-success m-2">Rs. {node.price}</p>

                              <button class="snipcart-add-item btn btn-warning btn-block m-2 books-buy-btn "
                              data-item-id={node.id}
                              data-item-price={node.price}
                              data-item-url="www.learncodeonline.com"
                              data-item-image={node.image.gatsbyImageData}
                              data-item-name={node.title}
                              
                              >Buy</button>
                            </div>
                          </div>
                   
            

                        </div>
                        
                        
                        )
            
                        
            
            
            
                    })
                }
                    
                </div>
                
            </div>
            </section>
            
            </div>
        )
    }
}
