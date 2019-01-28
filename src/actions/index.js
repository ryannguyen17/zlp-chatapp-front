export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_CHAT_WITH = 'SET_CHAT_WITH';

export function doLogin({username, display_name}) {
    return {
        type: LOGIN,
        content: {
            username,
            display_name
        }
    }
}

export function doLogout() {
    return {
        type: LOGOUT
    }
}

export function setChatWith(isPerson, id) {
    return {
        type: SET_CHAT_WITH,
        content: {
            isPerson,
            id
        }
    }
}