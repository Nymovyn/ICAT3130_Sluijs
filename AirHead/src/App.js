import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'


import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import Main from './Main'

const NavStack = createStackNavigator(
  {
    Loading: {screen: Loading},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
    Home: {screen: Home},
    Main: {screen: Main}
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(NavStack);

export default App
