export const login = ({email, password}) => {
    return {
        type: ACTIONS_LOGIN.LOGIN,
        email: email,
        password: password
    }
}

export const logout = () => {
    return {
        type: ACTIONS_LOGIN.LOGOUT
    }
}

export const register = ({email, password}) => {
    return {
        type: ACTIONS_LOGIN.REGISTER,
        email: email,
        password: password
    }
}
 
export const ACTIONS_LOGIN = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    REGISTER: "REGISTER"
}