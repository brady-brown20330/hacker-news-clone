import React, { useEffect, useState } from "react";
/**
 * EACH POST HAS:
 * post title (links to article)
 * subtext: post by USER on DATE with X comments
 */
export const Post = (props) => {
  console.log('post body: ', props.postBody)
  return (
    <li className='list-item'>
      <a classname='post-link' href={props.postBody.data.url}>{props.postBody.data.title}</a>
      <div className='post-body'>
        <div className='post-body-item'>{`by ${props.postBody.data.by}`}</div>
        <div className='post-body-item'>{`Posted at ${props.postBody.data.time}`}</div>
        <div className='post-body-item'>{`${props.postBody.data.descendants} comments`}</div>
      </div>
    </li>
  )
}