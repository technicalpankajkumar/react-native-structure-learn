import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { router } from 'expo-router'

const support = () => {
  return (
    <View className='flex-1 px-4 justify-center'>
      <Text>support</Text>
      <Button title='Go to Help' onPress={() => router.push("/second/help")} />
    </View>
  )
}

export default support