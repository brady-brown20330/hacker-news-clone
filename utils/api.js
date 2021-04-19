import axios from 'axios';
const api = `https://hacker-news.firebaseio.com/v0/`;
const json = '.json?print=pretty';

export function getPosts(type) {
  return axios.get(`${api}${type}stories${json}`)
  .then((ids) => {
    if (!ids) {
      throw new Error(`There was an error fetching the ${type} posts.`)
    }
    return ids.data.slice(0, 50)
  })
  .then((ids) => Promise.all(ids.map(fetchItem)))
}

export function fetchItem (id) {
  return axios.get(`${api}/item/${id}${json}`)
}