import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;