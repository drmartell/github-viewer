import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, fetchRepos, searching } from '../actions/actions';
import UserSection from './UserSection';
import ReposSection from './ReposSection';

const Search = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState();
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(searching());
    dispatch(fetchUser(searchString));
    dispatch(fetchRepos(searchString));
  };

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={({ target: { value } }) => setSearchString(value) }/>
      <button>Search</button>
    </form>

    <UserSection />
    <ReposSection />
  </>;
};

export default Search;
