import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Aos from "aos"
import "aos/dist/aos.css"

export default function SingleProductInfo() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <div className="row no-gutters bg-light position-relative my-5 ">
        <div
          className="col-md-4 position-static p-4 pl-md-0 mt-5"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <h5 className="align-self-center ml-5 display-4 text-uppercase mt-5 d-flex align-items-center">
            Easy Process <span className="text-monospace "> Easy Push</span>
          </h5>
        </div>
        <div
          className="col-md-8 mb-md-0 p-md-4"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <StaticImage
            src="../../images/product2.png"
            className="w-100  "
            alt="..."
          />
        </div>
      </div>
    </div>
  )
}
