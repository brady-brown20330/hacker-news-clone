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
  
  return (
    <div>
      <button onClick={() => {fetchPosts('top')}}>Top</button>
      <button onClick={() => {fetchPosts('new')}}>New</button>
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