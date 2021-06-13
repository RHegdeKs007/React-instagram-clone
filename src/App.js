import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { db,auth }   from './firebase'; 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';


function getModalStyle() {
  const top = 50 ; //for the signup/signin popup
  const left = 50; 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {                    //style for modal
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);
  const [openSignIn,setOpenSignIn] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [user,setUser] = useState(null);


  useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if(authUser){
        console.log(authUser);
        setUser(authUser);
    }else {
        setUser(null)
    }
  })
  return () => {
    unsubscribe();
  }
  
}, [user, username]);

useEffect(() => {
  db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({id: doc.id,
        post: doc.data()})));
  })
 
}, []);

const signUp = (event) => {
  event.preventDefault();

  auth.createUserWithEmailAndPassword(email,password)
  .then((authUser) => {
     return authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) => alert(error.message));

  setOpen(false); //closes modal after pressing signup
}
const signIn = (event) => {
  event.preventDefault();

  auth
  .signInWithEmailAndPassword(email,password)
  .catch((error) => alert(error.message))

  setOpenSignIn(false); //closes modal after pressing signin
}


  return (
    <div className="App">

     <ImageUpload />


       <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
              <center>
                 <img 
                    className="app__headerimage"
                    src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"
                    alt="hi" />
               </center>     
                  <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />      
                  <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />   
                   <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                   <Button onClick={signUp}>Signup</Button>
              
          </form>
    </div>
        
      </Modal>

      <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
      >
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
              <center>
                 <img 
                    className="app__headerimage"
                    src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"
                    alt="hi" />
               </center>     
                    
                  <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />   
                   <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
                   <Button onClick={signIn}>SignIn</Button>
              
          </form>
    </div>
        
      </Modal>
        <div className="app__header">
        <img 
                className="app__headerimage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="" />

        </div>
        {user ?(
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ): (
          <div className="app__loginContainer">
              <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
          
        )}
      
        
        <h1>Instagram 🔗 !</h1>
       {
         posts.map(({id, post}) => (
              <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
         ))
       }

        {/*header */}


        {/* posts*/}
        {/* posts*/}
    </div>
  );
}

export default App;
