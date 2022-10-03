import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { Login } from './componentes/vistas/login/login';
import { Registrar } from './componentes/vistas/registrar/registrar';

function App() {
  /*
  const [resultArray, setResultArray] = useState([]);
  const body = {
    tabla: "eps"
  };
  */
  /*
  useEffect(() => {
    const params = {
      accion: 'buscar',
      query: 'SELECT * FROM tabla'
    };
    const stringParams = `?accion=${params.accion}&query=${params.query}`;
    //axios.post("https://eps-factores.herokuapp.com/buscar", body).then((response) => {
    axios.get("https://eps-factores.000webhostapp.com/" + stringParams).then((response) => {
      setResultArray(JSON.parse(response.data));
    });
  }, []);
  
  */
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes> 
    </div>
  );
}

export default App;
