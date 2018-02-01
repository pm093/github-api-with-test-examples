import { createMockStore } from 'redux-test-utils';
import {Provider} from 'react-redux'
import {User} from '../src/components/User.jsx'
import Enzyme, { mount, shallow } from 'enzyme';
import ConnectedRepos, {Repos} from '../src/containers/Repos.jsx';
import ConnectedSearch, { Search } from '../src/containers/Search.jsx';
import ConnectedUsers, {Users} from '../src/containers/Users.jsx';
import * as fromActions from '../src/actions';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Repo from '../src/components/Repo.jsx';
import sinon from 'sinon';

Enzyme.configure({
    adapter: new Adapter()
})
jest.useFakeTimers();

describe('components', () => {
    let wrapper;
    describe('repo component', () => {
        const props = {
            name: 'test',
            link: 'http://test.test',
            forks: 5,
            watchers: 5,
            issues: 5 
        }

        beforeEach(() => {
            wrapper = mount(<Repo {...props}  />);
        })
        it('should render itself', () => {
            expect(wrapper.length).toEqual(1);
        })
        it('should render data from props properly', () => {            
            expect(wrapper.find('.name a').text()).toBe(props.name);
            expect(wrapper.find('.name a').prop('href')).toEqual(props.link);
            expect(wrapper.find('.icon-fork').text()).toBe(props.forks.toString());
            expect(wrapper.find('.icon-eye-outline').text()).toBe(props.watchers.toString());
            expect(wrapper.find('.icon-question').text()).toBe(props.issues.toString());
        })
    })

    describe('search component', () => {

        const initialState = {
            users: ['test']
        }
        let store, wrapper;

        beforeEach(() => {
            store = createMockStore(initialState);
            wrapper = mount(<Provider store={store}><ConnectedSearch /></Provider>);    
        });

        it('should have empty input field wilth placeholder', () => {
            expect(wrapper.find('.search input').props().value).toEqual(undefined);
            expect(wrapper.find('.search input').props().placeholder).toEqual('find user by login');
        })
        it('should render smart component', () => {
            expect(wrapper.find(ConnectedSearch).length).toEqual(1);
        })
        it('should dispatch proper actions', () => {
            let action;
            store.dispatch(fromActions.searchRequest());
            store.dispatch(fromActions.searchError());
            store.dispatch(fromActions.searchSuccess(['user']));
            store.dispatch(fromActions.getReposRequest());
            store.dispatch(fromActions.getReposError());
            store.dispatch(fromActions.getReposSuccess(['repo'], 'login'));
            action = store.getActions();
            expect(action[0].type).toBe('SEARCH_REQUEST')
            expect(action[1].type).toBe('SEARCH_ERROR')
            expect(action[2].type).toBe('SEARCH_SUCCESS')
            expect(action[2].users).toEqual(['user'])
            expect(action[3].type).toBe('GET_REPOS_REQUEST')
            expect(action[4].type).toBe('GET_REPOS_ERROR')
            expect(action[5].type).toBe('GET_REPOS_SUCCESS')
            expect(action[5].login).toEqual('login')
            expect(action[5].repos).toEqual(['repo'])
        })
    })

    describe('users container ', () => {
        const props = {
            users: [
                { 
                    login: 'user',
                    avatar_url: 'url'
                },
                { 
                    login: 'user2',
                    avatar_url: 'url2'
                }
            ],
            error: false,
        }
        beforeEach(() => {
            wrapper = shallow(<Users {...props} />)
        })
        it('should render itself',() => {
            expect(wrapper.length).toEqual(1);
        })
        it('should props to User component', () => {
            for(let i=0; i<props.users.length; i++) {
                expect(wrapper.find('User').at(i).prop('login')).toEqual(props.users[i].login);
                expect(wrapper.find('User').at(i).prop('avatar')).toEqual(props.users[i].avatar_url);
            }
            expect(wrapper.find('User').length).toEqual(props.users.length);
        })
        it('render message if eror occured', () => {
            wrapper = shallow(<Users error={true} users={['user']} />);
            expect(wrapper.find('User').length).toEqual(0);
        })
    })

    describe('repos container', () => {
            const initialState = {
                users: {
                    currentUser: {
                        repos: [],
                        login: 'test'
                    },
                },
                status: {
                    user: {
                        error: false,
                    },
                    repo: {
                        error: false,
                        isFetching: false,
                    }
                }
            }
            let store  = createMockStore(initialState);
            let getRepos = jest.fn();
            let match = { params: { login: 'testt' } }
            
            it('call method getRepos when component mounted', () => {
                wrapper = shallow(<Repos match={match} getRepos={getRepos} repos={[]} store={store}/>)
                expect(getRepos.mock.calls.length).toBe(1);
            })
    })
})