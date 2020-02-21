import { isUserLoading, selectUserDetails } from './userSelector';

describe('user selectors', () => {
  it('selects the user loading state', () => {
    const state = {
      user: { loading: true }
    };

    expect(isUserLoading(state)).toEqual(true);
  });

  it('selects the user details state', () => {
    const state = {
      user: {
        user: {
          'login': 'john',
          'id': 1668,
          'node_id': 'MDQ6VXNlcjE2Njg=',
          'avatar_url': 'https://avatars1.githubusercontent.com/u/1668?v=4',
          'gravatar_id': '',
          'url': 'https://api.github.com/users/john',
          'html_url': 'https://github.com/john',
          'followers_url': 'https://api.github.com/users/john/followers',
          'following_url': 'https://api.github.com/users/john/following{/other_user}',
          'gists_url': 'https://api.github.com/users/john/gists{/gist_id}',
          'starred_url': 'https://api.github.com/users/john/starred{/owner}{/repo}',
          'subscriptions_url': 'https://api.github.com/users/john/subscriptions',
          'organizations_url': 'https://api.github.com/users/john/orgs',
          'repos_url': 'https://api.github.com/users/john/repos',
          'events_url': 'https://api.github.com/users/john/events{/privacy}',
          'received_events_url': 'https://api.github.com/users/john/received_events',
          'type': 'User',
          'site_admin': false,
          'name': 'John McGrath',
          'company': 'AWS',
          'blog': 'https://twitter.com/wordie',
          'location': 'San Francisco, CA',
          'email': null,
          'hireable': true,
          'bio': 'I\'m a solutions architect at AWS and prior to that co-founded Entelo. Interested in renewable energy, media, and democracy.',
          'public_repos': 53,
          'public_gists': 1,
          'followers': 89,
          'following': 48,
          'created_at': '2008-02-28T23:17:13Z',
          'updated_at': '2020-02-01T17:52:11Z'
        }
      }
    };

    expect(selectUserDetails(state)).toEqual({
      'login': 'john',
      'id': 1668,
      'node_id': 'MDQ6VXNlcjE2Njg=',
      'avatar_url': 'https://avatars1.githubusercontent.com/u/1668?v=4',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/john',
      'html_url': 'https://github.com/john',
      'followers_url': 'https://api.github.com/users/john/followers',
      'following_url': 'https://api.github.com/users/john/following{/other_user}',
      'gists_url': 'https://api.github.com/users/john/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/john/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/john/subscriptions',
      'organizations_url': 'https://api.github.com/users/john/orgs',
      'repos_url': 'https://api.github.com/users/john/repos',
      'events_url': 'https://api.github.com/users/john/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/john/received_events',
      'type': 'User',
      'site_admin': false,
      'name': 'John McGrath',
      'company': 'AWS',
      'blog': 'https://twitter.com/wordie',
      'location': 'San Francisco, CA',
      'email': null,
      'hireable': true,
      'bio': 'I\'m a solutions architect at AWS and prior to that co-founded Entelo. Interested in renewable energy, media, and democracy.',
      'public_repos': 53,
      'public_gists': 1,
      'followers': 89,
      'following': 48,
      'created_at': '2008-02-28T23:17:13Z',
      'updated_at': '2020-02-01T17:52:11Z'
    });
  });
});
