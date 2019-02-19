import { SET_NEW_LIST_GROUP, ADD_NEW_GROUP, NOTI_NEW_GROUPMESSAGE, UNNOTI_NEW_GROUPMESSAGE } from '../actions';

export default function listGroup(state = [], action) {
    switch(action.type) {
        case SET_NEW_LIST_GROUP:
            return action.content;
        case ADD_NEW_GROUP:
            return state.concat(action.content);
        case NOTI_NEW_GROUPMESSAGE:
            let newState = [...state];
            for(let i = 0; i < newState.length; i++) {
                if(newState[i].id === action.content) {
                    newState[i].noti = true;
                }
            }
            return newState;
        case UNNOTI_NEW_GROUPMESSAGE:
            let newState2 = [...state];
            for(let i = 0; i < newState2.length; i++) {
                if(newState2[i].id === action.content) {
                    newState2[i].noti = false;
                }
            }
            return newState2;
        default:
            return state;
    }
}