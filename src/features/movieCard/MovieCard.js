import { StyleSheet, View, Image } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'

import { space } from '../../utils/theme/spacing'
import ListItem from '../../components/ListItem'

const MovieCard = ({ Movie }) => {
  const {
    title = 'Some Restaurant',
    image = 'https://e-food.news/wp-content/uploads/2018/08/%D7%A0%D7%90%D7%A4%D7%99%D7%A1-620x381.jpg',
    releaseYear = 2010,
    rating = 8.3,
    genre = ['Action', 'Drama', 'Sci-Fi'],
  } = Movie

  return (
    <>
      <Card style={styles.container} elevation={4}>
        <View style={styles.cardInner}>
          <View style={styles.info}>
            <ListItem title="שם" desc={title} icon="information" />
            <ListItem title="דירוג" desc={rating} icon="star" />
            <ListItem title="ג׳אנרים" desc={genre} icon="tag" />
            <ListItem title="שנת יצור" desc={releaseYear} icon="calendar" />
          </View>
          <Image style={styles.cover} source={{ uri: image }} />
        </View>
      </Card>
    </>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  container: {
    margin: space[3],
    marginBottom: space[3],
  },
  cardInner: {
    flexDirection: 'row',
  },
  cover: {
    flex: 2,
    borderRadius: 5,
    justifyContent: 'center',
    margin: space[2],
    marginLeft: space[0],
  },
  info: {
    flex: 3,
  },
})
