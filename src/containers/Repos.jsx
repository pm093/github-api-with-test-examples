import { connect } from 'react-redux';
import * as fromActions from '../actions';
import React from 'react';
import Repo from '../components/Repo.jsx';
import '../../public/css/repos.css'

export class Repos extends React.Component{
    componentDidMount(){
        if(this.props.login === this.props.match.params.login && this.props.repos.length>0) return;
        else this.props.getRepos(this.props.match.params.login);
    }

    render(){
        if(this.props.error){
            return(
                <div className="repos">
                    <h3>Coś poszło nie tak, spróbuj ponownie później</h3>
                </div>
            )
        }
        if(this.props.isFetching){
            return(
                <div className="repos">
                    <i className="icon-spin4" ></i>
                </div>
            )
        }
        return (
            <div className="repos">
                <ul>
                    {this.props.repos.map((repo) => {
                        return <Repo 
                                key={repo.full_name} 
                                name={repo.name} 
                                link={repo.html_url} 
                                forks={repo.forks} 
                                issues={repo.open_issues} 
                                watchers={repo.watchers}
    
                            /> 
                    })}    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    repos: state.users.currentUser.repos,
    login: state.users.currentUser.login,
    isFetching: state.status.repo.isFetching,
    error: state.status.repo.error
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    getRepos: (login) => dispatch(fromActions.getRepos(login))
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos);