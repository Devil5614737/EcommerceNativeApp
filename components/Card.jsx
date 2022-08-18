import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { ProductsContext } from "../Context/ProductsContext";

export const Card = ({ setModalVisible, title, image, price, item }) => {
  const { showProductDetails } = useContext(ProductsContext);
  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback
        onPress={() => {
          showProductDetails(item);
          setModalVisible(true);
        }}
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: image }}
        />
      </TouchableWithoutFeedback>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 300,
    borderRadius: 13,
    marginBottom: 32,
    elevation: 6,
    shadowColor: "black",
    shadowRadius: 13,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  textContainer: {
    padding: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 2,
    color: "#4C4C4C",
    fontFamily: "Poppins_600SemiBold",
  },
  price: {
    fontSize: 20,
    color: "#4C4C4C",
    fontFamily: "Poppins_500Medium",
  },
});
