import React, {useEffect} from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
import Aos from 'aos'

export default function Infoblock({heading}) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    return (
   
        <section className='bg-light my-5 py-4'  data-aos='fade-right' >

        <div className='container' >

            <Heading title={heading} />

                <div className='row' >   

                    <div className='col-10 col-sm-8 mx-auto text-center'>
                    <blockquote class="blockquote text-center">
                    <p class="mb-0 text-dark">A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                        <Link to='/about'>
                        {heading}
                        
                        </Link>

                    </div>
                </div>
        </div>

        </section>
    )
}
