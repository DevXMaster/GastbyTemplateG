import React from "react"
import "./modal.scss"
import { motion } from "framer-motion"
import PhotoCarousell from "./photoCarousel"

const Modal = ({ selectedImg, exitClickHandler }) => {
  const image = selectedImg
  const clickBackdrop = e => {
    if (e.target.classList.contains("backdrop")) {
      exitClickHandler()
    }
  }
  return (
    <>
      <motion.div
        className="backdrop"
        onClick={clickBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="backdrop-conainer">
          {/* <div className="backdrop-exit" > X </div> */}
            <PhotoCarousell />
        </div>
      </motion.div>
    </>
  )
}

export default Modal
