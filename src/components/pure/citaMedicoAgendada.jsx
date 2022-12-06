import React, { useState } from 'react'
import Confirmacion from './confirmacion'
import '../../styles/citas.css'


const CitaMedicoAgendada = () => {

  const [nameClassModalIcita, setNameClassModalIcita] = useState('hidden');
  const [nameClassModalPNoNita, setNameClassModalPNoNita] = useState('hidden');

  const abrirModalICita = (...prarams) => {
    setNameClassModalIcita(prarams[0] || '');
  }  

  const abrirModalNoPaciente = (...prarams) => {
    setNameClassModalPNoNita( prarams[0] || '')
  }



  return (
    <div className="div-conainer-citas cita">
            <p>ESPECIALIDAD</p>
            <span>1</span>
            <p>PACIENTE</p>
            <span>2</span>
            <p>FECHA</p>
            <span>3</span>
            <p>SEDE</p>
            <span>4</span>
            <p>MODALIDAD</p>
            <span>5</span>
            <p>TIPO DE CITA</p>
            <span>6</span>
            <button className='rojo' onClick = {abrirModalNoPaciente}>No llego</button>
            <button className='azul' onClick = {abrirModalICita}>Iniciar cita</button>
            <Confirmacion titulo='Confirmar falta de paciente' descripcion='¿Esta seguro de que el paciente no ha llegado a la cita?' nameClassModal={nameClassModalPNoNita} abrirModal={abrirModalNoPaciente} />
            <Confirmacion titulo='Confirmar inicio de cita' descripcion='¿Esta seguro de que desea iniciar esta cita?' nameClassModal={nameClassModalIcita} abrirModal={abrirModalICita} />
        </div>
  )
}

export default CitaMedicoAgendada