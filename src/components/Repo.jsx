import React from 'react';
import PropTypes from 'prop-types';
import '../../public/css/repo.css';


const Repo = ({ name, link, forks, watchers, issues }) => {
    return(
        <li className='repo'>
            <div className="name"><a href={link} className="visit">{name}</a></div> 
            <i className="icon-fork">{forks}</i>
            <i className="icon-eye-outline">{watchers}</i>
            <i className="icon-question">{issues}</i>
            
        </li>
    )
}

Repo.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    forks: PropTypes.number,
    watchers: PropTypes.number,
    issues: PropTypes.number
}
export default Repo;