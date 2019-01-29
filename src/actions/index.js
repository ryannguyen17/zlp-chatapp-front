export const LOGIN = 'LOGIN';
export const SET_CHAT_WITH = 'SET_CHAT_WITH';
export const SET_NEW_LIST_PERSON = 'SET_NEW_LIST_PERSON';
export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';

export function doLogin({username, display_name}) {
    return {
        type: LOGIN,
        content: {
            username,
            display_name
        }
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

export function setNewListPerson(arrPerson) {
    return {
        type: SET_NEW_LIST_PERSON,
        content: arrPerson
    }
}

export function addNewPerson(person) {
    return {
        type: SET_NEW_LIST_PERSON,
        content: person
    }
}