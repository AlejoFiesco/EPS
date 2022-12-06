import React, { useState } from "react";
import Confirmacion from "./confirmacion";

const CitaAfiliado = ({...props}) => {

    const [nameClassModal, setNameClassModal] = useState('hidden');
    const [nameClassModalModificar, setNameClassModalModificar] = useState('hidden');

    const abrirModal = (...params) => {
        setNameClassModal(params[0] || '');
    }
    const abrirModalModificar= (...params) => {
        setNameClassModalModificar(params[0] || '');
    }
    
    return(
        <div className="div-conainer-citas cita">
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
            <span>6</span>
            <button className='rojo' onClick = {abrirModal}>Cancelar</button>
            <button className='azul' onClick = {abrirModalModificar}>Modificar</button>
            <Confirmacion titulo='Confirmar cancelación de cita' descripcion='¿Esta seguro de que desea cancelar esta cita?' nameClassModal={nameClassModal} abrirModal={abrirModal} />
            <Confirmacion titulo='Confirmar modificación de cita' descripcion='¿Esta seguro de que desea modificar esta cita?' nameClassModal={nameClassModalModificar} abrirModal={abrirModalModificar} />
        </div>
    );
}

export default CitaAfiliado;