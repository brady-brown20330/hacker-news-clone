import React, { useEffect, useState } from "react";
import { getPosts } from '../utils/api';
import axios from 'axios';
import { Feed } from './components/Feed';

// const App = () => {
//   const [posts, setPosts] = useState(null)

//   useEffect(() => {
//     getPosts('top')
//     .then(data => setPosts(data))
//   }, [])
  
//   return (
//     <div>
//       <button onClick={() => {console.log('posts in state: ', posts)}}>Click Me</button>
//       <Feed posts={posts}/>
//     </div>
//   )
// }

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      posts: null,
      loading: true
    }
  }

  render() {
    return (
     <div className='app'>
        <Feed posts={this.state.posts} loading={this.state.loading}/>
     </div>
    )
  }


  componentDidMount() {
    getPosts('top')
    .then(data => {
      this.setState({
        posts: data, 
        loading: false
      })
    }
    )
  }
}

export default App;