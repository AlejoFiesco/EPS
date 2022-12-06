import React, { useState } from 'react'
import Confirmacion from './confirmacion';

const CitaDisponible = (props) => {

  const [nameClassModalTCita, setNameClassModalTCita] = useState('hidden');

  const abrirModalTomarCita = (...params) => {
    setNameClassModalTCita(params[0] || '');
  }

  return(<div className="div-conainer-citas cita">
    <p>ESPECIALIDAD</p>
    <span>1</span>
    <p>MÉDICO</p>
    <span>2</span>
    <p>FECHA</p>
    <span>3</span>
    <p>SEDE</p>
    <span>4</span>
    <p>MODALIDAD</p>
    <span>5</span>
    <p>TIPO DE CITA</p>
    <span>fds</span>
    <button type='submit' className='azul' onClick={abrirModalTomarCita}>Tomar Cita</button>
    <Confirmacion titulo='Tomar cita' descripcion='¿Esta seguro de que desea tomar esta cita?' nameClassModal={nameClassModalTCita} abrirModal={abrirModalTomarCita} />
  </div>)
}

export default CitaDisponible