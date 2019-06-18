import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'


// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'

// create our app's navigation stack
const NavStack = createStackNavigator(
  {
    Loading: {screen: Loading},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
    Main: {screen: Main}
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(NavStack);

export default App
