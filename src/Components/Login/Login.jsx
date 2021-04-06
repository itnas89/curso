import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeSession } from '../../Redux/Actions/Login'

export default function Login(props) {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const changeLogin = () => { dispatch(changeSession()) }

    return (
        <button onClick={changeLogin}>{(isLogged) ? "Cerrar sesión": "Iniciar sesión"}</button>
    )
}