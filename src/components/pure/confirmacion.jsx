import React, { useState, useEffect } from 'react'
import '../../styles/confirmacion.css'

const Confirmacion = (props) => {

  const [nameClassModal, setNameClassModal] = useState(`hidden`);

  useEffect(() => {
    setNameClassModal(props.nameClassModal);
  }, [props, nameClassModal])
  
  const cerrarModal = () => {
    setNameClassModal('hidden');
    props.abrirModal('hidden');
  }

  return (
    <div className={ `div-container-confirm ${nameClassModal}`}>
        <div className='div-confirm'>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <div className='div-btn-confirm'>
                <button className='rojo' onClick={cerrarModal}>Cancelar</button>
                <button className='azul' descripcion='Confirmar'>Confirmar</button>
            </div>
        </div>
    </div>
  )
}

export default Confirmacion