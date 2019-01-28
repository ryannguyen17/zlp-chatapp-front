import { LOGIN, LOGOUT } from '../actions';

export default function currentUser(state = {}, action) {
    switch(action.type) {
        case LOGIN:
            return {
                username: action.content.username,
                display_name: action.content.display_name
            }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}
