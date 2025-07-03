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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <UseFont>
      <SafeAreaView className="flex-1 bg-white">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-between">
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
                      Sign{' '}
                    </Text>
                    <Text className="text-4xl font-manrope_bold leading-[48px]">
                      In
                    </Text>
                  </View>
                  <Text className="text-center mt-2 text-gray-600">
                    Enter valid username & password to continue
                  </Text>
                </View>

                <View className="mt-[35px] gap-[39px] px-[24px]">
                  <Input
                    label="Email Address"
                    placeholder="Masukkan email kamu"
                    value={email}
                    onchangeText={setEmail}
                  />
                  <View>

                    <Input
                      label="Password"
                      placeholder="Masukkan Password kamu"
                      value={password}
                      onchangeText={setPassword}
                      secureEntry
                    />
                    <Link href={"/(auth)/ForgotPassword"} className='text-right text-blue-500'>Forgot Password?</Link>
                  </View>
                </View>
              </View>

              {/* FOOTER */}
              <View className="mt-[12px] items-center px-[24px] pb-[30px]">
                <Button
                  title="Login"
                  onPress={() => { }}
                  styleButton="bg-[#C4E703]"
                  icon={{}}
                />

                <Text className="mt-[10px] opacity-50">
                  Not have account yet?
                  <Link href={"/(auth)/Register"} className="text-blue-600"> Sign Up</Link>
                </Text>

                <View className="flex-row items-center my-6">
                  <View className="flex-1 h-[1px] bg-gray-300" />
                  <Text className="mx-2 text-gray-500 text-sm">or</Text>
                  <View className="flex-1 h-[1px] bg-gray-300" />
                </View>

                <Button
                  title="Login with Google"
                  onPress={() => { }}
                  styleButton="border border-gray-400 mb-[17px]"
                  icon={require('../../assets/images/Google.png')}
                />

                <Button
                  title="Login with Facebook"
                  onPress={() => { }}
                  styleButton="border border-gray-400"
                  icon={require('../../assets/images/facebook.png')}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </UseFont>
  );
};

export default Login;
