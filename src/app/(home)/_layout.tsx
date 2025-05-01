import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="category" options={{ title: 'Category' }} />
        <Stack.Screen name="product" options={{ title: 'Product' }} />
    </Stack>
  )
}

export default layout