import { SET_CHAT_HISTORY, ADD_CHAT } from '../actions';

export default function chatHistory(state = [], action) {
    switch(action.type) {
        case SET_CHAT_HISTORY:
            return action.content;
        case ADD_CHAT:
            return state.concat(action.content);
        default:
            return state;
    }
}