import React, { useState } from "react"
import { ImCircleRight } from "react-icons/im";
import { ImCircleLeft } from "react-icons/im";


const PhotoCarousell = () => {
  let CarouselData = [
    {
      image:
        "https://picsum.photos/300",
    },
    {
      image:
        "https://picsum.photos/300",
    },
    {
      image:
        "https://picsum.photos/300",
    },
  ]
  const [current, setCurrent] = useState(0)
  const length = CarouselData.length
  const next = () => {
    if (current == length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }
  const prev = () => {
    if (current == 0) {
      setCurrent(length - 1)
    } else {
      setCurrent(current -1)
    }
  }
  return (
    <>
      <div className="Carousel">
      <div className="topDrop"></div>
        <div className="Carousel-controllers">
          <div className="columns is-mobile">
            <div className="column">
            <div className="btn" onClick={prev} style={{marginRight:'auto',width: 'fit-content'}}>
                <ImCircleLeft />
              </div>
            </div>
            <div className="column">
              <div className="btn" onClick={next} style={{marginLeft:'auto',width: 'fit-content'}}>
                <ImCircleRight />
              </div>
            </div>
          </div>
        </div>
        {CarouselData.map((slide, index) => {
          return (
            <>
              {index == current && <img src={slide.image} key={index} alt="" />}
            </>
          )
        })}
      </div>
    </>
  )
}

export default PhotoCarousell
