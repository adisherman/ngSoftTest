import { StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { MoviesContext } from '../services/MovieContext'
import Search from '../features/search/Search'
import { BackgroundImageView } from '../components/styleComponents/styleContainer'
import MovieCard from '../features/movieCard/MovieCard'
import Layout from '../components/Layout'

import SplashScreen from 'react-native-splash-screen'

const Movies = ({ navigation }) => {
  const { movies, isLoading, error } = useContext(MoviesContext)

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide()
    }
  }, [])

  return (
    <BackgroundImageView>
      <Layout />
      <Search />
      <FlatList
        data={movies}
        renderItem={item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Movie Info', {
                  Movie: item.item,
                })
              }>
              <MovieCard Movie={item.item} />
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
      />
    </BackgroundImageView>
  )
}

export default Movies

const styles = StyleSheet.create({})
