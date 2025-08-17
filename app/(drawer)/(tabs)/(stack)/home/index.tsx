import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className=" px-10 mt-10">
        <Link href={'/products'} asChild>
          <CustomButton
            color="primary"
          >
            Productos Link
          </CustomButton>
        </Link>

        <CustomButton color="primary" onPress={() => router.push('/products')}>
          Productos
        </CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/profile")}>
          Profile
        </CustomButton>
        <CustomButton color="tertiary" onPress={() => router.push("/settings")}>
          Settings
        </CustomButton>

        <CustomButton color="primary" onPress={onToggleDrawer}>
          Abrir menu
        </CustomButton>
 
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
