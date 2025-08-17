import { Text } from 'react-native'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {

    const navigation = useNavigation();
    const router = useRouter();

    //Abre el drawer
    const onHeaderLeftClick = (canGoBack: boolean| undefined) => {

        if(canGoBack) {
            router.back();
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer)
        
    }

  return (
    <Stack
        screenOptions={{
            //headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white'
            },
            headerLeft: ({ tintColor, canGoBack}) => (
                <Ionicons 
                    name={canGoBack ? 'arrow-back-outline': 'grid-outline'}
                    size={20}
                    className=' mr-5'
                    onPress={() => onHeaderLeftClick(canGoBack)}
                />
            )
        }}
    >
        <Stack.Screen 
            name='home/index'
            options={{
                title: 'Home Screen'
            }}
        />
        <Stack.Screen 
            name='products/index'
            options={{
                title: 'Products Screen',
                animation: 'ios_from_left'
            }}
        />
        <Stack.Screen 
            name='profile/index'
            options={{
                title: 'Profile Screen'
            }}
        />
        <Stack.Screen 
            name='settings/index'
            options={{
                title: 'Settings Screen'
            }}
        />
    </Stack>
  )
}

export default StackLayout