import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/user.css'
import paciente1 from '../../imagenes/paciente1.png'

export const User = ({ user }) => {
  return (
    <div className='user-div-container'>
        <figure className='user-div-container-foto'>
            <img src= {paciente1} alt='paciente' />
        </figure>
        <div className='user-div-container-datos'>
            <h2>Hola, {user.nombre}</h2>
            <b>Tipo de afiliación: </b><p>{user.tipoAfi}</p>
            <b>Correo Electronico: </b><p>{user.correo}</p>
            <b>Tipo de usuario: </b><p>{user.rol}</p>
        </div>
    </div>
  )
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;
