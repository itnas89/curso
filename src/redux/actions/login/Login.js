
    export const login = () => {
        return {
            type: ACTIONS_LOGIN.LOGIN
        }
    }

    export const logout = () => {
        return {
            type: ACTIONS_LOGIN.LOGOUT
        }
    }
 	
    export const ACTIONS_LOGIN = {
        LOGIN: "LOGIN",
        LOGOUT: "LOGOUT"
    }