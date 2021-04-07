import React from 'react'
import { Formik } from 'formik'

import './Register.css'


export default function Register(props) {
    return (
        <div className="Register-form">
            <Formik initialValues={props.initialValues} onSubmit={props.register} validationSchema={props.validationSchema}>
                {({values, handleChange, handleSubmit, isSubmitting, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Registrarse</h1>
                        <label for="email">Email: <input type="text" name="email" onChange={handleChange} value={values.email}/>
                        </label>
                        {errors.email && <span className="error-message">{errors.email}</span> }
                        <label for="password">Password: <input type="password" name="password" onChange={handleChange}/>
                        </label>
                        {errors.password && <span className="error-message">{errors.password}</span> }
                        <button type="submit" className="Nuevo" disabled={isSubmitting}>Aceptar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}