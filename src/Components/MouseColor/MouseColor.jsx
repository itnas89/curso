import React, {useState} from 'react'

import './MouseColor.css'

export default function MouseColor() {
    const [color, setColor] = useState({})

    const capturarRaton = (event) => {
        const r = Math.random() * (255)
        const g = Math.random() * (255)
        const b = Math.random() * (255)
        setColor( {backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')'})
    }

    return(
        <div>
            <div onMouseMove={capturarRaton} className="colores" style={color}></div>
        </div>
    )
}