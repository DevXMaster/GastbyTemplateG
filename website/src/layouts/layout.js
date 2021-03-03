/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "../static/styles/minibulma.css"
import "../../node_modules/bulma/css/bulma.min.css"
import "@fontsource/lora"
import "@fontsource/roboto"
import Header from "./navbar/navbar"
import Footer from "./footer/footer"
import "./layout.scss"
import PageTransition from "../components/pagetransitions"

const Layout = ({
  children,
  CurrentNavItemPortafolio,
  CurrentNavItemHero,
  CurrentNavItemServices,
  CurrentNavItemTestimonials,
  CurrentNavItemAboutMe,
  CurrentNavItemForm,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageTransition>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          CurrentNavItemHero={CurrentNavItemHero}
          CurrentNavItemServices={CurrentNavItemServices}
          CurrentNavItemPortafolio={CurrentNavItemPortafolio}
          CurrentNavItemTestimonials={CurrentNavItemTestimonials}
          CurrentNavItemAboutMe={CurrentNavItemAboutMe}
          CurrentNavItemForm={CurrentNavItemForm}
        />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
