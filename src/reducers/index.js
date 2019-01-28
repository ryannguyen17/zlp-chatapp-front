import { combineReducers } from 'redux';
import currentUser from './UserReducer';
import chatWith from './ChatWithReducer';

export default combineReducers({
    currentUser,
    chatWith
});