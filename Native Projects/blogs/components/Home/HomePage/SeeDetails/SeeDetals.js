import React, { useContext, useEffect, useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { AuthContext } from '../../../../App'
import { MainSection, TitleText, DetailsText, LinkText } from './SeeDetalsStyle'
import firebase from '../../../firestore'
export const SeeDetals = ({ navigation }) => {
  const [blog, setBlog] = useState({})
  const { setIsAuthenticated, loggedInUser, setLoggedInUser, setId, id } = useContext(AuthContext)
  const handleGetPosts = async (id) => {
    const dbRef = firebase.db.collection("posts").doc(id)
    const doc = await dbRef.get()
    const user = doc.data()
    setBlog({ ...user, id: doc.id })
  }
  useEffect(() => {
    handleGetPosts(id)
  }, [])
  return (
    <MainSection>
      <TitleText>
        {blog.title}
      </TitleText>
      <DetailsText>
        {blog.des}
      </DetailsText>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <LinkText>Go Home </LinkText>
      </TouchableOpacity>

    </MainSection>
  )
}
