import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { ImQuotesRight } from "react-icons/im"


const SingleTestimonial = ({ client }) => {
  return (
    <div className="cardsContainer p-2">
      <div>
        <figure className="image is-64x64">
          <img className="is-rounded" src={client.img} />
        </figure>
      </div>
      <div className="block is-block-xs px-1">
        <p style={{textAlign:'center'}}>{client.desc}</p>
      </div>
      <div className="block is-block-xs quote">
        <p>
        <ImQuotesRight />
        </p>
      </div>
      <div className="block">
        <p style={{textAlign:'center'}}>{client.name}</p>
      </div>
    </div>
  )
}

export default SingleTestimonial
