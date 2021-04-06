import logo from './logo.svg'
import './App.css'

import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Nav from './components/Nav/Nav.component'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.component'

import About from './pages/About/About.page'
import Store from './pages/Store/Store.page'
import ProductDetail from './pages/Store/Product/Detail/ProductDetail.page'

function App() {
  const isLogged = useSelector(state => state.isLogged)
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav />
        </header>
        <Route exact path="/" component={Store} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute path="/product/:id" component={ProductDetail} />
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

export default App;
