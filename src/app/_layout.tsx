import { Slot, Stack } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack >
        {/* <Stack.Screen name="employee/[department]/[id]" options={{ title: "Employee Details" }} />  */} 
        {/* use for static given title of particular screens */}
        <Stack.Screen name={"second"}  options={{animation:"fade"}}/>
        </Stack>
    </React.Fragment>
  );
}


// export const unstable_settings = {
  //   initialRouteName: "index",   
// }
// screen options
// screen option in stack navigator
// export const screenOptions = {
//   headerShown: false,
//   headerStyle: {
//     backgroundColor: "#f4511e",
//   },
//   headerTintColor: "#fff",
//   headerTitleStyle: {  
//     fontWeight: "bold",
//   },
//   headerTitleAlign: "center",
//   headerBackTitle: "Back",
//   headerBackTitleStyle: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   headerBackImage: () => (
//     <Image
//       source={require("../assets/back.png")}
//       style={{ width: 20, height: 20 }}
//     />
//   ),
//   headerBackImageTintColor: "#fff",
//   headerBackTitleVisible: true,
//   headerBackTitleStyle: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   headerBackButtonMenuEnabled: true,

//   headerBackButtonMenuVisible: true,
//   headerBackButtonMenuStyle: {
//     backgroundColor: "#f4511e",
//     borderRadius: 10,
//     padding: 10,
//   },
//   headerBackButtonMenuTitle: "Back",
//   headerBackButtonMenuTitleStyle: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
//   headerBackButtonMenuIcon: () => (
//     <Image 
//       source={require("../assets/back.png")}
//       style={{ width: 20, height: 20 }}
//     />
//   ),
//   headerBackButtonMenuIconTintColor: "#fff",
//   headerBackButtonMenuIconStyle: {
  //     width: 20,
  //     height: 20,
  //   },
//   headerBackButtonMenuIconVisible: true,
//   headerBackButtonMenuIconTitle: "Back",
//   headerBackButtonMenuIconTitleStyle: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
//   headerBackButtonMenuIconTitleVisible: true,
//   headerBackButtonMenuIconTitleStyle: {
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
// }


//screen animation
{/* <Stack.Screen name={"screen-name"}  options={{animation:"fade_from_bottom"}}/> */}
