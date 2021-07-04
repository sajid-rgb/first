import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native"
import { MainLogInButton, InputContainer, InputIcon, Input, ButtonContainer } from './LogInStyle/LogInStyle'
import firebase from "../../firestore";
import { AuthContext } from "../../../App"
import AntDesign from 'react-native-vector-icons/AntDesign';
import blogBackgroun from '../../../Images/blog.png'
export const LogIn = ({ navigation }) => {
  const { setIsAuthenticated, loggedInUser, setLoggedInUser } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({})
  const handleSubmit = () => {

    firebase.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        const newUser = { ...user }
        newUser.email = user.user.email
        setLoggedInUser(newUser)
        setIsAuthenticated(true)

      })
      .catch((e) => {
        console.log(e)
        alert("error")
      })

  }


  return (

    <ImageBackground source={require('../../../Images/blog.png')} style={{ flex: 1 }}>
      <MainLogInButton>
        <InputContainer>
          <InputIcon>
            <AntDesign name="user" size={30} color="#666" />
          </InputIcon>
          <Input multiline={true}
            placeholder="Enter Email Adress "
            onChangeText={(u) => setEmail(u)}
          />
        </InputContainer>
        <InputContainer>
          <InputIcon>
            <AntDesign name="lock" size={33} color="#666" />
          </InputIcon>
          <Input
            placeholder="password"
            secureTextEntry
            autoCorrect={false}
            onChangeText={(p) => setPassword(p)}
          />
        </InputContainer>
        <ButtonContainer>
          <Button title="Sign In" color="black" onPress={handleSubmit} style={{ marginTop: 10 }} />
          <TouchableOpacity>
            <Text style={{ color: 'blue' }} onPress={() => navigation.navigate("signup")}>
              I have no account
            </Text>

          </TouchableOpacity>
        </ButtonContainer>
      </MainLogInButton>
    </ImageBackground>


  )
}

