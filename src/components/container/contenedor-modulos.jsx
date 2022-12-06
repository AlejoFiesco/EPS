import React from 'react'
import '../../styles/contenedor-modulos.css'
export const ContModulos = ({ ...props }) => {
  return (
    <div className='ContModulos-div-container'>
    {console.log(props.moduloUno)}
      {props.moduloUno}
      {props.moduloDos}
      {props.moduloTres}
      {props.filtroCitas}
      {props.citas}
    </div>
  )
}
