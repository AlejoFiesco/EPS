import React, { useState } from 'react'
import Confirmacion from './confirmacion'

const CitaDisponibleMedico = () => {

  const [nameClassModalCancelarC, setNameClassModalCancelarC] = useState('hidden');
  const [nameClassModalModificarC, setNameClassModalModificarC] = useState('hidden');

  const abrirModalCancelar = (...params) => {
    setNameClassModalCancelarC(params[0] || '');
  }
  const abrirModalModificar = (...params) => {
    setNameClassModalModificarC(params[0] || '');
  }

  return (
    <div className="div-conainer-citas cita">
        <p>ESPECIALIDAD</p>
        <span>1sdfaaaaaaaaaaaaaaaaaaaaaaaa</span>
        <p>FECHA</p>
        <span>2</span>
        <p>SEDE</p>
        <span>3</span>
        <p>MODALIDAD</p>
        <span>4</span>
        <p>TIPO DE CITA</p>
        <span>5</span>
        <button type='submit' className='rojo' onClick={abrirModalCancelar}>Cancelar</button>
        <button type='submit' className='azul' onClick={abrirModalModificar}>Modificar</button>
        <Confirmacion titulo='Cancelar cita' descripcion='¿Esta seguro de que desea cancelar esta cita?' nameClassModal={nameClassModalCancelarC} abrirModal={abrirModalCancelar} />
        <Confirmacion titulo='Modificar cita' descripcion='¿Esta seguro de que desea modificar esta cita?' nameClassModal={nameClassModalModificarC} abrirModal={abrirModalModificar} />
    </div>
  )
}

export default CitaDisponibleMedico