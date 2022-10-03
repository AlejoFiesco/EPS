import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="principal">
      <div className="secundario">
        <div className="titulo">
          <h1>Boost Health</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            accusamus quod, a dolore exercitationem consectetur sequi
            perferendis commodi ex deleniti?
          </span>
        </div>
        <form className="formulario">
          <div className="contenedor">
            <input
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Usuario"
            />
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              placeholder="Contraseña"
            />
            <button className="enviar" type="submit">Iniciar Sesion</button>
          </div>
          <Link className="link" to="/recuperarContrasena">
            Recuperar contraseña
          </Link>
        </form>
      </div>
    </div>
  );
};
