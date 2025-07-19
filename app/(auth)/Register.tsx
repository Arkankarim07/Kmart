import { Link, useRouter } from 'expo-router';
import * as secureStore from 'expo-secure-store';
import React, { useState } from 'react';
import {
    Alert,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../api/api';
import Button from '../components/Button';
import Input from '../components/Input';
import UseFont from '../hooks/useFont';

const Register = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (!email || !username || !password || !confirmPassword) {
            Alert.alert("Error", "Please fill in all fields.");
            return
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Password and confirm password do not match.");
            return
        }

        try {
            const res = await api.post('/register', {
                email,
                name: username,
                password
            })
            const data = res.data

            if (data.token) {
                await secureStore.setItemAsync("jwt_token", data.token)
                router.replace("/(tabs)/Index")
            } else {
                Alert.alert("Registrasi berhasil", "Silakan login");
                router.replace("/(auth)/Login");
            }
        } catch (error: any) {
            Alert.alert("Gagal", error.response?.data?.error || "Server error");
        }
    }
    return (
        <UseFont>
            <SafeAreaView className="flex-1 bg-white">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1"
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className="flex-1">
                            <View>
                                <View className="h-[160px] rounded-br-[60px] rounded-bl-[60px] overflow-hidden">
                                    <ImageBackground
                                        source={require('../../assets/images/login-bg.png')}
                                        className="flex-1"
                                        resizeMode="cover"
                                    >
                                        <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
                                            <ImageBackground
                                                source={require('../../assets/images/logo.png')}
                                                className="w-[120px] h-[120px]"
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View className="items-center mt-[15px]">
                                    <View className="flex-row">
                                        <Text className="text-4xl font-manrope_bold text-[#C4E703] leading-[48px]">
                                            Sign {' '}
                                        </Text>
                                        <Text className="text-4xl font-manrope_bold leading-[48px]">
                                            Up
                                        </Text>
                                    </View>
                                </View>

                                <View className="mt-[30px] gap-[25px] px-[24px]">
                                    <Input
                                        label="Email Address"
                                        placeholder="Masukkan email kamu"
                                        value={email}
                                        onchangeText={setEmail}
                                    />
                                    <Input
                                        label="Username"
                                        placeholder="Masukkan username kamu"
                                        value={username}
                                        onchangeText={setUsername}
                                    />
                                    <Input
                                        label="Password"
                                        placeholder="Masukkan Password kamu"
                                        value={password}
                                        onchangeText={setPassword}
                                        secureEntry
                                    />
                                    <Input
                                        label="Confirm Password"
                                        placeholder="Masukkan Password kamu"
                                        value={confirmPassword}
                                        onchangeText={setConfirmPassword}
                                        secureEntry
                                    />
                                </View>
                            </View>

                            {/* FOOTER */}
                            <View className=" items-center mt-[40px] px-[24px] ">
                                <Button
                                    title="Register"
                                    onPress={() => handleRegister()}
                                    styleButton="bg-[#C4E703]"
                                    icon={{}}
                                />

                                <Text className="mt-[10px] opacity-50">
                                    Not have account yet?
                                    <Link href={"/(auth)/Login"} className="text-blue-600"> Sign In</Link>
                                </Text>


                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </UseFont>
    )
}

export default Register