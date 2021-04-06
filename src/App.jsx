import logo from './logo.svg'
import './App.css'
import Mensajes from './Views/Mensajes'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Mensajes></Mensajes>
    </div>
  );
}

export default App
