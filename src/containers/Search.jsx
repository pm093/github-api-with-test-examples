import { connect } from 'react-redux';
import * as fromActions from '../actions';
import React from 'react';
import _ from 'lodash';
import '../../public/css/search.css'

export const Search = ({ search, users }) => {
  const debouncedSearch = _.debounce(search,300);
  return (
        <div className="search">
          <input name='login' placeholder='find user by login' type="text" onChange={(e) => debouncedSearch(e.target.value)} />
        </div>
  );
};

const mapDispatchToProps = dispatch => ({
    search: (query) => dispatch(fromActions.search(query))   
});

export default connect(null, mapDispatchToProps)(Search);
