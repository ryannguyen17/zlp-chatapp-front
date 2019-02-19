export const LOGIN = 'LOGIN';
export const SET_CHAT_WITH = 'SET_CHAT_WITH';
export const SET_NEW_LIST_PERSON = 'SET_NEW_LIST_PERSON';
export const ADD_NEW_PERSON = 'ADD_NEW_PERSON';
export const NOTI_NEW_MESSAGE = 'NOTI_NEW_MESSAGE';
export const UNNOTI_NEW_MESSAGE = 'UNNOTI_NEW_MESSAGE';
export const SET_NEW_LIST_GROUP = 'SET_NEW_LIST_GROUP';
export const ADD_NEW_GROUP = 'ADD_NEW_GROUP';
export const NOTI_NEW_GROUPMESSAGE = 'NOTI_NEW_GROUPMESSAGE';
export const UNNOTI_NEW_GROUPMESSAGE = 'UNNOTI_NEW_GROUPMESSAGE';
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

export function notiNewMessage(id) {
    return {
        type: NOTI_NEW_MESSAGE,
        content: id
    }
}

export function unnotiNewMessage(id) {
    return {
        type: UNNOTI_NEW_MESSAGE,
        content: id
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

export function notiNewGroupMessage(groupId) {
    return {
        type: NOTI_NEW_GROUPMESSAGE,
        content: groupId
    }
}

export function unnotiNewGroupMessage(groupId) {
    return {
        type: UNNOTI_NEW_GROUPMESSAGE,
        content: groupId
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