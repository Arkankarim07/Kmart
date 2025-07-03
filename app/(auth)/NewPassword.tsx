import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Input from '../components/Input';
import UseFont from '../hooks/useFont';
const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
                                    <Input
                                        label="Password"
                                        placeholder="Masukkan password kamu"
                                        value={password}
                                        onchangeText={setPassword}
                                        secureEntry
                                    />
                                    <Input
                                        label="Confirm Password"
                                        placeholder="Masukkan email kamu"
                                        value={confirmPassword}
                                        onchangeText={setConfirmPassword}
                                    />
                                </View>
                            </View>

                            {/* FOOTER */}
                            <View className="mt-[30px] items-center px-[24px] pb-[30px]">
                                <Button
                                    title="Login"
                                    onPress={() => { }}
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