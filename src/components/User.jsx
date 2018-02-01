import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import '../../public/css/user.css'


export const User = ({ login, avatar }) => {
    return(
    <Link to={{pathname: '/users/'+login+'/repo'}}>
        <li className='user'>
            <div className="login">{login}</div>
            <div className="avatar" style={{backgroundImage:'url('+avatar+')'}}></div>
        </li>
    </Link>
    
    )
}

User.propTypes = {
    login: PropTypes.string,
    avatar: PropTypes.string,
}

export default User;