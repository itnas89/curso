import React, {useState, useEffect, useRef} from 'react'

import logo from './logo.svg'
import './App.css'

function App() {
  const nombreRef = React.createRef()
  const apellidosRef = React.createRef()

  const contadorRef = useRef(0)

  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [resultado, setResultado] = useState('')

  const manejarPulsacion = (event) => {
    //setResultado(`${nombreRef.current.value} ${apellidosRef.current.value}`)
    setResultado(Math.random() + "")
  }

  useEffect(() => {
    contadorRef.current = contadorRef.current + 1
  }, [resultado])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <h1>Formulario</h1><br/>
        <input type="text" onChange={(e) => {setNombre(e.target.value)}} placeholder="Nombre" ref={nombreRef} />
        <input type="text" onChange={(e) => {setApellidos(e.target.value)}} placeholder="Apellidos" ref={apellidosRef}/>
        <button onClick={manejarPulsacion}>Mostrar datos</button><br/>
        <strong>{resultado}</strong>
        <div ref={contadorRef}>
          Renderizado: {contadorRef.current} veces.
        </div>
      </div>
    </div>
  );
}

export default App
