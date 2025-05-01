import { View, Text } from 'react-native'
import React from 'react'
import { AppText } from '@/components/AppText'
import { Button } from '@/components/Button'
import { Link, router, useRouter } from 'expo-router'

const second = () => {
  const newRouter = useRouter()
  const canGoBack = newRouter.canGoBack()
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
          <AppText center size="heading" bold>
            Second Screen
          </AppText>
          <Link href={{pathname:"/second/help",params:{name:"Pankaj"}}} push asChild>
           <Button title="Go to help screen"/>
          </Link>
          <Link href="/second/support" push asChild>
           <Button title="Go to support screen"/>
          </Link>
            <Link href="/fourth" push asChild>
              <Button title="Go to Fourth screen"/>
            </Link>
{
  canGoBack && <Button title="Go to Back" onPress={()=>newRouter.back()} theme="secondary" />
}
          
        </View>
  )
}

export default second