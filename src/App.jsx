import React, { useEffect, useState } from "react";
import { getPosts } from '../utils/api';
import axios from 'axios';
import { Feed } from './components/Feed';

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts('top')
    .then(data => setPosts(data))
  }, [])
  

  return (
    <div>
      <button onClick={() => {console.log('posts in state: ', posts)}}>Click Me</button>
      <div>Hello World</div>
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
//   }

//   render() {
//     return (
//       <Feed posts={this.state.posts.bind(this)} loading={this.props.loading.bind(this)}/>
//     )
//   }


//   componentDidMount() {
//     getPosts('top')
//     .then(
//       this.setState({
//         loading: false
//       })
//     )
//   }
// }

export default App;