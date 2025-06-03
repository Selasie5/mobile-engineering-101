import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View>
      <Text>Contact</Text>
        <Link href="/">Back Home</Link>
    </View>
  )
}

export default Contact
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  }
})
