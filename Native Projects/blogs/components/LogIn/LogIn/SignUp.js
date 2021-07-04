import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground } from "react-native"
import { MainLogInButton, InputContainer, InputIcon, Input, ButtonContainer } from "./LogInStyle/LogInStyle"
import firebase from "../../firestore";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../../../App'
export const SignUp = ({ navigation }) => {
  const { setIsAuthenticated, loggedInUser, setLoggedInUser } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const handleCreateAccount = () => {
    if (password === confirm) {
      firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate("login")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
        });
    }
    else {
      alert("Password is not matched")
    }
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
        <InputContainer>
          <InputIcon>
            <AntDesign name="lock" size={33} color="#666" />
          </InputIcon>
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            autoCorrect={false}
            onChangeText={(p) => setConfirm(p)}
          />
        </InputContainer>
        <ButtonContainer>
          <Button title="Sign Up" color="black" onPress={handleCreateAccount} />
          <TouchableOpacity >
            <Text style={{ color: 'blue' }} onPress={() => navigation.navigate("login")}>
              I have allready an account
            </Text>

          </TouchableOpacity>
        </ButtonContainer>
      </MainLogInButton>
    </ImageBackground>
  )
}
