import { USER_LOADING, FETCH_USER } from '../actions/actions';
import reducer from './userReducer';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: USER_LOADING };
    const initialState = { loading: false };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ loading: true });
  });

  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USER,
      payload: {
        'login': 'sunil',
        'id': 86241,
        'node_id': 'MDQ6VXNlcjg2MjQx',
        'avatar_url': 'https://avatars2.githubusercontent.com/u/86241?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/sunil',
        'html_url': 'https://github.com/sunil',
        'followers_url': 'https://api.github.com/users/sunil/followers',
        'following_url': 'https://api.github.com/users/sunil/following{/other_user}',
        'gists_url': 'https://api.github.com/users/sunil/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/sunil/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/sunil/subscriptions',
        'organizations_url': 'https://api.github.com/users/sunil/orgs',
        'repos_url': 'https://api.github.com/users/sunil/repos',
        'events_url': 'https://api.github.com/users/sunil/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/sunil/received_events',
        'type': 'User',
        'site_admin': false,
        'name': null,
        'company': null,
        'blog': '',
        'location': null,
        'email': null,
        'hireable': null,
        'bio': null,
        'public_repos': 2,
        'public_gists': 0,
        'followers': 7,
        'following': 0,
        'created_at': '2009-05-19T10:14:18Z',
        'updated_at': '2016-02-26T22:46:11Z'
      }      
    };

    const initialState = { loading: true, user: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      user: {
        'login': 'sunil',
        'id': 86241,
        'node_id': 'MDQ6VXNlcjg2MjQx',
        'avatar_url': 'https://avatars2.githubusercontent.com/u/86241?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/sunil',
        'html_url': 'https://github.com/sunil',
        'followers_url': 'https://api.github.com/users/sunil/followers',
        'following_url': 'https://api.github.com/users/sunil/following{/other_user}',
        'gists_url': 'https://api.github.com/users/sunil/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/sunil/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/sunil/subscriptions',
        'organizations_url': 'https://api.github.com/users/sunil/orgs',
        'repos_url': 'https://api.github.com/users/sunil/repos',
        'events_url': 'https://api.github.com/users/sunil/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/sunil/received_events',
        'type': 'User',
        'site_admin': false,
        'name': null,
        'company': null,
        'blog': '',
        'location': null,
        'email': null,
        'hireable': null,
        'bio': null,
        'public_repos': 2,
        'public_gists': 0,
        'followers': 7,
        'following': 0,
        'created_at': '2009-05-19T10:14:18Z',
        'updated_at': '2016-02-26T22:46:11Z'
      }           
    });
  });
});
