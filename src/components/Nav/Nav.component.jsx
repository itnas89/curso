import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { login, logout } from '../../redux/actions/login/Login'

import './Nav.component.css'

export default function Nav() {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    const setLogin = () => { dispatch(login()) }
    const setLogout = () => { dispatch(logout()) }

    return(
        <div className="Nav">
            <Link className="Nav-link" to="/">Store</Link>
            <Link className="Nav-link" to="/about">About</Link>
            {isLogged ?  <button onClick={setLogout}>Cerrar sesión</button> :  <button onClick={setLogin}>Iniciar sesión</button> }
        </div>
    )
}

