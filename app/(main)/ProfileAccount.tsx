import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import UseFont from '../hooks/useFont'

const ProfileAccount = () => {
    return (
        <UseFont>
            <View className='mt-4 px-4 flex-col items-center gap-4 justify-center'>
                <ImageBackground
                    className='w-[76] h-[76] bg-gray-500 rounded-full' />
                <Text className='font-manrope_bold text-xl '>Ubah Foto Profil</Text>
            </View>
            <View className='mt-8 bg-white w-full py-4 px-4 gap-4 '>
                <Text className='text-xl font-manrope_bold '>Info Profil</Text>
                <View className='gap-8'>
                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">Nama</Text>
                        <Text className="text-black font-semibold flex-1">Arkan</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>

                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">Username</Text>
                        <Text className="text-black font-semibold flex-1">dadadwd@gafwa</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>
                </View>


            </View>
            <View className='mt-8 bg-white w-full py-4 px-4 gap-4 '>
                <Text className='text-xl font-manrope_bold '>Info Pribadi</Text>
                <View className='gap-8'>
                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">Email</Text>
                        <Text className="text-black font-semibold flex-1">tes@gmail.com</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>

                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">No Handphone</Text>
                        <Text className="text-black font-semibold flex-1">0812311231</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">Jenis Kelamin</Text>
                        <Text className="text-black font-semibold flex-1">Laki Laki</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-gray-500 w-[140px]">Tanggal Lahir</Text>
                        <Text className="text-black font-manrope_medium11 flex-1 opacity-50">Pilih Tanggal Lahir</Text>
                        <Text className="text-black font-semibold pl-2">{">"}</Text>
                    </View>
                </View>


            </View>
        </UseFont>
    )
}

export default ProfileAccount