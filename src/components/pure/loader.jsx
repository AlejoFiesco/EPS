import React from 'react'
import '../../styles/loader.css'
import Logo from '../../imagenes/logo.PNG'

export const Loader = () => {
  return (
    <div className='div-content'>
      <div className='div-content-loader'>
        <figure className='div-content-logo'>
          <img src={ Logo } alt='Logo'/>
        </figure>
        <h2 className='div-content-cargando'>CARGANDO...</h2>
      </div>
    </div>
  )
}
