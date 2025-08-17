import { products } from '@/store/product.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProductIdScreen() {

    const { id } = useLocalSearchParams();

    const producto = products.find(p => p.id === id);

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
