import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'

import RegisterForm from '../../Components/Register/Register'
import { register as registerAction } from '../../Redux/Actions/Login'

export default function Register(props) {
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
    let register = ({email, password}, {setSubmitting}) => {
        let usuario = {
          "email": email,
          "password": password,
        };
        setSubmitting(false)
     
        dispatch(registerAction(usuario));
    }

    const initialValues = {
        "email": "",
        "password": ""
    }

    return (
        <RegisterForm register={register} validationSchema={validaciones} initialValues={initialValues}/>
    )
}