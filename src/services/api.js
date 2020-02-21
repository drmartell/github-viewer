const fetch = require('node-fetch');

const request = path =>
  fetch(`https://api.github.com${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });

export const getUser = userName => request(`/users/${userName}`);
export const getRepos = userName => request(`/users/${userName}/repos`);
