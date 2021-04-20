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
export const Feed = () => {

const [posts, setPosts] = useState(null)

useEffect(() => {
  getPosts('top')
  .then(data => setPosts(data))
}, [])

const fetchPosts = (type) => {
  getPosts(type)
  .then(data => {
    setPosts(data)
  })
}  

if (!posts) return <h1>Loading</h1>
return (
  <div className='list-container'>
    <NavLink
      to='/new'
      className='nav-link'>
        New
    </NavLink>
     <div>Activity Feed:</div>
     <ul className='list'>
       {posts.map(post => (
           <Post key={post.data.id} postBody={post.data} />
       ))}
     </ul>
  </div>
 )

}