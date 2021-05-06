import React from 'react'
import Heading from '../Reusable/Heading'


export default function Contact() {
    return (
        <section className='py-3'>
        
        <Heading title='Contact Us' />

            <div className='col-10 col-sm-9 mx-auto'>

            <form action='https://formspree.io/f/xeqvennd' method='POST'>

            <div className='form-group'>
                
                    <input 
                    className='form-control' 
                    type='text'
                    id='name' 
                    placeholder='Your Name' 
                    name='name'
                    required
                    />
                    </div>

                    <div className='form-group'>

                    <input 
                    className='form-control' 
                    type='email'
                    id='email' 
                    placeholder='Your Email Id' 
                    name='email'
                    required
                    />
                    </div>

                    <div className='form-group'>

                    <input 
                    className='form-control' 
                    type='number'
                    min ='0'
                    id='phone' 
                    placeholder='Your Phone Number' 
                    name='phone'
                    required
                    />
                    </div>

                    <div className='form-group'>

                    <input 
                    className='form-control' 
                    type='text'
                    id='description' 
                    placeholder='Your Description max:300' 
                    name='description'
                    required
                    />

                    </div>



            <button 
            type="submit" 
            className='btn btn-info text-dark btn-block shadow-lg p-3 mb-5 bg-white rounded'
            >Submit</button>    

            </form>
                
            </div>
        </section>
    )
}
