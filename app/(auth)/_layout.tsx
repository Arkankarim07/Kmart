import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right', // bisa diganti: fade, slide_from_bottom, none
            }}
        />
    );
}
