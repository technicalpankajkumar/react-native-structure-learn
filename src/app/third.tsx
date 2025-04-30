

import { View } from 'react-native'
import React from 'react'
import { AppText } from '@/components/AppText'
import { Link, useLocalSearchParams } from 'expo-router'
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
            <Link href={'/'} push asChild>
                <Button title="Go to home screen" theme='secondary'/>
            </Link>

            <Link href={'/'} dismissTo asChild>
                <Button title="Go to Dismiss to home screen" theme='secondary'/>
            </Link>

            <Link href={'/second'} replace asChild>
                <Button title="Go to Replace to second screen" theme='secondary'/>
            </Link>

            <Link href={'/employee/1'} asChild>
                <Button title="Go to Employee 1" />
            </Link>
            <Link href={'/employee/2'} asChild>
                <Button title="Go to Employee 2" />
            </Link>
            <Link href={'/employee/3'} asChild>
                <Button title="Go to Employee 3" />
            </Link>
            <Link href={{pathname:"/employee/[id]",params:{id:"4"}}} asChild>
                <Button title="Go to Employee 4" />
            </Link>

            <Link href={{pathname:"/employee/[department]/[id]",params:{id:"4",department:"Data Science"}}} asChild>
                <Button title="Go to check nested router Employee by department" />
            </Link>
            <Link href={{pathname:"/employee/Development/7"}} asChild>
                <Button title="Go to check nested Route employee by id 7" />
            </Link>
        </View>
    )
}

export default Third

// push
// index -> second -> third -> index-> second ....

// dismissTo
// index -> second -> third -> dismissTo(index)
// index

// dismissTo
// index -> second -> third -> index -> second -> third -> dismissTo(index)
// index -> second -> third -> index

// replace 
// index -> second -> replace(second)
// index -> second -> second

// passing params between screen
//<Link href={{pathname:"/",params:{name:"Pankaj"}}} ></Link>
// same is router.push({pathname:"/",params:{name:"Pankaj"}})
// access data in refer location 
// const params = useLocalSearchParams<{name?:string}>()

// dynamic routes
// structure => folder/[id].tsx
// <Link href={"/folder/id"} >child</Link>

// nested dynamic routes 
// structure => employee/[department]/[id].tsx
// <Link href={"/employee/department/id"} >child</Link>
// <Link href={"/employee/[department]/[id]"} >child</Link>
// <Link href={{pathname:"/employee/[department]/[id]",params:{id:"1",name:"pankaj",department:"Development"}}} >child</Link>
// <Link href={{pathname:"/employee/[department]/[id]",params:{id:"1",name:"pankaj", department:"Human Resource"}}} asChild>