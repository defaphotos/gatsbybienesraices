import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import usePropiedades from "../hooks/usePropiedades"
import PropiedadPreview from "./propiedadPreview"
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {
  const listado = usePropiedades()

  const [propiedades] = useState(listado);
  const [filtradas, guardarFiltradas] = useState([]);


  const {categoria,FiltroUI} = useFiltro();

  useEffect(() => {
    if(categoria){
      const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria);
      guardarFiltradas(filtro)

    }else{
      guardarFiltradas(propiedades);
    }
  }, [categoria,propiedades])


  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propiedades
      </h2>
      {FiltroUI()}
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => {
          return <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        })}
      </ul>
    </>
  )
}

export default ListadoPropiedades
