import { connect } from 'react-redux';
import React from 'react';
import User from '../components/User.jsx';

import '../../public/css/users.css'

export const Users = ({ users, error }) => {
    let content;
    if(error){
        content = <h3 style={{textAlign:'center'}}>Coś poszło nie tak, spróbuj później</h3>
    }
    else{
        content = users.map((user) => {
            return <User key={user.login} login={user.login} avatar={user.avatar_url}  />;
        })
    }
    return (
        <div className="usersContainer">
            <ul className='users'>
                {content}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users.list,
    error: state.status.user.error
})


export default connect(mapStateToProps)(Users);