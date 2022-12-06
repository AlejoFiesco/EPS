import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from "yup";
import Confirmacion from '../confirmacion';

const FiltroCrearAgenda = () => {

    const initialValues = {
        especialidad: '',
        modalidad: '',
        fecha:'',
        hora: '',
    }
    
    const filtroAgendaEsquema = Yup.object().shape({
        especialidad: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type")
        .required("Debe seleccionar una especialidad"),
        modalidad: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type"
        )
        .required('Debe seleccionar una modalidad'),
        fecha: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type")
        .required("Debe seleccionar una fecha"),
        hora: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type")
        .required("Debe seleccionar una hora"),
    });

    const [nameClassModalAgenda, setNameClassModalAgenda] = useState('hidden')

    const abrirModalAgenda = (...params) => {
        setNameClassModalAgenda(params[0] || '');
    }

  return (
    <>
      <Formik
        initialValues={ initialValues }
        validationSchema={ filtroAgendaEsquema }
        onSubmit={async (values, { setSubmitting }) => {
            console.log(values)
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
      {({ values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur }) => (
        <Form className='form-filtro-asignacionCitas'>          
          
          <label htmlFor="especialidad">Especialidad:</label>
          <div>
            <Field component="select" id="especialidad" name="especialidad" className='select'>
              <option value="">Seleccione una especialidad</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
            {/* levelTask errors */}
            {
                errors.especialidad && touched.especialidad &&
                (
                    <ErrorMessage component='div' name='especialidad' className='errorM' />
                )
            }
          </div>
          <label htmlFor="modalidad">Modalidad:</label>
          <div>
            <Field component="select" id="modalidad" name="modalidad" className='select'>
              <option value="">Seleccione una modalidad</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
            {/* levelTask errors */}
            {
                errors.modalidad && touched.modalidad &&
                (
                    <ErrorMessage component='div' name='modalidad' className='errorM' />
                )
            }
          </div>
          <label htmlFor="fecha">Fecha:</label>
          <div>
          <Field type='date' id="fecha" name="fecha" className='select' />
          {/* levelTask errors */}
          {
              errors.fecha && touched.fecha &&
              (
                  <ErrorMessage component='div' name='fecha' className='errorM' />
              )
          }
          </div>
          <label htmlFor="hora">Hora:</label>
          <div>
          <Field component="select" id="hora" name="hora" className='select'>
            <option value="">Seleccione una hora</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </Field>
          {/* levelTask errors */}
          {
              errors.hora && touched.hora &&
              (
                  <ErrorMessage component='div' name='hora' className='errorM' />
              )
          }
          </div>
          <button type='submit' className='azul' onClick={abrirModalAgenda}>Crear Cita</button>
          <button className='azul'>Generar ultima agenda</button>
        </Form>
        )}
      </Formik>
      <Confirmacion titulo='Confirmar creación de agenda' descripcion='¿Esta seguro de que desea crear esta cita?' nameClassModal={nameClassModalAgenda} abrirModal={abrirModalAgenda} />  
    </>
  )
}

export default FiltroCrearAgenda