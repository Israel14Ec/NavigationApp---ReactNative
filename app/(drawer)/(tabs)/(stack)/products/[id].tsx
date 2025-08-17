import { products } from '@/store/product.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function ProductIdScreen() {

    const { id } = useLocalSearchParams();
  const navigation = useNavigation();

    const producto = products.find(p => p.id === id);

    //Cambía el nombre del título
    useEffect(() => {
      navigation.setOptions({
        title: producto?.title ?? 'Producto',
      })
    }, [producto])

    if(!producto) {
        return <Redirect href={'/'} />
    }

  return (
    <View className=' px-5 mt-2'>
      <Text className=' font-work-black text-2xl text-purple-500'> { producto.title} </Text>
      <Text> {producto.description} </Text>
      <View className=' flex items-center justify-center w-14 h-14 rounded-full bg-purple-500'>
        <Text className=' font-work-black text-xs text-white'>$ {producto.price} </Text>
      </View>
    </View>
  )
}
