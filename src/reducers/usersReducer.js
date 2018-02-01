const users = (state = { list:[], currentUser:{ login:'', repos:[] } }, action) => {
    switch(action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                list:action.users || []
            }
        case 'GET_REPOS_SUCCESS':
            return {
                ...state,
                currentUser: {
                    login: action.login,
                    repos: action.repos
                }
            }
        default:
            return state;
    }
}


export default users;