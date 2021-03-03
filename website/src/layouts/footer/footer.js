import React from "react"
import { FiGlobe } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
import { FiSmartphone } from "react-icons/fi"
import { FiMail } from "react-icons/fi"

import "./footer.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear().toString()
  return (
    <>
      <footer>
        <div style={{ backgroundColor: "#171717" }} className="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Template built by Gama Development</strong> 
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
