import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const Button = ({
    title = string,
    onPress,
    disabled = false,
    loading = false,
    icon,
    styleButton,
    styleText
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            className={` w-full items-center rounded-full flex-row justify-center  ${styleButton}`}>

            {icon && <Image source={icon} className=" mr-[8px]" />}
            <Text className={`font-manrope_bold  py-[11px] text-xl ${styleText}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button