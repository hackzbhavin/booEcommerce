import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
   
        <section className='bg-theme my-5 py-4'>

        <div className='container'>

            <Heading title={heading} />

                <div className='row'>   

                    <div className='col-10 col-sm-8 mx-auto text-center'>
                    <blockquote class="blockquote text-center">
                    <p class="mb-0 text-white">A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                        <Link to='/about'>
                        <button className='btn btn-warning btn-lg '>{heading}</button>
                        
                        </Link>

                    </div>
                </div>
        </div>

        </section>
    )
}
