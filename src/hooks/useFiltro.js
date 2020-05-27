import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`

const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  font-family: "Lato", sans-serif;
`

const useFiltro = () => {
  const [categoria, guardarCategoria] = useState("")

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiCategorias {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  const categorias = resultado.allStrapiCategorias.nodes
  const FiltroUI = () => {
    return (
      <Formulario>
        <Select
          value={categoria}
          onChange={e => guardarCategoria(e.target.value)}
        >
          <option value="">--Filtrar--</option>
          {categorias.map(opcion => {
            return (
              <option key={opcion.id} value={opcion.nombre}>
                {opcion.nombre}
              </option>
            )
          })}
        </Select>
      </Formulario>
    )
  }

  return {
    FiltroUI,
    categoria
  }
}

export default useFiltro
