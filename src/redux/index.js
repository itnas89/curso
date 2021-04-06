import { combineReducers, createStore } from 'redux';
import { isLogged } from './reducers/login/Login';
 
let reducers = combineReducers({
    isLogged: isLogged
})

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
export default store;