import { ACTIONS_LOGIN } from '../../actions/login/Login'

export const isLogged = (state = initialState.isLogged, action) => {
    switch(action.type) {
      case ACTIONS_LOGIN.LOGIN:
        state = true
        
        return state
    case ACTIONS_LOGIN.LOGOUT:
        state = false
        
        return state
      default:
        return state
    }
}

const initialState = {
    isLogged: false
}

export default isLogged