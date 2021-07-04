import styled from 'styled-components'
import React from "react"
import {Text,View,TextInput,Button} from 'react-native'

export const TextArea = styled(TextInput)`
height: 80px;
margin: 12px;
borderWidth: 2px;
borderColor: green;
placeholderTextColor: green;
border-radius:5px;
`
export const PostTitle=styled(TextInput)`
height: 40px;
margin: 12px;
border-width: 2px;
border-radius:5px;
border-color: green;
placeholderTextColor: 'green';

`
export const PostSubmitButton=styled.View`
width:100%;
display:flex;
align-items:center;
margin-left:0px;
justify-content:center;
color:red;
border-radius:10px;

`
export const PostCaption=styled.Text`
text-align:center;
font-size:30px;
font-weight:bold;
color:green;
`
export const Link = styled.Text`
font-weight:normal;
font-size:15px;
color:blue;

`