export const search = query => dispatch => {
    dispatch(searchRequest());
    return fetch('https://api.github.com/search/users?q=' + query + '+in:login')
    .then((res) => {
     if(res.status===200){
       return res;
     }
     else{
       throw new Error();
     }
    })
    .then(res => res.json())
    .then(res => dispatch(searchSuccess(res.items)))
    .catch(err => dispatch(searchError()));
  };
  
  export const searchRequest = () => ({
    type:'SEARCH_REQUEST'  
  });
  export const searchSuccess = (users) => ({
    type: 'SEARCH_SUCCESS',
    users
  });
  export const searchError = () => ({
    type: 'SEARCH_ERROR'
  });

  export const getRepos = login => dispatch => {
    dispatch(getReposRequest());
    return fetch('https://api.github.com/users/'+login+'/repos')
    .then(res => res.json())
    .then(res => dispatch(getReposSuccess(res,login)))
    .catch(err => dispatch(getReposError()));
  }
  
  export const getReposRequest = () => ({
    type: 'GET_REPOS_REQUEST'
  });
  
  export const getReposSuccess = (repos, login) => ({
    type: 'GET_REPOS_SUCCESS',
    repos,
    login
  });

  export const getReposError = () => ({
    type: 'GET_REPOS_ERROR'
  });
