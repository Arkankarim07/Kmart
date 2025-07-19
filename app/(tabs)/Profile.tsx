import { useRouter } from 'expo-router'
import * as securestore from 'expo-secure-store'
import { Banknote, Box, LogOut, Star, Truck } from 'lucide-react-native'
import React from 'react'
import { Alert, ImageBackground, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UseFont from '../hooks/useFont'

const Profile = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      securestore.deleteItemAsync('jwt_token')
      router.replace('/(auth)/Login')
    } catch (error) {
      console.log(error)
    }
}
    const confirmLogout = () => {
      Alert.alert(
        "Logout",
        "Apakah anda yakin ingin logout?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "OK", onPress: () => handleLogout()
          },
        ],
        { cancelable: false }
      )
    }
  
  return (
    <UseFont>
      <SafeAreaView>
        <ScrollView>

          <View className='mt-4 px-4 flex-row items-center justify-between'>
            <TouchableOpacity onPress={() => router.push('/(main)/ProfileAccount')} className='flex-row items-center gap-4'>
              <ImageBackground className='w-[56px] h-[56px] bg-gray-500 rounded-full'></ImageBackground>
              <Text className='font-manrope_bold text-xl'>Arkan Karim</Text>
            </TouchableOpacity>
            <Pressable onPress={confirmLogout}>
            <LogOut size={24} color="red" />
            </Pressable>
          </View>

          <View className='mt-8 bg-white w-full py-4 '>
            <View className="flex-row items-center justify-between px-4">
              <Text className="text-base font-manrope_bold">Transaksi</Text>
              <Text className="text-base  font-manrope_bold">{">"} </Text>
            </View>
            <View className='flex-row items-center mt-3 justify-around px-8'>
              <View className='flex-col items-center gap-1'>
                <Banknote size={24} color="black" />
                <Text className='text-sm font-manrope_medium'>Bayar</Text>
              </View>
              <View className='flex-col items-center gap-1'>
                <Box size={24} color="black" />
                <Text className='text-sm font-manrope_medium'>Diproses</Text>
              </View>
              <View className='flex-col items-center gap-1'>
                <Truck size={24} color="black" />
                <Text className='text-sm font-manrope_medium'>Dikirim</Text>
              </View>
              <View className='flex-col items-center gap-1'>
                <Star size={24} color="black" />
                <Text className='text-sm font-manrope_medium'>Penilaian</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </UseFont>
  )
}

export default Profile