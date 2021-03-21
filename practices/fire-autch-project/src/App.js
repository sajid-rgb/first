import logo from './logo.svg';
import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import firebaseConfig from './FirebaseConfig/firebase.config';
import { useState } from 'react';
if(!firebase.apps.length)
{firebase.initializeApp(firebaseConfig)}
function App() {
  const [haveAccount,setHaveAccount] = useState(true)
  const [formShow,setFormShow] = useState(false)
  const [user,setUser] = useState({
    isSignedIn: false,
    displayName:'',
    password:'',
    email:'',
    photoURL: '',
    error:"",
    isShowMassage:false


  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const {displayName,email,photoURL} = res.user;
      const userSignedIn = {
        isSignedIn: true,
        displayName:displayName,
        email:email,
        photoURL: photoURL

      }
      setUser(userSignedIn)

      console.log(photoURL);
    })

  }
  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res=>{
      const userSignedOut = {
        isSignedIn: false,
        displayName:'',
        email:'',
        photoURL: ''
    }
    setUser(userSignedOut)
    

  }
    )
}
const handleChange = (e) =>{
  let isFormValid = true;
  if(e.target.name==='email'){
    isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
    

  }
  if(e.target.name==='password'){
    isFormValid =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/.test(e.target.value)
    
  }
  if(isFormValid){
    const userInfo={...user}
    userInfo[e.target.name] = e.target.value
    setUser(userInfo)
  }

}
const handleSubmit = (e) =>{
  if(user.password && user.email){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      const newUserInfo = {...user}
      newUserInfo.isShowMassage =true
      setUser(newUserInfo)

      

    })
    .catch(error=>{
      const errorCode = error.code;
    const errorMessage = error.message;
    const newUserInfo = {...user}
    newUserInfo.error = errorMessage
    newUserInfo.isShowMassage =false
    setUser(newUserInfo)
    })
  }
}
const handleEmailSignIn = () =>{
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  console.log(user);
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  console.log(errorCode);
});
}
const handleFbSignIn =()=>{
  firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    
    const credential = result.credential;

    // The signed-in user info.
    const user = result.user;
    console.log(user);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}
const accountCreation =()=>{
  setHaveAccount(!haveAccount)
  setFormShow(!formShow)
}

  return (
    <div className="App">
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleSignIn}>Sign In</button>
      }
      {
        user.isSignedIn&&<div> 
            <p>Welcome {user.displayName}</p>
            <h1>{user.email}</h1>
            <img  src={user.photoURL} />
        </div>
      }
      <button onClick={handleFbSignIn}>Facebook submit</button>
      <p>Name:{user.email}</p>
      <p>Password: {user.password}</p>


       <div>
                <input type="checkbox" onChange={accountCreation} name="" id=""/>
           <label htmlFor="I Have an Account " value="I have an Account" placeholder="I have an Account">I have an Account</label>
           </div>
      {
          haveAccount===true && formShow===false?  <form action="" onSubmit={handleSubmit}>

          <input type="text" name="displayName" id=""  onBlur={handleChange} placeholder="enter name"/>
         <br/>
           <input type="text" onBlur={handleChange} name="email" id="" placeholder="Enter email" required/><br/>
           <input type="password" onBlur={handleChange} name="password" id="" placeholder="Enter password" required/><br/>
           <input type="button" value="Submit" onClick={handleSubmit}/> </form> :haveAccount===false && formShow===true?<form action="" onSubmit={handleSubmit}>


 <input type="text" onBlur={handleChange} name="email" id="" placeholder="Enter email" required/><br/>
 <input type="password" onBlur={handleChange} name="password" id="" placeholder="Enter password" required/><br/>
 <input type="button" value="Log in" onClick={handleSubmit}/>
           
</form>:<p>Error</p>
                     

        }

      {
        user.isShowMassage ? <p>Success</p>:<p>{user.error}</p>
      }
      <button onClick={handleEmailSignIn}>Sign In</button>
    </div>
  );
}

export default App ;
