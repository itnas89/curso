import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

import './Login.css'

import { login, logout } from '../../Redux/Actions/Login'

export default function Login(props) {
    return (
        <div className="Login-form">
            <Formik initialValues={props.initialValues} onSubmit={props.login} validationSchema={props.validationSchema}>
                {({values, handleChange, handleSubmit, isSubmitting, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <label for="email">Email: <input type="text" name="email" onChange={handleChange} value={values.email}/>
                        </label>
                            {errors.email && <span className="error-message">{errors.email}</span> }
                        <label for="password">Password: <input type="password" name="password" onChange={handleChange} value={values.password}/>
                        </label>
                            {errors.password && <span className="error-message">{errors.password}</span> }
                        <button type="submit" className="Nuevo" disabled={isSubmitting}>Aceptar</button>
                        <br />
                        <Link to="/register">Registrarse</Link>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export function LoginButton() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const setLogout = () => { dispatch(logout()) }

    return (
        <>
            {isLogged ?  <button onClick={setLogout}>Cerrar sesión</button> :  <Link to="/login"><button>Iniciar sesión</button></Link> }
        </>
    )

}