import React, { useEffect, createContext, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Tabs } from "./components/Tabs/Tabs"
import { SignUp } from "./components/LogIn/LogIn/SignUp"
import { LogIn } from "./components/LogIn/LogIn/LogIn"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { UpdatePosts } from "./components/UpdatePosts/UpdatePosts"
import { SeeDetals } from "./components/Home/HomePage/SeeDetails/SeeDetals"
import { AppMainDiv } from './AppStyle/AppStyle'
const Stack = createStackNavigator();
export const AuthContext = createContext()
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({ email: "" })
  const [id, setId] = useState({})

  return (
    <AuthContext.Provider value={{ setIsAuthenticated, loggedInUser, setLoggedInUser, setId, id }} >
      <AppMainDiv>
        <NavigationContainer>

          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {
              isAuthenticated ? <Stack.Screen name="Home" component={Tabs} /> : <Stack.Screen name="login" component={LogIn} />
            }

            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="more" component={SeeDetals} />
            <Stack.Screen name="update" component={UpdatePosts} />

          </Stack.Navigator>
        </NavigationContainer>

      </AppMainDiv>
    </AuthContext.Provider>


  );
}


