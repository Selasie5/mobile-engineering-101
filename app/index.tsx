import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Logo from "../assets/Logo.png"

const index = () => {
  return (
    <View style={styles.container}>
    
<Image source={Logo}/>

      
      <Text style={styles.title}>Reading List 1</Text>
      <Text style={{marginTop:10, marginBottom:30}}>Test</Text>
      <View style={styles.card}>
        <Text>Hello, this is a card</Text>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20
  },
  card:{
    backgroundColor: "#eee",
    padding:20,
    borderRadius:10,
    boxShadow:'0 2px 4px rgba(0,0,0,0.1)',
  },
 
  img:{
    resizeMode:'cover'
  }
})
