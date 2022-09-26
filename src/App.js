import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resultArray, setResultArray] = useState([]);
  useEffect(() => {
    axios.post("https://eps-factores.000webhostapp.com/").then((response) => {
      setResultArray(response.data);
    });
  }, []);

  return (
    <div className="App">
      {resultArray.map((result) => {
        result = JSON.parse(result);
        return (
          <>
            <span>
              Nombre: {result.nombre} {result.apellido}
            </span>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default App;
