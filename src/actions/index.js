export const LOGIN = 'LOGIN';
export const SET_CHAT_WITH = 'SET_CHAT_WITH';
export const SET_NEW_LIST_PERSON = 'SET_NEW_LIST_PERSON';
export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';
export const SET_NEW_LIST_GROUP = 'SET_NEW_LIST_GROUP';
export const ADD_NEW_GROUP = 'ADD_NEW_GROUP';
export const SET_CHAT_HISTORY = 'SET_CHAT_HISTORY';
export const ADD_CHAT = 'ADD_CHAT';

export function doLogin({username, display_name}) {
    return {
        type: LOGIN,
        content: {
            username,
            display_name
        }
    }
}

export function setChatWith(isPerson, id, detail) {
    return {
        type: SET_CHAT_WITH,
        content: {
            isPerson,
            id,
            detail
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
        type: ADD_NEW_PERSON,
        content: person
    }
}

export function setNewListGroup(arrGroup) {
    return {
        type: SET_NEW_LIST_GROUP,
        content: arrGroup
    }
}

export function addNewGroup(group) {
    return {
        type: ADD_NEW_GROUP,
        content: group
    }
}

export function setChatHistory(arr) {
    return {
        type: SET_CHAT_HISTORY,
        content: arr
    }
}

export function addToChatHistory(msg) {
    return {
        type: ADD_CHAT,
        content: msg
    }
}