import { StyleSheet, } from 'react-native'
import {  Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    
      // <Stack/>
      <Stack >
        <Stack.Screen name='index' options={{
          title:"Test App"
        }}>

        </Stack.Screen>
      </Stack>
    
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})
