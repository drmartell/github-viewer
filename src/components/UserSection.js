import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserDetails, isUserLoading } from '../selectors/userSelector';
import { searchSelector, isSearching } from '../selectors/searchSelector';
import Loading from './Loading';

const UserSection = () => {
  const loading = useSelector(isUserLoading);
  const searching = useSelector(isSearching);
  const { login, name, followers, following, html_url, id } = useSelector(selectUserDetails);

  if(loading) return <Loading />;

  return !searching ? null :
    (
      <section>
        <h1>Username: {login}</h1>
        <ul>
          <li>Name: {name}</li>
          <li>Followers: {followers}</li>
          <li>Following: {following}</li>
          <li><a href={html_url}>{html_url}</a></li>
        </ul>
      </section>
    );
};

export default UserSection;
