


import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
const data = [
    { name: "Pankaj", id: 1, title: "Software Engineer", department: "Development" },
    { name: "Anjali", id: 2, title: "Product Manager", department: "Product" },
    { name: "Ravi", id: 3, title: "UI/UX Designer", department: "Design" },
    { name: "Sneha", id: 4, title: "Data Scientist", department: "Data Science" },
    { name: "Amit", id: 5, title: "DevOps Engineer", department: "Operations" },
    { name: "Priya", id: 6, title: "Quality Analyst", department: "Quality Assurance" },
    { name: "Rahul", id: 7, title: "Backend Developer", department: "Development" },
    { name: "Neha", id: 8, title: "Frontend Developer", department: "Development" },
    { name: "Vikas", id: 9, title: "Mobile App Developer", department: "Mobile Development" },
    { name: "Kiran", id: 10, title: "Cloud Architect", department: "Cloud" },
];
const EmployeeDepartmentWise= () => {
    const params = useLocalSearchParams<{ id?: string }>();

    const employees = data.find((employee) => employee.id === Number(params?.id));

  return (
    <View>
    <View className='bg-slate-300 p-4 flex-1'>
          <Text className='text-center text-2xl font-bold'>Employee Details</Text>
          <View>
            <Text>Id: {employees?.id}</Text>
            <Text>Name: {employees?.name}</Text>
            <Text>Title: {employees?.title}</Text>
            <Text>Department: {employees?.department}</Text>
        </View>
        </View>
    <View>
      <Text>{JSON.stringify(employees,null," ")}</Text>
    </View>
    </View>
  )
}

export default EmployeeDepartmentWise