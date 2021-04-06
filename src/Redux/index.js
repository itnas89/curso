import { combineReducers, createStore } from 'redux';
import { mensajes } from './Reducers/Mensajes';
import { isLogged } from './Reducers/Login';
 
let reducers = combineReducers({
    mensajes: mensajes,
    isLogged: isLogged
})

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
export default store;