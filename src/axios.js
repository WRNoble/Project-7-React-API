// import React, { Component } from 'react'
// import axios from 'axios';

// class GetRequest extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             posts: []
//         }
//     }

//     componentDidMount(){
//         axios.get('https://roman-emperors-ga-api.herokuapp.com/')
//         .then(res => {
//             console.log (res)
//             this.setState({posts: Response.data})
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
    
//     render() {
//         const { posts } = this.state
//         return (
//             <div>
             
//                 {
//                     posts.map(posts => <div key={posts.id}>post.name</div>) :
//                     null
//                 }
//             </div>
//         )
//     }
// }

// export default GetRequest


