import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import { selectRepos, isReposLoading } from '../selectors/reposSelector';

const ReposSection = () => {
  const loading = useSelector(isReposLoading);
  const allRepos = useSelector(selectRepos);

  if(loading || allRepos.length === 0) return <Loading />;

  const repoElements = allRepos.map((repo, i) => <li key={i}>{repo}</li>);

  return (
    <section>
      <h1>{'Repos'}</h1>
      <ul>
        {repoElements}
      </ul>
    </section>
  );
};

export default ReposSection;
