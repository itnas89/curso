import { ACTIONS_LOGIN } from '../../Actions/Login'

export const isLogged = (state = initialState.isLogged, action) => {
    //var storedUser
    console.log(window.localStorage)
    console.log(action)
    switch(action.type) {
      case ACTIONS_LOGIN.LOGIN:
        let storedUser1 = window.localStorage.getItem(action.email)
        console.log(window.localStorage)
        if (storedUser1 === action.password) {
          state = true
        }
        
        return state
    case ACTIONS_LOGIN.LOGOUT:
        state = false
        
        return state
    case ACTIONS_LOGIN.REGISTER:
      let storedUser2 = window.localStorage.getItem(action.email)
      if (storedUser2 === null || storedUser2 === 'undefined') {
        window.localStorage.setItem(action.email, action.password)
        console.log(window.localStorage)
        state = true
      }
      
      return state
      default:
        return state
    }
}

const initialState = {
    isLogged: false
}

export default isLogged