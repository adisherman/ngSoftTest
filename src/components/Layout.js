import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Layout = () => {
  return <SafeAreaView style={styles.safeView} />
}

export default Layout

const styles = StyleSheet.create({
  safeView: {
    flex: 0,
  },
})
