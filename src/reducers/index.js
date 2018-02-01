import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import statusReducer from './statusReducer';

const mainReducer = combineReducers({
    users: usersReducer,
    status: statusReducer
});

export default mainReducer;