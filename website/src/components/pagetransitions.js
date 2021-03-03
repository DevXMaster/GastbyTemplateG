import React from "react"

import PageTransition from "gatsby-plugin-page-transitions"

const PageAnimation = props => {
  return (
    <>
      <PageTransition
        defaultStyle={{
          transition: "opacity 300ms ease-out,  top 250ms ease-out",
          top: "-2%",
          opacity: "0%",
          position: "absolute",
          width: "100%",
        }}
        transitionStyles={{
          entering: { top: "-2%", opacity: "0%" },
          entered: { top: "0%", opacity: "100%" },
          exiting: { top: "5%", opacity: "0%" },
        }}
        transitionTime={400}
      >
        {props.children}
      </PageTransition>
    </>
  )
}

export default PageAnimation;
