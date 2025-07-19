import { Stack, useFocusEffect, useRouter, useSegments } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import "../global.css";
export default function RootLayout() {
  const [loading, setLoading] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  const router = useRouter()
  const segmen = useSegments()

  useFocusEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('jwt_token')
      setIsLogin(!!token)
      setLoading(false)
    }

    checkAuth()
  })

  useEffect(() => {
    if (!loading) {
      const inAuthGroup = segmen[0] === "(auth)"

      if (!isLogin && !inAuthGroup) {
        router.replace("/(auth)/Login")
      }

      if (isLogin && inAuthGroup) {
        router.replace("/(tabs)/Index")
      }
    }
  })
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
