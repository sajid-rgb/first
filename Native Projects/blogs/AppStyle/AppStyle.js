import styled from 'styled-components'
import Constants from 'expo-constants';
import React from "react"
import {Text,View,TextInput} from 'react-native'

export const AppMainDiv = styled.View`
    flex: 1;
    justify-content: center;
    margin-top: ${Constants.statusBarHeight}px;
    padding: 8px;
`
