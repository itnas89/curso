import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import './Mensajes.css'

import * as Yup from 'yup'

import MensajesHeader from '../Components/MensajesHeader/MensajesHeader'
import MensajesTable from '../Components/MensajesTable/MensajesTable'
import { borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes } from '../index'

export default function Vista() {
    //const [mensajes, setMensajes] = useState([])
    const mensajes = useSelector(state => state)
    const dispatch = useDispatch()

    const validaciones = Yup.object().shape({
        "asunto": Yup.string()
            .required('El asunto es obligatorio'),
        "email": Yup.string()
            .required('El email es obligatorio')
            .email('Formato incorrecto'),
        "mensaje": Yup.string()
            .required('Escriba un mensaje')
            .min(10, 'El mensaje es demasiado corto')
    })
    
    let crear = ({asunto, email, mensaje}) => {
        let nuevo = {
          "asunto": asunto,
          "email": email,
          "mensaje": mensaje,
          "leido": false
        };
     
        dispatch(crearMensaje(nuevo));
    }
    let vaciar = () => { dispatch(vaciarMensajes()); }
    let eliminar = (index) => { dispatch(borrarMensaje(index)); }
    let leer = (index) => { dispatch(leerMensaje(index)) }

    /*let nuevoMensaje = (values, { setSubmitting }) => {
        setTimeout(() => {
            let msg = {...values};
            setMensajes(mensajes => [...mensajes, msg])

            setSubmitting(false)
        }, 1000)
    }

    let eliminarMensajes = () => {
        setMensajes([])
    }

    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1)
        setMensajes([...mensajes])
    }

    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido
        setMensajes([...mensajes])
    }*/

    const initialValues = {
        "asunto": "Prueba",
        "email": "email@email.com",
        "mensaje": `Mensaje de prueba`,
        "leido": false
    }

    return (
        <div className="Mensajes">
            <MensajesHeader clickNuevo={crear} clickEliminar={vaciar} initialValues={initialValues} validationSchema={validaciones}></MensajesHeader>
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminar} clickMarcarLeido={leer}></MensajesTable>
        </div>
    )    

}