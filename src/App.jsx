import React, { useEffect, useState } from "react";
import { getPosts } from '../utils/api';
import axios from 'axios';
import { Feed } from './components/Feed';

const App = () => {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts('top')
    .then(data => setPosts(data))
    .then(setLoading(false))
  }, [])

const fetchPosts = (type) => {
  setLoading(true)
  getPosts(type)
  .then(data => {
    setPosts(data)
  })
  .then(setLoading(false))
}


/*  
change two buttons into dropdown?

// handles the dropdown changing based on the select className
const handleDropdownChange = (e) => {
  if (e.target.className == 'from-select') {
    setConvertFrom(getKeyByValue(currencyOptions, e.target.value))
  }
  else if (e.target.className == 'to-select') {
    setConvertTo(getKeyByValue(currencyOptions, e.target.value))
  }
}
*/
  return (
    <div className='app'>
      <div className='header'>
        <h1>Hacker News Clone</h1>
        <button className='feed-btn' onClick={() => {fetchPosts('top')}}>Top</button>
        <button className='feed-btn' onClick={() => {fetchPosts('new')}}>New</button>
      </div>
      <Feed posts={posts} loading={loading}/>
    </div>
  )
}

// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       posts: null,
//       loading: true
//     }
//     const fetchPosts = (type) => {
//       getPosts(type)
//       .then(data => {
//         this.setState({
//           posts: data
//         })
//       })
//     }

//   }

//   render() {
//     return (
//      <div className='app'>
//        <button onClick={() => {this.fetchPosts('new').bind(this)}}>New</button>
//         <Feed posts={this.state.posts} loading={this.state.loading}/>
//      </div>
//     )
//   }


//   componentDidMount() {
//     getPosts('top')
//     .then(data => {
//       this.setState({
//         posts: data, 
//         loading: false
//       })
//     })
//   }
// }

export default App;