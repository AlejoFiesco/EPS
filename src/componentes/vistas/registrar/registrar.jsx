import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "../login/login.css";
import DatePicker from "react-datepicker";

export const Registrar = () => {
  const [mostrarForm, setMostrar] = useState(false);
  const [tempNacimiento, setNacimiento] = useState(new Date());

  const initialValues = {
    tipoUsuario: "seleccionar",
    nombre: "",
    identificacion: "",
    tipoAfilicion: "beneficiario",
    tipoID: "cedula",
    empresa: "seleccionar",
    otraEmpresa: "",
    especialidad: "seleccionar",
    fijo: "",
    celular: "",
    fecha: "",
    correo: "",
    fechaNacimiento: "",
    sexo: "masculino"
  };

  const usuarioValido = (e) => {
    setMostrar(e.target.value !== "seleccionar");
    setFieldValue("tipoUsuario", e.target.value);
  };

  const validationSchema = Yup.object().shape({
    celular: Yup.number().min(10).max(10),
  });

  const onSubmit = () => {};

  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    touched,
  } = formik;

  return (
    <div className="registrar">
      <h1>Registrar Usuario</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="contenedor">
          <select
            name="tipoUsuario"
            id="tipoUsuario"
            value={values.tipoUsuario}
            onChange={usuarioValido}
            onBlur={handleBlur}
          >
            <option value="seleccionar">Seleccione tipo de usuario</option>
            <option value="paciente">Paciente</option>
            <option value="administrador">Administrador</option>
            <option value="medico">Médico</option>
          </select>
          {mostrarForm && (
            <>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {values.tipoUsuario === "medico" && (
                <select
                  name="especialidad"
                  id="especialidad"
                  value={values.especialidad}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="beneficiario">Seleccionar Especialidad</option>
                  <option value="cotizante">Médico general</option>
                  <option value="cotizante">Cirujano</option>
                </select>
              )}
              {values.tipoUsuario === "paciente" && (
                <>
                  <select
                    name="tipoAfiliacion"
                    id="tipoAfiliacion"
                    value={values.tipoAfiliacion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="beneficiario">Beneficiario</option>
                    <option value="cotizante">Cotizante</option>
                  </select>
                  <div className="divisor">
                    <select
                      name="empresa"
                      id="empresa"
                      value={values.empresa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="seleccionar">Seleccionar empresa</option>
                      <option value="otra">Otra</option>
                    </select>
                    {values.empresa === "otra" && (
                      <input
                        type="text"
                        name="otraEmpresa"
                        id="otraEmpresa"
                        placeholder="¿Otra?"
                      />
                    )}
                  </div>
                </>
              )}
              <div className="divisor">
                <input
                  type="number"
                  name="identificacion"
                  id="identificacion"
                  placeholder="Identificacion"
                  value={values.identificacion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <select
                  name="tipoID"
                  id="tipoID"
                  value={values.tipoID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="cc">Cédula</option>
                  <option value="ti">Tarjeta de identidad</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="pa">Pasaporte</option>
                </select>
              </div>
              <input
                type="text"
                name="contasena"
                id="contasena"
                placeholder="Contraseña"
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="number"
                name="fijo"
                id="fijo"
                placeholder="Teléfono fijo"
                value={values.fijo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="number"
                name="celular"
                id="celular"
                placeholder="Teléfono celular"
                value={values.celular}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="Correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="divisor">
                <input 
                  type="date" 
                  name="fechaNacimiento" 
                  id="fechaNacimiento" 
                  selected={tempNacimiento}
                  onChange={(date) => {
                    setNacimiento(date);
                    setFieldValue("fechaNacimiento", date);
                  }}
                  />
                <select
                  name="sexo"
                  id="sexo"
                  value={values.sexo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="cc">Masculino</option>
                  <option value="ti">Femenino</option>
                  <option value="ce">Otro</option>
                </select>
              </div>
              <button className="enviar" type="submit">Registrar</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
