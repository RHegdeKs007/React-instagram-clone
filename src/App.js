import React, { useState } from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [posts,setPosts] = useState([{
    username:"RK" ,
    caption:"Psych",
    imageUrl:"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },{
      username:"Dhananjay",
      caption:"peace",
      imageUrl:"https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  },{
    username:"RxSuri", 
    caption:"seas the day",
     imageUrl:"https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }
  ]);



  return (
    <div className="App">
        <div className="app__header">
            <img 
              className="app__headerimage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="" />

        </div>
        <h1>Instagram 🔗 !</h1>
       {
         posts.map(post => (
              <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
         ))
       }

        {/*header */}


        {/* posts*/}
        {/* posts*/}
    </div>
  );
}

export default App;
