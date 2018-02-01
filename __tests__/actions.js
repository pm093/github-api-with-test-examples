import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('search action', () => {
    it('should dispatch request and success action after successsfull fetching', () => {
        fetchMock
          .getOnce('https://api.github.com/search/users?q=test+in:login', {  items: ['user'], headers: { 'content-type': 'application/json' } })
    
    
        const expectedActions = [
          { type: 'SEARCH_REQUEST' },
          { type: 'SEARCH_SUCCESS', users: ['user'] }
        ]
        const store = mockStore({ users: [] })
    
        return store.dispatch(actions.search('test')).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
      })
    })

    describe('getRepos action', () => {
        it('should dispatch request and success action after successsfull fetching', () => {
            fetchMock
              .getOnce('https://api.github.com/users/test/repos',  ['repo'])
        
        
            const expectedActions = [
              { type: 'GET_REPOS_REQUEST' },
              { type: 'GET_REPOS_SUCCESS', repos: ['repo'], login: 'test' }
            ]
            const store = mockStore({ users: [] })
        
            return store.dispatch(actions.getRepos('test')).then(() => {
              expect(store.getActions()).toEqual(expectedActions)
            })
          })
        })

  })

 