import React, { useEffect, useState } from "react";
import { FeedListItem } from './FeedListItem.jsx'
import { getPosts } from '../../utils/api.js';

export const Feed = (props) => {
const [loading, setLoading] = useState(true)
const [posts, setPosts] = useState(null)

// console.log(props)

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
           <FeedListItem key={post.data.id} postBody={post.data} />
       ))}
     </ul>
  </div>
 )

}