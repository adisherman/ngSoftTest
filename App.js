import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/features/navigation/AppNavigator'

const App = () => {
  return (
    <>
      <AppNavigator />
      <StatusBar barStyle={'dark-content'} />
    </>
  )
}

export default App
