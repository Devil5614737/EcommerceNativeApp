import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Feather } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { Card } from "../components/Card";
import { useState } from "react";
import { ShowProductModal } from "../modals/ShowProductModal";
import { ProductsContext } from "../Context/ProductsContext";

export default function ProductsScreen() {
  const { products } = useContext(ProductsContext);
  const [query, setQuery] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.logo}>WireCart</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.inputText}
              placeholder="search products"
              placeholderTextColor="#BEBEBE"
              value={query}
              onChangeText={(text) => setQuery(text)}
            />
            <Feather name="search" size={20} color="#BEBEBE" />
          </View>
        </View>
        <ScrollView
          style={styles.productContainer}
          showsVerticalScrollIndicator={false}
        >
          {products
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(query.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <Card
                key={item.id}
                setModalVisible={setModalVisible}
                title={item.title}
                image={item.image}
                price={item.price}
                item={item}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
      <ShowProductModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  topNav: {},
  logo: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
  },
  searchBox: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#F6F6F6",
    padding: 19,
    paddingHorizontal: 22,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  inputText: {
    width: "90%",
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
  },
  productContainer: {
    marginTop: 12,
  },
});
