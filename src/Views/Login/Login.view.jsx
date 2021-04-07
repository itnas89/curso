import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'

import LoginForm from '../../Components/Login/Login'
import { login as loginAction } from '../../Redux/Actions/Login'

export default function Login(props) {
    const isLogged = useSelector(state => state.isLogged)
    if (isLogged) {
        props.history.push({
            pathname: '/',
        })
    }
    const dispatch = useDispatch()


    const validaciones = Yup.object().shape({
        "email": Yup.string()
            .required('El email es obligatorio')
            .email('Formato incorrecto'),
        "password": Yup.string()
            .required('Contraseña')
            .min(5, 'La contraseña es demasiado corta')
    })
    let login = ({email, password}, {setSubmitting}) => {
        let usuario = {
          "email": email,
          "password": password,
        };
        setSubmitting(false)
     
        dispatch(loginAction(usuario));
    }

    const initialValues = {
        "email": "email@email.com",
        "password": `12345`
    }

    return (
        <LoginForm login={login} validationSchema={validaciones} initialValues={initialValues}/>
    )
}