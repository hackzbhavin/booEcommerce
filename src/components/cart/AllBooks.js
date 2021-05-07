import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import {  GatsbyImage  } from "gatsby-plugin-image"


export default class AllBooks extends Component {

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
            <section className='py-5 bg-allbooks-theme'>
            <div className='container'>
            
                <Heading title='Books' />
            
                <div className='row'>
            
                {
                    this.state.mybooks.map(({node})=>{
                        const image = node.image.gatsbyImageData

                        return(
                            <div
                            
                            key ={node.id}
                            
                            className='card-deck my-2  col-10 col-md-4 mx-auto '
                        >

                        

                     
                 
                        
                      
                            <div class="product">
                            <div class="imgbox">  <GatsbyImage image={image} class="card-img-top mx-auto p-2 mh-100 mw-100 " /> </div>
                            <div class="specifies">
                                <h2>{node.title} <br/> <span class='text-success'>Rs.{node.price}</span></h2>
                             <label>Author</label>
                                <ul>
                                    <li class='font-weight-bold text-monospace'>{node.author}</li>
                             
                                </ul> <label>Genre</label>
                                <p class='text-muted'>{node.category}</p>

                                <ul class="colors">
                 
                                </ul> 
                                <button class="snipcart-add-item btn-forallbooks btn-primary"
                                   data-item-id={node.id}
                                   data-item-price={node.price}
                                   data-item-url="https://boo-ecomm.netlify.app/"
                                   data-item-image={node.image.gatsbyImageData}
                                   data-item-name={node.title}
                                   >Buy Now</button>
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
