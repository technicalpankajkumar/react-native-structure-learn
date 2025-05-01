import { View, Text } from 'react-native'
import React from 'react'
import { Stack, usePathname } from 'expo-router'

const layout = () => {
  const pathname = usePathname();
  return (
    <Stack screenOptions={{
      animation: pathname.startsWith('/second') ? 'default' :'none'
     
    }}
   
    >
        <Stack.Screen name="index" options={{ title: 'Second' }} />
        <Stack.Screen name="help" options={{ title: 'Help' }} />
        <Stack.Screen name="support" options={{ title: 'Support' }} />
    </Stack>
  )
}

export default layout