
import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'

const Layout = () => {
  return (
   <Redirect href={'/second'}/>
  )
}

export default Layout