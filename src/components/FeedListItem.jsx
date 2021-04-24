import React, { useEffect, useState } from "react";
import { ConvertDate } from "../../utils/convertDate.js";
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";
/**
 * EACH POST HAS:
 * post title (links to article)
 * subtext: post by USER on DATE with X comments
 */
export const FeedListItem = (props) => {
  console.log('post body: ', props.postBody)
  
  if (props.postBody.url) {
    return (
      <li className='list-item'>
        <a className='post-link' href={props.postBody.url}>{props.postBody.title}</a>
        <div className='post-body'>
          <div className='post-body-item'>{`by ${props.postBody.by}`}</div>
          <div className='post-body-item'>{`Posted ${ConvertDate(props.postBody.time)}`}</div>
          <div className='post-body-item'>{`${props.postBody.descendants} comments`}</div>
        </div>
      </li>
    )
  } else {
    return (
      <Link to={{
        pathname: '/post',
        state: {postBody: props.postBody}
      }}
      > POST COMP: {props.postBody.title}
      </Link>
    )
  }
}