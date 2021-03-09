import logo from './logo.svg'
import './App.css'
import Articulo from './Components/Articulo'
import Bitcoin from './Components/Bitcoin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <Articulo />
        <Bitcoin />
      </div>
    </div>
  );
}

export default App
