import React,{useContext,useState,useEffect} from "react"
import {Text, View,StyleSheet,FlatList} from "react-native"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {LogoutButton,LogoutView} from "./LogoutStyle"
import firebase from '../../../firestore'
import {AuthContext} from "../../../../App"
import AntDesign from 'react-native-vector-icons/AntDesign';
export const Logout=({navigation})=>{
 const {setIsAuthenticated,loggedInUser,setLoggedInUser} = useContext(AuthContext)
  return (
     <LogoutButton>
               <AntDesign name="logout" size={70} color="red" />
                    <LogoutView>
       <Button onPress={()=>setIsAuthenticated(false)} title="Log Out" color="red" />
       </LogoutView>
</LogoutButton>
  )
}