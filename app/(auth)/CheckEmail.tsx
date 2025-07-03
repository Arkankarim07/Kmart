import { Link } from 'expo-router';
import React from 'react';
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import UseFont from '../hooks/useFont';
const CheckEmail = () => {
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
                                            Check{' '}
                                        </Text>
                                        <Text className="text-4xl font-manrope_bold leading-[48px]">
                                            your email
                                        </Text>
                                    </View>
                                    <Text className="text-center mt-2 text-gray-600">
                                        input the code that was sent
                                        to dummy@gmail.com
                                    </Text>
                                </View>

                                <View className="mt-[35px] gap-[39px] px-[24px]">

                                    <View>
                                        <OtpInput numberOfDigits={4} 
                                        theme={
                                            {
                                                containerStyle: {
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    height: 50
                                                },
                                                pinCodeContainerStyle: {
                                                    width: 60,
                                                }
                                            }
                                        }  />
                                    </View>
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

                                <Text className="mt-[10px] opacity-50">Dont get a code? Resend</Text>
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

export default CheckEmail