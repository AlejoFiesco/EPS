import './App.css';
import { Loader } from './components/pure/loader';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import {SesionAfiliado} from '../src/pages/home/sesion-afiliado.jsx'
import {SesionAdmin} from '../src/pages/home/sesion-admin.jsx'
import {SesionMedico} from '../src/pages/home/sesion-medico.jsx'
import { NFP }  from '../src/pages/404/NFP.jsx'
import { AsignacionCitas } from './pages/home/asignacion-citas';
import CitasAfiliado from './pages/home/citas-afiliado';
import CitasDisponibles from './pages/home/citas-disponibles';
import EsperaCitas from './pages/home/espera-citas';
import CrearAgenda from './pages/home/crear-agenda';
import CitasMedicoAsignadas from './pages/home/citas-medico-asignadas';
import CitasDisponiblesMedico from './pages/home/citas-disponibles-medico';
import { Login } from './components/login/login'
import { Registrar } from './components/registrar/registrar'
function App() {
  return (
    <div className='app-div'>
      <Router>
        {/* se define el conjunto de rutas */}
        <Routes>
          {/* se esperan las rutas */}
          <Route exact path = '/' element={<Login />} />
          <Route path = '/registrar' element={<Registrar />} />
          <Route path='/loader' element={ <Loader /> }/>
          <Route path='/afiliado' element={ <SesionAfiliado /> }/>
          <Route path='/admin' element={ <SesionAdmin /> }/>
          <Route path='/medico' element={ <SesionMedico /> }/>
          <Route path='/asignacionCitas' element={ <AsignacionCitas tituloModulo='Asignación Citas' /> }/>
          <Route path='/citasAfiliado' element={ <CitasAfiliado tituloModulo='Citas programadas'/> }/>
          <Route path='/citasDisponibles' element={ <CitasDisponibles tituloModulo='Citas disponibles'/> }/>
          <Route path='/esperaCitas' element={ <EsperaCitas tituloModulo='Espera de citas'/> }/>
          <Route path='/crearAgenda' element={ <CrearAgenda tituloModulo='Crear Agenda'/> }/>
          <Route path='/citasAsignadasMedico' element={ <CitasMedicoAsignadas tituloModulo='Lista de citas asignadas'/> }/>
          <Route path='/citasDMedico' element={ <CitasDisponiblesMedico tituloModulo='Agenda activa médico'/> }/>
          <Route path='*' element={<NFP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
