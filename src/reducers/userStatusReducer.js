const status = (state = {isFetching: false, error: false}, action) => {
    switch(action.type){
        case 'SEARCH_REQUEST':
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case 'SEARCH_ERROR':
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case 'SEARCH_SUCCESS':
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