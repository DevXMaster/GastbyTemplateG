import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import Portafolio from "../components/portafolio/portafolio"
import Testimonials from "../components/testimonials/testimonials"
import AboutMe from "../components/aboutme/aboutme"
import Form from "../components/form/form"
import {useState} from 'react'
const IndexPage = () => {


  const [CurrentNavItemHero, setCurrentNavItemHero] = useState(false)
  const [CurrentNavItemServices, setCurrentNavItemServices] = useState(false)
  const [CurrentNavItemPortafolio, setCurrentNavItemPortafolio] = useState(false)
  const [CurrentNavItemTestimonials, setCurrentNavItemTestimonials] = useState(false)
  const [CurrentNavItemAboutMe, setCurrentNavItemAboutMe] = useState(false)
  const [CurrentNavItemForm, setCurrentNavItemForm] = useState(false)

  return(
    <Layout 
    CurrentNavItemHero={CurrentNavItemHero}
    CurrentNavItemServices={CurrentNavItemServices}
    CurrentNavItemPortafolio={CurrentNavItemPortafolio}
    CurrentNavItemTestimonials={CurrentNavItemTestimonials}
    CurrentNavItemAboutMe={CurrentNavItemAboutMe}
    CurrentNavItemForm={CurrentNavItemForm}
    >

    <SEO title="Inicio" />
    <Hero setCurrentNavItemHero={setCurrentNavItemHero}/>
    <Services setCurrentNavItemServices={setCurrentNavItemServices}/>
    <Portafolio setCurrentNavItemPortafolio={setCurrentNavItemPortafolio}/>
    <Testimonials setCurrentNavItem={setCurrentNavItemTestimonials} />
    <AboutMe setCurrentNavItem={setCurrentNavItemAboutMe} />
    <Form setCurrentNavItem={setCurrentNavItemForm}/>
  </Layout>
)
}

export default IndexPage
