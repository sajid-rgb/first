import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CreatePosts } from "../CreatePosts/CreatePosts/CreatePosts";
import { HomePage } from '../Home/HomePage/HomePage/HomePage';
import { Logout } from "../LogIn/LogIn/LogOut/Logout";
const Tab = createBottomTabNavigator();
export const Tabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          }
          else if (route.name === "posts") {
            iconName = "add";
          }
          else if (route.name === "profile") {
            iconName = "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: "orange",
        showLabel: false
      }}
    >
      <Tab.Screen name="home" component={HomePage} />

      <Tab.Screen name="posts" component={CreatePosts} />

      <Tab.Screen name="profile" component={Logout} />
    </Tab.Navigator>
  )
}