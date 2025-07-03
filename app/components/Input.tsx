import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
const Input = ({ label, placeholder, value, onchangeText, style, secureEntry = false }) => {
  const [isSecure, setIsSecure] = useState(secureEntry);
  return (
    <View>
      {label && (
        <Text className="text-base  font-manrope_bold">
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onchangeText}
        secureTextEntry={isSecure}
        onChangeText={onchangeText}
        className={`p-4 rounded-full border border-gray-400 mt-[8px] ${style}`}
      />

      {secureEntry && (
        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          className='absolute right-4 top-12'
        >
          {isSecure ? (
            <EyeOff size={20} color="#999" />
          ) : (
            <Eye size={20} color="#999" />
          )
          }

        </TouchableOpacity>
      )}
    </View>
  )
}

export default Input