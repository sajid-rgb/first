import React,{useState,useContext} from 'react'
import {View,Text,TextInput,StyleSheet,Button} from "react-native"
import {AuthContext} from "../../../App"
import {TextArea,PostTitle,PostSubmitButton,PostCaption} from "./CreatePostsStyle"
import firebase from "../../firestore"
export const CreatePosts=({navigation})=>{
  const {setIsAuthenticated,loggedInUser,setLoggedInUser} = useContext(AuthContext)
  const [posts,setPosts] = useState({
    des:"",
    title:""
  })
  const handleSetText=(key,text)=>{
    const newPosts = {...posts}
    newPosts[key] = text
    setPosts(newPosts)

  }
  const handleChangeText=(text,name)=>{
    if(name==='des'){
      handleSetText('des',text)
      
    }
    if(name==='title'){
      handleSetText('title',text)
    }

  }
const handleAddPosts=async()=>{
  if(posts.title==="" ){
    
    alert("Please Fill all the field correctly")

  }
  else{
    try{
      await firebase.db.collection("posts").add({title:posts.title,des:posts.des,authorEmail:loggedInUser.email})
      navigation.navigate("Home");
    }
    catch(err){
      console.log(err)
    }
    
  }
  

}
  

  return(
    <View style={{marginTop:70}}>
    <PostCaption> Write your blog here </PostCaption>
   <PostTitle   multiline={true}
        value={loggedInUser.email} />


<PostTitle   multiline={true}
    
        placeholder="Your Blog Title"
        onChangeText={(text)=>handleChangeText(text,"title")}
    />
        <TextArea  multiline={true}
        placeholder="Your Main Blog..."
        onChangeText={(text)=>handleChangeText(text,"des")}
    />
    <PostSubmitButton>
  <Button title="Submit" color="black" onPress={handleAddPosts}/>
    </PostSubmitButton>

   </View>
  )
}
