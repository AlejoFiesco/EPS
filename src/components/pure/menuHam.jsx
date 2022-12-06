import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'


const MenuHam = () => {
  const [classNameModalHam, setClassNameModalHam] = useState('');

  const handleClickHam = (e) => {
    console.log(e.target);
    setClassNameModalHam('visibleHam')
  }
  
  

  return (
    <div>
        <GiHamburgerMenu className="div-controles-ham" onClick={handleClickHam}/>
        <div className={`modalControles ${classNameModalHam}`}>
            <div>Configuración de cuenta</div>
            <div>Cerrar Sesión</div>
            <div onClick={()=>setClassNameModalHam('')} >X</div>
        </div>
    </div>
  )
}

export default MenuHam