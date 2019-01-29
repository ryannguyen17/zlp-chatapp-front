import { SET_NEW_LIST_PERSON, ADD_NEW_PERSON } from '../actions';

export default function listPerson(state = [], action) {
    switch(action.type) {
        case SET_NEW_LIST_PERSON:
            return action.content;
        case ADD_NEW_PERSON:
            return state.concat(action.content);
        default:
            return state;
    }
}