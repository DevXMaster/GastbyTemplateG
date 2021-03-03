import React from "react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const AboutMe = ({ setCurrentNavItem }) => {
  const { ref: element, inView: appear } = useInView({
    /* Optional options */
    threshold: 0.8,
  })
  useEffect(() => {
    if (appear) {
      setCurrentNavItem(true)
    } else {
      setCurrentNavItem(false)
    }
  })

  return (
    <>
    <div className='section has-background-success'>
      <div className="container is-fluid" id="about" ref={element}>
        <div className="hero is-fullheight ">
          <h1 className='title has-text-centered'>About</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe
