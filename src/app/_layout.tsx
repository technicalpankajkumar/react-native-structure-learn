import { Slot, Stack, Tabs } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs screenOptions={{
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#000",
        tabBarShowLabel:false,
        tabBarBackground:()=>(<View className="bg-[#3C999E] h-16 w-full rounded-t-3xl shadow-lg absolute bottom-0" />)}}
        backBehavior="order"
        >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color ,size,focused}) => (<AntDesign name="home" size={24} color={color} />)
          }}
          />
          <Tabs.Screen 
          name="second"
          options={{
            title:"Second",
            popToTopOnBlur:true, // this will remove the tab bar persistance route
            headerShown:false,
            tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="server-security" size={24} color={color} />)
          }}
          />
          <Tabs.Screen
          name="third"
          options={{
            title:"Third",
            headerShown:true,
            // href:null, // this will remove the tab bar in tabs screen
            tabBarIcon:({color,size})=>(<FontAwesome name="product-hunt" size={24} color={color} />)
          }}
          />
          <Tabs.Screen
          name="fourth"
          options={{
            title:"Blogger",
            tabBarBadge:"29",
            tabBarBadgeStyle:{
              backgroundColor:"#fff",
              color:"#000",
              fontSize:10
            },
            headerShown:true,
            tabBarIcon:({color,size})=>(<FontAwesome5 name="blogger" size={24} color={color} />)
          }}
          />
        </Tabs>
    </React.Fragment>
  );
}
