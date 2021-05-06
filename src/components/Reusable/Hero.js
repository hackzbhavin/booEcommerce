import React from 'react'
import BackgroundImage from 'gatsby-background-image'



export default function Hero({img, title, subtitle, heroclass}) {
    return (
  
        <BackgroundImage
      
        className={heroclass}
        fluid={img}
        >
        <h2 className='text-primary text-uppercase display-4 text-center'>{title} </h2>

        <div>
        <h4 className='text-warning'> {subtitle} </h4>
        
        </div>

        </BackgroundImage>
    )
}
