import { List } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import React from 'react'

import { space } from '../utils/theme/spacing'
import { colors } from '../utils/theme/colors'

const ListItem = props => {
  const { title, desc, icon } = props

  return (
    <List.Item
      style={styles(props).listInfo}
      titleStyle={styles(props).title}
      descriptionStyle={styles(props).desc}
      title={title}
      description={desc}
      right={props => (
        <List.Icon {...props} icon={icon} color={colors.brand.primary} />
      )}
    />
  )
}

export default ListItem

const styles = props =>
  StyleSheet.create({
    listInfo: {
      margin: space[0],
      marginTop: props.infoCard ? space[1] : space[0],
      marginBottom: props.infoCard ? space[1] : space[0],
      padding: props.infoCard ? space[2] : space[1],
      backgroundColor: props.infoCard
        ? 'rgba(255, 255, 255, 0.8)'
        : 'transparent',
      fontSize: props.infoCard ? 20 : 15,
    },
    title: {
      textAlign: 'right',
      fontSize: props.infoCard ? 20 : 15,
    },
    desc: {
      fontSize: props.infoCard ? 18 : 13,
    },
  })
