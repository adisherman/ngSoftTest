import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { BackgroundImageView } from '../components/styleComponents/styleContainer'
import ListItem from '../components/ListItem'

const MovieInfo = ({ route }) => {
  const { Movie } = route.params

  const {
    title = 'Some Restaurant',
    image = 'https://e-food.news/wp-content/uploads/2018/08/%D7%A0%D7%90%D7%A4%D7%99%D7%A1-620x381.jpg',
    releaseYear = 2010,
    rating = 8.3,
    genre = ['Action', 'Drama', 'Sci-Fi'],
  } = Movie

  return (
    <BackgroundImageView>
      <Image style={styles.image} source={{ uri: image }} />
      <ListItem title="שם" desc={title} icon="information" infoCard />
      <ListItem title="דירוג" desc={rating} icon="star" infoCard />
      <ListItem title="ג׳אנרים" desc={genre} icon="tag" infoCard />
      <ListItem title="שנת יצור" desc={releaseYear} icon="calendar" infoCard />
    </BackgroundImageView>
  )
}

export default MovieInfo

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
  },
})
