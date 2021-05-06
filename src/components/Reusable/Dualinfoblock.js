import React from 'react'
import Heading from './Heading'
// import {Link} from 'gatsby'



export default function Dualinfoblock({heading, img}) {
    return (
   
        <section className='my-4 py-4 bg-theme'>
            <div className='container'>
                <Heading title={heading} />
            
                <div className='row'>
                    <div className='col-7 mx-auto'>
            
                        <p className='lead text-white mb-5'>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, voluptates ipsam. 

                        </p>
                    </div>
    
                    <div className='col-5'>
                    
                            <div class="card bg-dark" >
                            <img src={img} class="card-img-top img-fluid" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title text-white"> Product1</h5>
                                 </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
