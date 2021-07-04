import React,{useEffect,useState,useContext} from 'react'
import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity} from "react-native"
import {AuthContext} from "../../App"
import {TextArea,PostTitle,PostSubmitButton,PostCaption,Link} from "../CreatePosts/CreatePosts/CreatePostsStyle"
import {LinkText} from '../Home/HomePage/SeeDetails/SeeDetals'
import firebase from "../firestore"
export const UpdatePosts = ({navigation})=>{
  const [post,setPost] = useState({})
  const {id,loggedInUser} = useContext(AuthContext)
  const handleGetPosts=async(id)=>{
    const reference= firebase.db.collection("posts").doc(id)
    const doc = await reference.get()
    const post = doc.data()
    setPost({...post,id:doc.id})
}

const handleChange=(text,name)=>{
  setPost({ ...post, [name]: text });

}

const handleUpdateNow=async()=>{
  const newPost = firebase.db.collection("posts").doc(post.id)
  await newPost.set({
    title:post.title,
    des:post.des,
    authorEmail:loggedInUser.email
  })
  navigation.navigate("Home")
  setPost({})
}

  useEffect(()=>{
    handleGetPosts(id)
  },[])
  return(
    <View>
    <PostCaption>Update Your Blog </PostCaption>
    <PostTitle value={post.title}  onChangeText={(text)=>handleChange(text,"title")}/>
    <TextArea value={post.des}  onChangeText={(text)=>handleChange(text,"des")}/>
      <Button title="Update Now" onPress={handleUpdateNow}/>
   <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
    <Link>Go Home </Link>
    </TouchableOpacity>
    </View>
  )
}


