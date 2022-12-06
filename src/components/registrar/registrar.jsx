import { useFormik } from "formik";
import { useState } from "react";
import "../login/login.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";

export const Registrar = () => {
  const [mostrarForm, setMostrar] = useState(false);

  const initialValues = {
    tipoUsuario: "seleccionar",
    nombre: "",
    identificacion: "",
    tipoAfiliacion: "beneficiario",
    tipoID: "cedula",
    empresa: "seleccionar",
    otraEmpresa: "",
    especialidad: "seleccionar",
    fijo: "",
    celular: "",
    fecha: new Date(),
    correo: "",
    fechaNacimiento: "",
    sexo: "masculino",
    codigo: "",
    contrasena: "",
  };

  const usuarioValido = (e) => {
    setMostrar(e.target.value !== "seleccionar");
    formik.setFieldValue("tipoUsuario", e.target.value);
  };

  const validate = (values) => {
    let errors = {};

    if (formik.values.tipoUsuario === "paciente") {
      //Se necesitan nombre, tipoAfiliacion, empresa que lo afilió, identificacion, tipoIdentificacion,
      //Contraseña, teléfono fijo, teléfono celular, correo, Fecha de nacimiento y sexo

      if (!values.nombre) {
        errors.nombre = "Se debe ingresar un nombre";
      }

      if (
        values.empresa === "seleccionar" ||
        (values.empresa === "otra" && !values.otraEmpresa)
      ) {
        errors.empresa = "Se debe seleccionar una empresa válida";
      }

      if (!values.identificacion) {
        errors.identificacion = "Ingrese un número de identificacion";
      }

      if (values.contrasena?.length < 6 || !values.contrasena?.length > 16) {
        errors.contrasena = "La contraseña debe tener entre 6 y 16 caracteres";
      }

      if (values.fijo?.toString().length !== 10) {
        errors.fijo = "El número fijo debe tener 10 cifras";
      }

      if (values.celular?.toString().length !== 10) {
        errors.celular = "El número celular debe tener 10 cifras";
      }

      if (!values.correo) {
        errors.correo = "Debe ingresar un correo";
      }
    }
    return errors;
  };

  const onSubmit = () => {
    console.log(formik.values.fecha);
  };

  const formik = useFormik({ initialValues, onSubmit, validate });

  return (
    <div className="registrar">
      <h1>Registrar Usuario</h1>
      <form className="formulario" onSubmit={formik.handleSubmit}>
        <div className="contenedor">
          <select
            name="tipoUsuario"
            id="tipoUsuario"
            value={formik.values.tipoUsuario}
            onChange={usuarioValido}
            onBlur={formik.handleBlur}
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
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.values.tipoUsuario === "medico" && (
                <>
                  <select
                    name="especialidad"
                    id="especialidad"
                    value={formik.values.especialidad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="beneficiario">
                      Seleccionar Especialidad
                    </option>
                    <option value="cotizante">Médico general</option>
                    <option value="cotizante">Cirujano</option>
                  </select>
                  <input
                    type="text"
                    name="codigo"
                    id="codigo"
                    placeholder="Código médico"
                    value={formik.values.codigo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </>
              )}
              {formik.values.tipoUsuario === "paciente" && (
                <>
                  <select
                    name="tipoAfiliacion"
                    id="tipoAfiliacion"
                    value={formik.values.tipoAfiliacion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="beneficiario">Beneficiario</option>
                    <option value="cotizante">Cotizante</option>
                  </select>
                  <div className="divisor">
                    <select
                      name="empresa"
                      id="empresa"
                      value={formik.values.empresa}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="seleccionar">Seleccionar empresa</option>
                      <option value="otra">Otra</option>
                    </select>
                    {formik.values.empresa === "otra" && (
                      <input
                        type="text"
                        name="otraEmpresa"
                        id="otraEmpresa"
                        placeholder="¿Otra?"
                        value={formik.values.otraEmpresa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                  value={formik.values.identificacion}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <select
                  name="tipoID"
                  id="tipoID"
                  value={formik.values.tipoID}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="cc">Cédula</option>
                  <option value="ti">Tarjeta de identidad</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="pa">Pasaporte</option>
                </select>
              </div>
              <input
                type="password"
                name="contrasena"
                id="contrasena"
                placeholder="Contraseña"
                value={formik.values.contrasena}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="number"
                name="fijo"
                id="fijo"
                placeholder="Teléfono fijo"
                value={formik.values.fijo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="number"
                name="celular"
                id="celular"
                placeholder="Teléfono celular"
                value={formik.values.celular}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="Correo"
                value={formik.values.correo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                <>
                  <DatePicker
                    selected={formik.values.fecha}
                    dateFormat="dd/MM/yyyy"
                    className="select-fecha"
                    id="fecha"
                    name="fecha"
                    showMonthDropdown
                    showYearDropdown
                    onChange={(date) => formik.setFieldValue("fecha", date)}
                  />
                </>
                <select
                  name="sexo"
                  id="sexo"
                  value={formik.values.sexo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="cc">Masculino</option>
                  <option value="ti">Femenino</option>
                  <option value="ce">Otro</option>
                </select>
              <button className="enviar" type="submit">
                Registrar
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
