import { ACTIONS_LOGIN } from '../../Actions/Login'

export const isLogged = (state = initialState.isLogged, action) => {
    switch(action.type) {
      case ACTIONS_LOGIN.CHANGE:
        state = !state
        
        return state
      default:
        return state
    }
}

const initialState = {
    isLogged: false
}

export default isLogged