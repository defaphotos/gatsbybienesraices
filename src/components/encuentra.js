import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import heroCSS from "../css/hero.module.css"

const ImageBackground = styled(BackgroundImage)`
  height: 300px;
`

const Encuentra = () => {
  const encuentra = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "encuentra.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      tag="section"
      fluid={encuentra.file.childImageSharp.fluid}
      fadeIn="soft"
    >
      <div className={heroCSS.imagebg}>
        <h3 className={heroCSS.titulo}>Encuentra la casa de tus sueños</h3>
        <p>15 años de experiencia</p>
      </div>
    </ImageBackground>
  )
}

export default Encuentra
