import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const TrendingCard = ({title,artists,img}) => {
  return (
    <View style={styles.container}>
      <Image style={{height:160,width:160,borderRadius:5}} source={{uri:img}} />
      <Text style={styles.text} numberOfLines={1} >{title}</Text>
      <Text style={styles.subText} numberOfLines={1} >{artists}</Text>
    </View>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: 'hidden',
        minHeight:220,
        maxHeight:220,
        maxWidth:160,
        marginRight:20
    },
    text:{
        color: "white",
        marginTop:10,
        fontWeight:"800"
    },
    subText:{
        color: "gray",
        marginTop:4,
        fontWeight:"800"
    }
})