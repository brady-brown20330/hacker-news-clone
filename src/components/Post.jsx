import React from 'react';
import {useLocation} from 'react-router-dom'

export const Post = (props) => {
  let location = useLocation();

  console.log('props in post: ', location)
  return (
    <div>
      <h1>{location.state.postBody.title}</h1>
      <div>{location.state.postBody.text}</div>
    </div>
  )
}