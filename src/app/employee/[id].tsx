

import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

const data = [
    { name: "Pankaj", id: 1, title: "Software Engineer" },
    { name: "Anjali", id: 2, title: "Product Manager" },
    { name: "Ravi", id: 3, title: "UI/UX Designer" },
    { name: "Sneha", id: 4, title: "Data Scientist" },
    { name: "Amit", id: 5, title: "DevOps Engineer" },
    { name: "Priya", id: 6, title: "Quality Analyst" },
    { name: "Rahul", id: 7, title: "Backend Developer" },
    { name: "Neha", id: 8, title: "Frontend Developer" },
    { name: "Vikas", id: 9, title: "Mobile App Developer" },
    { name: "Kiran", id: 10, title: "Cloud Architect" },
];
const EmployeeDetails = () => {
    const params = useLocalSearchParams<{ id?: string }>();

    const employees = data.find((employee) => employee.id === Number(params?.id));
  return (
    <View className='bg-slate-300 p-4 flex-1'>
      {/* for dynamic title change any screens */}
      {/* <Stack.Screen options={{ title: employees?.title }} />  */}
      <Text className='text-center text-2xl font-bold'>Employee Details</Text>
      <View>
        <Text>Id: {employees?.id}</Text>
        <Text>Name: {employees?.name}</Text>
        <Text>Title: {employees?.title}</Text>
    </View>
    </View>
  )
}

export default EmployeeDetails