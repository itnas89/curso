import React, {useState} from 'react'

import './MouseColor.css'

export default function MouseColor() {
    const [color, setColor] = useState({})
    const [stopColor, setStopColor] = useState(false)

    const changeColor = (stopColor) => {
        if (!stopColor) {
            const r = Math.random() * (255)
            const g = Math.random() * (255)
            const b = Math.random() * (255)
            setColor( {backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')'})
        }
    }

    const capturarRaton = (event) => {
        changeColor(false)
    }

    const capturarRatonInOut = (event) => {
        changeColor(stopColor)
    }

    const capturarRatonDobleClick = (event) => {
        setStopColor(!stopColor)
    }

    return(
        <div>
            <div onMouseMove={capturarRaton} className="colores" style={color}></div>
            <div onMouseEnter={capturarRatonInOut} onMouseLeave={capturarRatonInOut} onDoubleClick={capturarRatonDobleClick} className="colores" style={color}></div>
        </div>
    )
}