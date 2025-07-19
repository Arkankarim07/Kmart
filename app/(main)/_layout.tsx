import { Stack } from 'expo-router';

export default function MainLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                title: 'Change Profile',
                animation: 'slide_from_right', // bisa diganti: fade, slide_from_bottom, none
            }}
        />
    );
}
