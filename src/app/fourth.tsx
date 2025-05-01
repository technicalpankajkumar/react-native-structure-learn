
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { router } from 'expo-router'

const fourth = () => {
  return (
    <View>
      <Text>Fourth Screen</Text>
      <Button title="Go to Back" onPress={()=>router.back()} theme="secondary" />
    </View>
  )
}

export default fourth