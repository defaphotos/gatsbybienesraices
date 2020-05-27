import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display:flex;
    justify-content:space-between;
    flex:1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li{
        display:flex;
        img{
            margin-right: 1rem;
        }
    }
`

const Iconos = ({ estacionamiento, wc, habitaciones }) => {
  const iconos = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  const imagenes = iconos.allFile.edges
  return (
    <ListadoIconos>
      <li>
        <img alt="icono wc" src={imagenes[2].node.publicURL} />
        <p>{wc}</p>
      </li>
      <li>
        <img alt="icono estacionamiento" src={imagenes[1].node.publicURL} />
        <p>{estacionamiento}</p>
      </li>
      <li>
        <img alt="icono habitaciones" src={imagenes[0].node.publicURL} />
        <p>{habitaciones}</p>
      </li>
    </ListadoIconos>
  )
}

export default Iconos
