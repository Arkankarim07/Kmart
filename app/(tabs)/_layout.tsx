import { Tabs } from 'expo-router'
import { BadgePercent, CircleUser, House, MessageCircleMore } from 'lucide-react-native'

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#000000',
            }}
        >
            <Tabs.Screen
                name="Index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <House size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="Promo"
                options={{
                    headerShown: false,
                    title: 'feed',
                    tabBarIcon: ({ color }) => <BadgePercent size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="Chat"
                options={{
                    headerShown: false,
                    title: 'feed',
                    tabBarIcon: ({ color }) => <MessageCircleMore size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    headerShown: false,
                    title: 'feed',
                    tabBarIcon: ({ color }) => <CircleUser size={24} color={color} />,
                }}
            />
        </Tabs>
    )
}