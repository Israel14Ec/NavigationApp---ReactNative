import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" px-10 mt-10">
        <Link href={"/products"} asChild>
          <CustomButton
            color="primary"
          >
            Productos Link
          </CustomButton>
        </Link>

        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/profile")}>
          Profile
        </CustomButton>
        <CustomButton color="tertiary" onPress={() => router.push("/settings")}>
          Settings
        </CustomButton>
 
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
