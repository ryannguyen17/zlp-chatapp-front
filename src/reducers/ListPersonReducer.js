import { SET_NEW_LIST_PERSON, ADD_NEW_PERSON, NOTI_NEW_MESSAGE, UNNOTI_NEW_MESSAGE } from '../actions';

export default function listPerson(state = [], action) {
    switch(action.type) {
        case SET_NEW_LIST_PERSON:
            return action.content;
        case ADD_NEW_PERSON:
            return state.concat(action.content);
        case NOTI_NEW_MESSAGE:
            let newState = [...state];
            for(let i = 0; i < newState.length; i++) {
                if(newState[i].username === action.content) {
                    newState[i].noti = true;
                }
            }
            return newState;
        case UNNOTI_NEW_MESSAGE:
            let newState2 = [...state];
            for(let i = 0; i < newState2.length; i++) {
                if(newState2[i].username === action.content) {
                    newState2[i].noti = false;
                }
            }
            return newState2;
        default:
            return state;
    }
}