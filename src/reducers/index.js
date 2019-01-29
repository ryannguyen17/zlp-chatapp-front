import { combineReducers } from 'redux';
import currentUser from './UserReducer';
import chatWith from './ChatWithReducer';
import listPerson from './ListPersonReducer';

let reducers = combineReducers({
    currentUser,
    chatWith,
    listPerson
});

const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT')  {
        state = undefined;
    }

    return reducers(state, action);
}

export default rootReducer;