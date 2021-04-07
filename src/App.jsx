import logo from './logo.svg'
import './App.css'
import Mensajes from './Views/Mensajes'
import {LoginButton} from './Components/Login/Login'
import Login from './Views/Login/Login.view'
import Register from './Views/Register/Register.view'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute.component'

function App() {
//window.localStorage.setItem("admin@admin.com", "12345")
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
      </header>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Mensajes} />
        <Redirect from="/**" to={
          {
            pathname: '/',
            state: {
              badURL: true
            }
          }
        } />
      </Router>
    </div>
  );
}

export default App
