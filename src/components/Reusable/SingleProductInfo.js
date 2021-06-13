import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default function SingleProductInfo() {
    return (
        <div>
             <div className="row no-gutters bg-light position-relative my-5">
        <div className="col-md-12 mb-md-0 p-md-4">
          <StaticImage src="../../images/product2.png" className="w-100  " alt="..." />
        </div>
       
      </div>
        </div>
    )
}
