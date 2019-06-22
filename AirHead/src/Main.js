import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'
import imgLogo from '../assets/logo1.png'

export default class Main extends React.Component {
  state = { currentUser: null }

  // componentDidMount() {
  //   const { currentUser } = firebase.auth()

  //   this.setState({ currentUser })
  // }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          width = {250}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={imgLogo}
        />
        <Text>
          Welcome to AirHead!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
})
