import React, {useState} from 'react'

export default function ComponenteEventos() {
    const [texto, setTexto] = useState('')

    const manejarPulsacionesTeclado = (event) => {
        setTexto(texto + event.key)
    }

    const manejarDown = (event) => {
        if (event.keyCode === 8) {
            setTexto(texto.substr(0, (texto.length - 1)))
        }
    }
    return(
        <div>
            <input type="text" onKeyPress={manejarPulsacionesTeclado} onKeyDown={manejarDown} /><br/>
            <span>{texto}</span>
        </div>
    )
}