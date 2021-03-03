import React, { Component } from "react"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import SingleTestimonial from "./singleTestimonial"
import "./testimonials.scss"
import {RiSingleQuotesR} from 'react-icons/ri'
import { MDcode } from "react-icons/md";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]
    }
    return (
      <div style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>
        <Slider {...settings}>
          <div>
            <SingleTestimonial
              client={{
                name: "lorem",
                img: `https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png`,
                desc: "Ut nulla deserunt nisi tempor nulla do cillum deserunt duis. Quis ut consectetur eiusmod minim veniam laborum in sit deserunt laborum. Sint reprehenderit aliquip reprehenderit dolore ad ipsum non est anim elit duis quis. Consectetur elit Lorem esse elit commodo non mollit nisi est. Aute incididunt ullamco irure deserunt dolore.",
              }}
            />
          </div>
          <div>
            <SingleTestimonial
              client={{
                name: "lorem",
                img: `https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png`,
                desc: "Ut nulla deserunt nisi tempor nulla do cillum deserunt duis. Quis ut consectetur eiusmod minim veniam laborum in sit deserunt laborum. Sint reprehenderit aliquip reprehenderit dolore ad ipsum non est anim elit duis quis. Consectetur elit Lorem esse elit commodo non mollit nisi est. Aute incididunt ullamco irure deserunt dolore.",
              }}
            />
          </div>
          <div>
            <SingleTestimonial
              client={{
                name: "lorem",
                img: `https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png`,
                desc: "Ut nulla deserunt nisi tempor nulla do cillum deserunt duis. Quis ut consectetur eiusmod minim veniam laborum in sit deserunt laborum. Sint reprehenderit aliquip reprehenderit dolore ad ipsum non est anim elit duis quis. Consectetur elit Lorem esse elit commodo non mollit nisi est. Aute incididunt ullamco irure deserunt dolore.",
              }}
            />
          </div>
          <div>
            <SingleTestimonial
              client={{
                name: "lorem",
                img: `https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png`,
                desc: "Ut nulla deserunt nisi tempor nulla do cillum deserunt duis. Quis ut consectetur eiusmod minim veniam laborum in sit deserunt laborum. Sint reprehenderit aliquip reprehenderit dolore ad ipsum non est anim elit duis quis. Consectetur elit Lorem esse elit commodo non mollit nisi est. Aute incididunt ullamco irure deserunt dolore.",
              }}
            />
          </div>
        </Slider>
      </div>
    )
  }
}
