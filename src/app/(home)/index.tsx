import { View } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";
import { Link, router, useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  const newRouter = useRouter()
  const canGoBack = newRouter.canGoBack();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold>
        Home Index Screen
      </AppText>
        <Button title="Go to category screen" onPress={()=>router.push("/category")}/>
        <Button title="Go to product screen" onPress={()=>router.push("/product")}/>
        <Button title="Go to second screen" onPress={()=>router.push("/second")}/>
        {
          canGoBack && <Button title="Go to Back" onPress={()=>newRouter.back()} theme="secondary" />
        }
    </View>
  );
}
