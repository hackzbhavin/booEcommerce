import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Welcome() {
    return (
        <div>
        <div className="row no-gutters bg-light position-relative my-5">
        <div className="col-md-8 mb-md-0 p-md-4">
          <StaticImage src="./scp.png" className="w-100  " alt="..." />
        </div>
        <div className="col-md-4 position-static p-4 pl-md-0">
          <h5 className="mt-5 display-4 text-uppercase">Buy Books from our <span className='text-monospace '> Closet</span></h5>

          <p className='text-lowercase my-3'>We have brought some exciting products which will help you lead your excitment towards the reading</p>
        </div>
      </div>
      
      
        </div>
    )
}
