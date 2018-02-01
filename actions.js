// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import * as actions from '../src/actions';
// import fetchMock from 'fetch-mock';
// import expect from 'expect';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);


// describe('async actions', () => {
//    afterEach(() => {
//        fetchMock.reset();
//        fetchMock.restore();
//    });

//    it('creates SEARCH_SUCCESS when users fetching has been done', () => {
//        fetchMock.getOnce('/users', {
//            body: {
//                users: [
//                    {
//                         login: 'example',
//                    }
//                 ] 
//             },
//             headers: {
//                 'content-type': 'application/json'
//             }
//         });

//         const expectedActions = [
//             { type: 'SEARCH_REQUEST'},
//             { type: 'SEARCH_SUCCESS', users: [ { login: 'example' } ] }
//         ]

//         const store = mockStore({ users: [] });

//         return store.dispatch(actions.search('test')).then(() => {
            
//             expect(store.getActions()).toEqual(expectedActions);
//         })

//    })
//    it('creates reposuccess when users fetching has been done', () => {
//     fetchMock.getOnce('/repos', {
//         body: {
//             repos: ['repo'] 
//          },
//          headers: {
//              'content-type': 'application/json'
//          }
//      });

//      const expectedActions = [
//          { type: 'SEARCH_REQUEST'},
//          { type: 'SEARCH_SUCCESS' }
//      ]

//      const store = mockStore({ repos: [] });

//      return store.dispatch(actions.getRepos('test')).then(() => {
         
//          expect(store.getActions()).toEqual(expectedActions);
//      })

// })
// });


