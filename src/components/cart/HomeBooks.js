import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import { GatsbyImage  } from "gatsby-plugin-image"
import { Link } from 'gatsby'
// import {Link} from 'gatsby'




const getCat = items => {
    let holdItems = items.map(items=>{
        return items.node.category
    })
    //for no repetations
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["all", ...categories]
    return categories
}



export default class BooksCart extends Component {

    
constructor(props){
    super(props)
    this.state ={
        books: props.books.edges,
        mybooks: props.books.edges,
        mycategories:getCat(props.books.edges)
    } 
}

cateClicked = category =>{
    let keepItSafe = [...this.state.books]
    if(category==='all'){
        this.setState(()=>{
            return {
                mybooks: keepItSafe
            }
        })
    }else{
        let holdMeCategories = keepItSafe.filter(({node})=>node.category === category)
        this.setState(()=>{
            return {
                mybooks: holdMeCategories
            }
    })
}
}


    render() {

        return (
            <div>
            <section className='py-5 bg-light'  data-aos='fade-left' data-aos-anchor-placement="top-center">
            <div className='container'>
            
                <Heading title='Our Top Picks' />
                
                <div className='row my-3'>
                <div className='col-10 mx-auto text-center'>

                {
                    this.state.mycategories.map((category, index)=>{
                        return (
                            <button type='button' className='btn btn-info  m-3 px-3'
                            key={index}
                            onClick={()=>{
                                this.cateClicked(category)
                            }}

                            >{category}</button>
                        )
                    })
                }
                </div>
                </div>

                <div className='row'>
                {
                    this.state.mybooks.map(({node})=>{
                        const image = node.image.gatsbyImageData
                        const id = node.id
                        return(
                            <div
                            
                            key ={node.id}
                            
                            className='card-deck my-2  col-12 col-md-4 mx-auto '
                        >

<Link to={id}>                            

                                                    
                          
                            <div class="row no-gutters bg-light position-relative ">
                            <div class="col-md-6 mb-md-0 p-md-4 shadow-lg p-3 mb-5 bg-white rounded book-cover">
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
                              data-item-url="https://boo-ecomm.netlify.app/"
                              data-item-image={node.image.gatsbyImageData}
                              data-item-name={node.title}
                              
                              >Buy</button>
                            </div>
                          </div>
                   
                          <br/>
                          <br/>
                          <br/>

                          </Link>

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
