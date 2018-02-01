const status = (state = {isFetching: false, error: false}, action) => {
    switch(action.type){
        case 'GET_REPOS_REQUEST':
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case 'GET_REPOS_ERROR':
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case 'GET_REPOS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: false
            }
        default:
            return state;
    }
}

export default status;