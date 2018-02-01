import usersReducer from '../src/reducers/usersReducer';
import repoStatusReducer from '../src/reducers/repoStatusReducer';
import userStatusReducer from '../src/reducers/userStatusReducer';

describe('users reducer', () => {
    const initialState = {
        list: [],
        currentUser: {
            login: '',
            repos: []
        }
    }
    it('should return initial state', () => {
        expect(usersReducer(undefined, {}))
        .toEqual({
            ...initialState
        })
    });
    it('should handle SEARCH_SUCCESS', () => {
        expect(usersReducer(undefined, {
            type: 'SEARCH_SUCCESS',
            users:['user1', 'user2']
        }))
        .toEqual({
            ...initialState,
            list: ['user1', 'user2']
        })
    });
    it('should handle GET_REPOS_SUCCESS', () => {
        expect(usersReducer(undefined, {
            type: 'GET_REPOS_SUCCESS',
            login: 'test',
            repos: ['test1', 'test2']
        }))
        .toEqual({
            ...initialState,
            currentUser: {
                login: 'test',
                repos: ['test1', 'test2']
            }
        })
    })
})

describe('repo status reducer', () => {
    const initialState = {
        isFetching: false,
        error:false,
    }
    it('should return initial state', () => {
        expect(repoStatusReducer(undefined,{}))
        .toEqual({
            ...initialState
        })
    });
    it('should handle GET_REPOS_REQUEST', () => {
        expect(repoStatusReducer(undefined,{
            type: 'GET_REPOS_REQUEST'
        }))
        .toEqual({
            ...initialState,
            isFetching: true,
            error:false,
        })
    });
    it('should handle GET_REPOS_ERROR', () => {
        expect(repoStatusReducer(undefined,{
            type: 'GET_REPOS_ERROR'
        }))
        .toEqual({
            ...initialState,
            isFetching: false,
            error:true,
        })
    });
    it('should handle GET_REPOS_SUCCESS', () => {
        expect(repoStatusReducer(undefined,{
            type: 'GET_REPOS_SUCCESS'
        }))
        .toEqual({
            ...initialState,
            isFetching: false,
            error:false,
        })
    })
})

describe('user status reducer', () => {
    const initialState = {
        isFetching: false,
        error:false,
    }
    it('should return initial state', () => {
        expect(userStatusReducer(undefined,{}))
        .toEqual({
            ...initialState
        })
    });
    it('should handle SEARCH_REQUEST', () => {
        expect(userStatusReducer(undefined,{
            type: 'SEARCH_REQUEST'
        }))
        .toEqual({
            ...initialState,
            isFetching: true,
            error:false,
        })
    });
    it('should handle SEARCH_ERROR', () => {
        expect(userStatusReducer(undefined,{
            type: 'SEARCH_ERROR'
        }))
        .toEqual({
            ...initialState,
            isFetching: false,
            error:true,
        })
    });
    it('should handle SEARCH_SUCCESS', () => {
        expect(userStatusReducer(undefined,{
            type: 'SEARCH_SUCCESS'
        }))
        .toEqual({
            ...initialState,
            isFetching: false,
            error:false,
        })
    })
})