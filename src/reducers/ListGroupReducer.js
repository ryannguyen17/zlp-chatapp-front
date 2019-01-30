import { SET_NEW_LIST_GROUP, ADD_NEW_GROUP } from '../actions';

export default function listGroup(state = [], action) {
    switch(action.type) {
        case SET_NEW_LIST_GROUP:
            return action.content;
        case ADD_NEW_GROUP:
            return state.concat(action.content);
        default:
            return state;
    }
}