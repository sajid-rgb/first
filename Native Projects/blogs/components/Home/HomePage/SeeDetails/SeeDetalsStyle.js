import styled from 'styled-components'
import React from "react"
import {Text,View,TextInput} from 'react-native'

export const MainSection = styled.View`
text-align:center;
margin-top:100px;
background-color:whiteSmoke;
box-shadow:1px 1px 2px grey;
border:1px solid black
border-radius:5px;
display:flex;
align-items:center;
justify-content:'center;
padding:10px;
`

export const TitleText=styled.Text`
font-weight:bold;
font-size:25px;
color:green;
`
export const DetailsText=styled.Text`
font-weight:normal;
font-size:20px;
color:black;
`
export const LinkText=styled.Text`
font-weight:normal;
font-size:15px;
color:blue;
`