import { SET_CHAT_HISTORY } from '../actions';

export default function chatHistory(state = [], action) {
    switch(action.type) {
        case SET_CHAT_HISTORY:
            return action.content;
        default:
            return state;
    }
}