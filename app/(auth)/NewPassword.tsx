import { Link, useLocalSearchParams, useRouter } from 'expo-router';
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
const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { email, otp } = useLocalSearchParams();
    const router = useRouter()
    const handleResetPassword = async () => {
        if (!password || !confirmPassword) {
            Alert.alert("Error", "Please fill in all fields.");
            return
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Password and confirm password do not match.");
            return
        }

        try {
            const res = await api.post('/reset-password', {
                email,
                otp,
                new_password: password,
            })

            if (res.status === 200) {
                router.push("/(auth)/Login")
            }
        } catch (error: any) {
            Alert.alert("Gagal", error.response?.data?.error || "Server error");
        }
    };
    return (
        <UseFont>
            <SafeAreaView className="flex-1 bg-white">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex-1"
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className="flex-1 ">
                            <View>
                                <View className="h-[160px] rounded-br-[60px] rounded-bl-[60px] overflow-hidden">
                                    <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
                                        <ImageBackground
                                            source={require('../../assets/images/logo.png')}
                                            className="w-[120px] h-[120px]"
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>

                                <View className="items-center mt-[15px]">
                                    <View className="flex-row">
                                        <Text className="text-4xl font-manrope_bold text-[#C4E703] leading-[48px]">
                                            Set{' '}
                                        </Text>
                                        <Text className="text-4xl font-manrope_bold leading-[48px]">
                                            a new password
                                        </Text>
                                    </View>
                                    <Text className="text-center mt-2 text-gray-600">
                                        Your new password must be diffrent
                                        from previous password
                                    </Text>
                                </View>

                                <View className="mt-[35px] gap-[39px] px-[24px]">
                                    <View>
                                        <Input
                                            label="Password"
                                            placeholder="Masukkan password kamu"
                                            value={password}
                                            onchangeText={(text: string) => {
                                                setPassword(text);
                                                setPasswordError('');
                                            }}
                                            secureEntry
                                        />
                                        {
                                            passwordError && (
                                                <Text className="text-red-500">{passwordError}</Text>
                                            )
                                        }
                                    </View>
                                    <Input
                                        label="Confirm Password"
                                        placeholder="Konfirmasi password kamu"
                                        value={confirmPassword}
                                        onchangeText={setConfirmPassword}
                                    />
                                </View>
                            </View>

                            {/* FOOTER */}
                            <View className="mt-[30px] items-center px-[24px] pb-[30px]">
                                <Button
                                    title="Reset Password"
                                    onPress={() => handleResetPassword()}
                                    styleButton="bg-[#C4E703]"
                                    icon={{}}
                                />

                                <Text className="mt-[10px] opacity-50">

                                    <Link href={"/(auth)/Login"} className="text-blue-600">Back to Login</Link>
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </UseFont>
    )
}

export default NewPassword