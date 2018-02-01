import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Search from './containers/Search.jsx';
import Users from './containers/Users.jsx';
import Repos from './containers/Repos.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <Route path='/' exact component={Search} />
                <Route path='/' exact component={Users} />
                <Route path='/users/:login/repo' component={Repos} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'),
);
