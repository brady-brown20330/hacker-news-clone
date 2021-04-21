import React, { useEffect, useState } from "react";
import { getPosts } from '../utils/api.js';
import axios from 'axios';
import {Feed} from './components/Feed.jsx';
import { Nav } from './components/Nav.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import '../public/App.css'

const App = () => {

  return (
    <Router>
      <div className='app'>
        <Nav />
          <Switch>
            <Route 
            exact 
            path='/' 
            render={() => <Feed type='top'/>}
            />
            <Route 
            path='/new' 
            render={() => <Feed type='new'/>}
            />
            <Route 
            render={() => <h1>404</h1>} 
            />
          </Switch> 
       </div>
    </Router>
    // <div className='app'>
    //   <New />
    // </div>
  )
}

export default App;