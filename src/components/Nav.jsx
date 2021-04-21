import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

export const Nav = () => {  
  return (
    <div>
      <NavLink
        to='/'
        exact
        className='nav-link'>
          Top
      </NavLink>
      <NavLink
        to='/new'
        className='nav-link'>
          New
      </NavLink>
    </div>
  )
}