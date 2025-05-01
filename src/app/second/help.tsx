

import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { router } from 'expo-router'

const help = () => {
  return (
    <View>
      <Text>help</Text>
      <Button title="Go to Back" onPress={()=>router.back()} theme="secondary" />
    </View>
  )
}

export default help