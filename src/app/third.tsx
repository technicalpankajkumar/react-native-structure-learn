

import { View } from 'react-native'
import React from 'react'
import { AppText } from '@/components/AppText'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { Button } from '@/components/Button'


const Third = () => {
    const params = useLocalSearchParams<{ name?: string }>();
    return (
        <View className="justify-center flex-1 p-4 bg-blue-200">
            <AppText center size="heading" bold>
                Third Screen
            </AppText>
            <AppText center className='text-blue-700 font-semibold '>
                Thank For Visiting {params?.name}
            </AppText>
            <Button title="Go to back screen" onPress={()=>router.back()} theme='secondary'/>
        </View>
    )
}

export default Third
