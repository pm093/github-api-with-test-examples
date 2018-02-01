import { combineReducers } from 'redux';
import userStatusReducer from './userStatusReducer';
import repoStatusReducer from './repoStatusReducer';

const status =  combineReducers({
    user: userStatusReducer,
    repo: repoStatusReducer
});

export default status;