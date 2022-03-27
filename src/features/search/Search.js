import { StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { colors } from '../../utils/theme/colors'
import { space } from '../../utils/theme/spacing'

import React, { useContext, useState } from 'react'

import { MoviesContext } from '../../services/MovieContext'

const Search = () => {
  const [searchKeyword, setSearchKeyWord] = useState('')

  const { onSearch } = useContext(MoviesContext)

  return (
    <View style={styles.container}>
      <Searchbar
        icon="movie"
        iconColor={colors.brand.primary}
        placeholder="search..."
        value={searchKeyword}
        onSubmitEditing={() => {
          onSearch(searchKeyword.trim())
        }}
        onChangeText={text => {
          setSearchKeyWord(text)
        }}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    paddingTop: space[1],
    paddingLeft: space[3],
    paddingRight: space[3],
    marginBottom: space[2],
  },
})
