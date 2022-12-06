import React from 'react'
import { ContModulos } from '../../components/container/contenedor-modulos';
import { Footer } from '../../components/pure/footer';
import { Header } from '../../components/pure/header';
import { User } from '../../components/pure/user';
import USER from '../../models/user.enum.js'
import ModuleC from '../../models/module.class';
import { Module } from '../../components/pure/module';
import MenuHam from '../../components/pure/menuHam'

export const SesionAdmin = () => {
  const rUsuario = new ModuleC("REGISTRAR USUARIO", "Registre un nuevo usuario");
  const rEmpresa = new ModuleC("REGISTRAR EMPRESA", "Registre una nueva empresa");
  return (
    <div>
        <Header />
        <User user = { USER }/>
        <hr></hr>
        <ContModulos 
          moduloUno={ <Module titulo={ rUsuario.titulo } descripcion={ rUsuario.descripcion } link='/registroUsuario'/> } 
          moduloDos={ <Module titulo={ rEmpresa.titulo } descripcion={ rEmpresa.descripcion } link='/registroEmpresa'/> }/>        
        <Footer />
        <MenuHam/>
    </div>
  )
}
