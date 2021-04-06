import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import Mensajes from './Views/Mensajes'
import Login from './Components/Login/Login'

function App() {
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
      </header>
      {
        (isLogged) && <Mensajes></Mensajes>
      }
      
    </div>
  );
}

export default App
