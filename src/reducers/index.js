import { combineReducers } from 'redux';
import currentUser from './UserReducer';
import chatWith from './ChatWithReducer';
import listPerson from './ListPersonReducer';
import listGroup from './ListGroupReducer';
import chatHistory from './ChatHistory';

let reducers = combineReducers({
    currentUser,
    chatWith,
    chatHistory,
    listPerson,
    listGroup
});

const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT')  {
        state = undefined;
    }

    return reducers(state, action);
}

export default rootReducer;