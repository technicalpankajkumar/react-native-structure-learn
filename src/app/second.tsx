import { View, Text } from 'react-native'
import React from 'react'
import { AppText } from '@/components/AppText'
import { Button } from '@/components/Button'
import { Link } from 'expo-router'

const second = () => {
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
          <AppText center size="heading" bold>
            Second Screen
          </AppText>
          <Link href={{pathname:"/third",params:{name:"Pankaj"}}} push asChild>
           <Button title="Go to third screen"/>
          </Link>
        </View>
  )
}

export default second