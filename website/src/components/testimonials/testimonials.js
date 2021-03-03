import React from "react"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import SimpleSlider from "./carousel"
import "./testimonials.scss"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Testimonials = ({ setCurrentNavItem }) => {
  const { ref: element, inView: appear } = useInView({
    /* Optional options */
    threshold: 1,
  })
  useEffect(() => {
    if (appear) {
      setCurrentNavItem(true)
    }else{
      setCurrentNavItem(false)
    }
  })

  return (
    <>
      <div
        className="section has-background-warning"
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ref={element}
        id='testimonials'
      >
        <div className="container">
          <h2 className="title p3-at-xs">Testimonials</h2>
        </div>
        <div className="container-carrousel">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testi_carousel">
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
