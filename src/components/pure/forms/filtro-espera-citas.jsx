import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from "yup";

const FiltroEsperaCitas = () => {

    const initialValues = {
        especialidad: '',
        desde: '',
        hasta: ''
    }
    
    const filtroCitasEsquema = Yup.object().shape({
        especialidad: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type")
        .required("Debe seleccionar una especialidad"),
        desde: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type"
        )
        .required('Debe seleccionar una fecha de inicio'),
        hasta: Yup.string()
        .oneOf(
            ["designer", "development", "product", "other"],
            "Invalid Job Type")
        .required("Debe seleccionar una fecha de finalizacion"),
    });

  return (
    <>
      <Formik
        initialValues={ initialValues }
        validationSchema={ filtroCitasEsquema }
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
          <label htmlFor="desde">Desde:</label>
          <div>
          <Field type='date' id="desde" name="desde" className='select' />
          {/* levelTask errors */}
          {
              errors.desde && touched.desde &&
              (
                  <ErrorMessage component='div' name='desde' className='errorM' />
              )
          }
          </div>
          <label htmlFor="hasta">Hasta:</label>
          <div>
          <Field type='date' id="hasta" name="hasta" className='select' />
          {/* levelTask errors */}
          {
              errors.hasta && touched.hasta &&
              (
                  <ErrorMessage component='div' name='hasta' className='errorM' />
              )
          }
          </div>
          <button type='submit' className='azul'>Activar alertas</button>
        
        </Form>
        )}
      </Formik>
    </>
  )
}

export default FiltroEsperaCitas;
