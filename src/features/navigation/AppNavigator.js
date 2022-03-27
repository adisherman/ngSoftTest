import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import React from 'react'

import Movies from '../../screens/Movies'
import MovieInfo from '../../screens/MovieInfo'
import { MoviesContextProvider } from '../../services/MovieContext'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <MoviesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Movies"
          screenOptions={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerShown: false,
          }}>
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Movie Info" component={MovieInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoviesContextProvider>
  )
}

export default AppNavigator
