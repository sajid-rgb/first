import styled from 'styled-components'
import React from "react"
import {Text,View,TextInput} from 'react-native'

export const MainLogInButton = styled.View `
margin-top:150px;
`

export const InputContainer = styled.View `
display:flex;
flex-direction:row;
margin-left:15px
`
export const InputIcon=styled.View`
margin-top:30px;
`

export const Input = styled(TextInput)`
    height: 40px;
    margin-top:30px;
    border-width: 1px
    width:80%;
    margin-left:0px;
    border-color: gray;
    border-radius:5px;
    backgroundColr:'black';
`
export const ButtonContainer = styled.View`
  width:50%;
  display:flex;
  align-items:center;
  margin-left:70px;
  margin-top:20px;
  justify-content:center;
  color:red;

`