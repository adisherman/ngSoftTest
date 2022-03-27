import uuid from 'react-native-uuid'

export const getMoviesFromApi = async () => {
  try {
    const response = await fetch(
      'https://api.androidhive.info/json/movies.json',
    )
    const movies = await response.json()
    movies.sort((a, b) => {
      if (a.rating > b.rating) return -1
      if (a.rating < b.rating) return 1
      return 0
    })
    return movies
  } catch (error) {
    console.error(error)
  }
}

export const addIdToMovie = movies => {
  const mappedMovies = movies.map(movie => {
    const genreString = movie.genre.join(', ')
    return {
      ...movie,
      genre: genreString,
      id: uuid.v4(),
    }
  })

  return mappedMovies
}
