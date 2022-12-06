import React from 'react'
import { ContModulos } from '../../components/container/contenedor-modulos'
import ListaCitas from '../../components/container/lista-citas'
import { Footer } from '../../components/pure/footer'
import { Header } from '../../components/pure/header'
import User from '../../components/pure/user'
import USER from '../../models/user.enum'
import MenuHam from '../../components/pure/menuHam'

const CitasAfiliado = (props) => {

  return (
    <div>
        <Header />
        <User user = { USER }/>
        <hr></hr>
        <h2 style={{width:'95vw', display:'block', margin:'auto', textAlign:'center' }}>{props.tituloModulo}</h2>
        <ContModulos citas={ <ListaCitas /> }/>
        <Footer />
        <MenuHam/>
    </div>
  )
}

export default CitasAfiliado