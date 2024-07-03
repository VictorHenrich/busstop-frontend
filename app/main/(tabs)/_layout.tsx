import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { type ITheme, useTheme } from 'native-base';


export default function MainLayout(): React.ReactElement{
    const { colors }: ITheme = useTheme();
    
    return (
        <Tabs 
            screenOptions={{
                header: ()=> null,
                tabBarActiveTintColor: `${colors.primary}`,
                tabBarActiveBackgroundColor: `${colors.secondary}`,
                tabBarInactiveBackgroundColor: `${colors.tertiary}`,
                tabBarInactiveTintColor: `${colors.secondary}`,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Página inicial",
                    tabBarIcon: (props) => <Ionicons name="home-sharp" size={24} color={props.color} />
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Configurações",
                    tabBarIcon: (props) => <MaterialIcons name="settings" size={24} color={props.color} />
                }}
            />
        </Tabs>
    )
}