import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'green', tabBarShowLabel: false}}>
        <Tabs.Screen 
            name='Home/index'
            options={{
                title: 'Home',
                tabBarIcon: ({color}) => (
                    <Ionicons name='home' size={24} color={color} />
                )
            }}
        />
        <Tabs.Screen 
            name='favorites/index'
            options={{
                title: 'Favoritos',
                tabBarIcon: ({color}) => (
                    <Ionicons name='star-outline' size={24} color={color} />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout