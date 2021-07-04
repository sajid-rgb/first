import React, { useState, useEffect, useContext } from 'react'
import {
  View, Text, FlatList, ScrollView,
  Alert, TouchableOpacity, Image
} from "react-native"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { CardButton, CardText } from "./HomePageStyle"
import { AntDesign, FontAwesome } from 'react-native-vector-icons'
import { AuthContext } from "../../../../App"
import firebase from '../../../firestore'
export const HomePage = ({ navigation }) => {
  const { setIsAuthenticated, loggedInUser, setLoggedInUser, setId } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    firebase.db.collection("posts").onSnapshot((querySnapshot) => {
      const newPosts = [];
      querySnapshot.docs.forEach((doc) => {
        const { title, des, authorEmail } = doc.data()
        newPosts.push(
          {
            id: doc.id,
            title,
            des,
            authorEmail
          }
        )
        setPosts(newPosts)
      })
    })
  }, [])


  const Item = ({ item, props }) => {

    const onDelete = async (id) => {

      const dbRef = firebase.db.collection("posts").doc(id)
      await dbRef.delete()
    }
    const handleDelete = (id) => {
      Alert.alert(
        "", "Are you sure to remove it?", [
        { text: "yes", onPress: () => onDelete(id) },
        { text: "No", onPress: console.log("ok") },
      ],
        {
          cancelable: true
        }
      )
    }
    const handleNavigate = (id) => {
      navigation.navigate("update")
      setId(id)
    }
    const handleSeeMore = (id) => {
      navigation.navigate("more")
      setId(id)
    }
    return (
      <View >

        <Card>
          <Card.Image source={require('../../../../Images/blog4.jpg')} resizeMode="cover" />
          <Card.Title style={{ marginTop: 10 }}> {item.title}</Card.Title >
          <CardText> {item.des}</CardText>
          {
            loggedInUser.email === item.authorEmail ? <CardButton>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <AntDesign name="delete" size={33} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigate(item.id)}>
                <FontAwesome name="pencil-square-o" size={33} color="black" />
              </TouchableOpacity>
            </CardButton> : <TouchableOpacity onPress={() => handleSeeMore(item.id)}><Text style={{ textAlign: 'center', color: 'green' }}>See details...  </Text></TouchableOpacity>
          }
          <Text style={{ textAlign: "center", marginTop: 5 }}>Written By--{item.authorEmail}
          </Text >
        </Card>

      </View>
    )
  }

  return (
    <View>
      <FlatList data={posts} renderItem={Item} extraData={navigation} />
    </View>
  )
}