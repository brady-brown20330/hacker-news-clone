import React, { useEffect, useState } from "react";
import { Post } from './Post'
export const Feed = (props) => {
console.log(props.posts)

if (!props.posts) return <h1>Loading</h1>
return (
  <div className='list-container'>
     <h1>Activity Feed:</h1>
     <ul className='list'>
       {props.posts.map(post => (
           <Post key={post.data.id} postBody={post.data} />
       ))}
     </ul>
  </div>
 )

}