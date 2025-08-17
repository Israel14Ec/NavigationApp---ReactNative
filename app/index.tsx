import { Link, Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const index = () => {
  
  // return <Redirect href={'/(stack)/home'} />
  return <Redirect href={'/home'} />

  // return (
  //   <SafeAreaView>
  //     {/**SafeAreaView: crea un contenedor seguro para evitar que el contenido de la app se "meta" en zonas peligrosas de la pantalla*/}
  //     <View className=" mt-10 mx-2.5">
  //       <Text className="">Hola mundo</Text>

  //       <Link href={"/products"}>Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
  
};

export default index;
