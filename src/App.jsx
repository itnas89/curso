import logo from './logo.svg'
import './App.css'
import ComponenteEventos from './Components/ComponenteEventos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <ComponenteEventos />
      </div>
    </div>
  );
}

export default App
