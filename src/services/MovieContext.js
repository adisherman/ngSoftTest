import { useState, createContext, useEffect, useContext } from 'react'

import { getMoviesFromApi, addIdToMovie } from './MovieService'

import React from 'react'

export const MoviesContext = createContext()

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const retrieveMovies = () => {
    setIsLoading(true)
    setMovies([])
    getMoviesFromApi()
      .then(result => {
        setIsLoading(false)
        setMovies(addIdToMovie(result))
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
      })
  }

  const onSearch = keyWord => {
    if (keyWord === '') return retrieveMovies()

    const SearchMovies = movies.filter(movie => {
      const key = keyWord.toLowerCase()
      const movieName = movie.title.toLowerCase()
      if (movieName.includes(key)) {
        return movie
      }
    })

    if (!!SearchMovies.length) {
      setMovies(SearchMovies)
    } else {
      setError('לא נמצאה התאמה')
    }
  }

  useEffect(() => {
    retrieveMovies()
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        error,
        onSearch,
      }}>
      {children}
    </MoviesContext.Provider>
  )
}
