import React from 'react'
import logo from '../../imagenes/logo.PNG'
import '../../styles/module.css'
import { NavLink } from "react-router-dom";

export const Module = ({titulo, descripcion, link}) => {

  return (
    <NavLink to={link} >
      <div className='module-div-container'>
          <figure>
              <img src= { logo } alt='modulo' />
          </figure>
          <div className='module-div-container-titulo'>
              <h2 className='module-h2-titulo'>{titulo}</h2>
              <p className='module-p-descripcion'>{descripcion}</p>
          </div>
      </div>
    </NavLink>
  )
}
