import React from "react"
import "./services.scss"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Services = ({ setCurrentNavItemServices }) => {
  const { ref: element, inView: appear } = useInView({
    /* Optional options */
    threshold: 0.5,
  })

  useEffect(() => {
    if (appear) {
      setCurrentNavItemServices(true)
    } else {
      setCurrentNavItemServices(false)
    }
  })

  return (
    <>
    <div className='section has-background-primary' ref={element}>
      <div className="container is-fluid" id="services" >
        <div className="hero is-fullheight ">
          <h1 className='title has-text-centered'>Services</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
