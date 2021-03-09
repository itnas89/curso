import logo from './logo.svg'
import './App.css'
import MouseColor from './Components/MouseColor/MouseColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <MouseColor />
      </div>
    </div>
  );
}

export default App
