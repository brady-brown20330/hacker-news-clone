import React, { useEffect, useState } from "react";
import { Post } from './Post.jsx'
import { getPosts } from '../../utils/api.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

export const Feed = (props) => {
const [loading, setLoading] = useState(true)
const [posts, setPosts] = useState(null)

console.log(props)

useEffect(() => {
  setPosts(null)
  fetchPosts(props.type)
  // .then(setLoading(false))
}, [props.type])

const fetchPosts = (type) => {
  console.log('fetching posts...')
  getPosts(type)
  .then(data => {
    setPosts(data)
  })
}  

if (!posts) return <h1>Loading</h1>

return (
  <div className='list-container'>
     <div>Activity Feed:</div>
     <ul className='list'>
       {posts.map(post => (
           <Post key={post.data.id} postBody={post.data} />
       ))}
     </ul>
  </div>
 )

}