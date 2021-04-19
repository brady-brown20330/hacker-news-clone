import React, { useEffect, useState } from "react";

export const Feed = (props) => {
console.log(props.posts)


if (props.loading == true) return <div>loading</div>

else {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li>{post.id}</li>
        )
      })}
    </ul>
  )
}
}