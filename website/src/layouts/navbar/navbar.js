import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./navbar.scss"
import { MdMenu } from "react-icons/md"

const Header = ({
  siteTitle,
  CurrentNavItem,
  CurrentNavItemPortafolio,
  CurrentNavItemHero,
  CurrentNavItemServices,
  CurrentNavItemTestimonials,
  CurrentNavItemAboutMe,
  CurrentNavItemForm,
}) => {
  //States
  const [navbar, setnavbar] = useState(false)
  const [menu, setMenu] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  const toggleMenu = () => {
    setMenu(!menu)
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <>
      <header className={navbar ? "navbar-w active" : "navbar-w"}>
        <div className="pad-xs">
          <div className="container">
            <nav>
              {/* Here goes the links */}
              <div>
                <div className="show-at-xs" onClick={toggleMenu}>
                  <MdMenu
                    style={{ fontSize: "25px" }}
                    className="toglemenubtn"
                  />
                </div>
                <div className="nav-items">
                  <div
                    className={
                      CurrentNavItemHero == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#home">Home</AnchorLink>

                    <div className="nav-line-decoration"></div>
                  </div>
                  <div
                    className={
                      CurrentNavItemServices == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#services">Services</AnchorLink>
                    <div className="nav-line-decoration"></div>
                  </div>
                  <div
                    className={
                      CurrentNavItemPortafolio == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#portfolio">
                      Portfolio
                    </AnchorLink>
                    <div className="nav-line-decoration"></div>
                  </div>
                  <div
                    className={
                      CurrentNavItemTestimonials == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#testimonials">
                      Testimonials
                    </AnchorLink>
                    <div className="nav-line-decoration"></div>
                  </div>
                  <div
                    className={
                      CurrentNavItemAboutMe == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#about">About</AnchorLink>
                    <div className="nav-line-decoration"></div>
                  </div>
                  <div
                    className={
                      CurrentNavItemForm == true
                        ? "nav-item current"
                        : "nav-item"
                    }
                  >
                    <AnchorLink to="/#contact">Contact</AnchorLink>
                    <div className="nav-line-decoration"></div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className={`MovileMenu ${menu ? "active" : ""}`}>
        <div className="linkItems">
          <ul>
            <li>
              <AnchorLink to="/#Home" onAnchorLinkClick={toggleMenu}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#services"
                onAnchorLinkClick={toggleMenu}
              >
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#portfolio"
                onAnchorLinkClick={toggleMenu}
              >
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#testimonials"
                onAnchorLinkClick={toggleMenu}
              >
                Testimonials
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#about" onAnchorLinkClick={toggleMenu}>
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contact" onAnchorLinkClick={toggleMenu}>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
