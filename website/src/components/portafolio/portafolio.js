import React, { useState } from "react"
import "./portafolio.scss"
import Modal from "./modal"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react"

const Portafolio = ({setCurrentNavItemPortafolio}) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const clickHandler = (img) => {
    setSelectedImg(img)
  }
  const exitClickHandler = () => {
    setSelectedImg(null)
  }
  const showModal = () => {
    if (selectedImg) {
      return (<Modal selectedImg={selectedImg} exitClickHandler={exitClickHandler} />)
    }
  }

  const { ref:element, inView:appear } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if (appear) {
      setCurrentNavItemPortafolio(true)
    } else {
      setCurrentNavItemPortafolio(false)
    }
  })
  return (
    <>
      <section id="portfolio" ref={element}>
        <div className='section has-background-danger'>

          <div className="container block">
            <h2 className="title" >Portfolio</h2>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column  mx-2" onClick={() => { clickHandler(1) }}>
                <figure className="image is-square">
                  <img src="https://picsum.photos/200" />
                </figure>
              </div>
              <div className="column mx-2" onClick={() => { clickHandler(2) }}>
              <figure className="image is-square">
                  <img src="https://picsum.photos/200" />
                </figure>
              </div>
              <div className="column mx-2" onClick={() => { clickHandler(3) }}>
              <figure className="image is-square">
                  <img src="https://picsum.photos/200" />
                </figure>
              </div>
              <div className="column mx-2" onClick={() => { clickHandler(4) }}>
              <figure className="image is-square">
                  <img src="https://picsum.photos/200" />
                </figure>
              </div>
            </div>
          </div>
        <div className='show-at-xs'>
<div onClick={() => { clickHandler(4) }} className='gallerybtn'>
ver más</div>
        </div>
        </div>
        {showModal()}
      </section>
    </>
  )
}

export default Portafolio
