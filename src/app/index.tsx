import { View } from "react-native";
import { AppText } from "@/components/AppText";
import React from "react";
import { Link, router } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold>
        Index Screen
      </AppText>
      <Link href={'/second'} push asChild>
        <Button title="Go to second screen" />
      </Link>
      <Link href={'/third'} push asChild>
       <Button title="Go to third screen"/>
      </Link>
        <Button title="Go to fifth screen" onPress={()=>router.push('/(anything)/(fourth)/(fifth)')}/>
    </View>
  );
}
