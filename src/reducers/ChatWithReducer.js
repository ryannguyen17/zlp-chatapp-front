import { SET_CHAT_WITH } from '../actions';

export default function chatWith(state = {}, action) {
    switch(action.type) {
        case SET_CHAT_WITH:
            return {
                isPerson: action.content.isPerson,
                id: action.content.id
            }
        default:
            return state;
    }
}