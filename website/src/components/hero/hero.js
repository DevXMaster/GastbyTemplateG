import React from "react"
import "./hero.scss"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const Hero = ({setCurrentNavItemHero}) => {
  const [YOffset, setYOffset] = useState(window.pageYOffset)
  const handleScroll = () => {
    if (window.pageYOffset < window.innerHeight) {
      setYOffset(window.pageYOffset)
    }
  }

  const { ref: element, inView: appear } = useInView({
    /* Optional options */
    threshold: 0.8,
  })
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (appear) {
        setCurrentNavItemHero(true)
    } else {
        setCurrentNavItemHero(false)
    }
  })

  return (
    <>
      <section className="hero hero-home is-fullheight" id="home" ref={element}>
        <div className="background-img">
          <img
            style={{ transform: `translateY(${YOffset * 0.16}px)` }}
            src="https://picsum.photos/800"
            alt=""
          />
        </div>
        <div className="hero-body">
          <div className="container">

           <h1 className='title has-text-centered'> Hero</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
