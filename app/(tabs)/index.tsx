import { useRouter } from "expo-router";
// import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  //   const [isReady, setIsReady] = useState(false)

  // useEffect(() => {
  //   // Delay 1 tick untuk memastikan layout sudah mount
  //   const timeout = setTimeout(() => {
  //     setIsReady(true)
  //   }, 0)

  //   return () => clearTimeout(timeout)
  // }, [])

  // useEffect(() => {
  //   if (isReady) {
  //     router.replace('/(auth)/CheckEmail')
  //   }
  // }, [isReady])
  const router = useRouter();
  return (
    <View>
      <Text className="text-3xl text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <Button onPress={() => router.push("/(auth)/Login")} title="Open modal" />
    </View>
  );
}
