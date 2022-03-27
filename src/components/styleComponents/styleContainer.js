import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'

export const BackgroundImageView = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../../../assets/backgroundLogo.jpg')}>
        {props.children}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
})
