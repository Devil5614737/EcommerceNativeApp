import { Image, Modal, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from "@expo-google-fonts/poppins";
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

export const ShowProductModal = ({ modalVisible, setModalVisible }) => {

const {productInfo,handleAddToCart}=useContext(ProductsContext)



    let [fontsLoaded, error] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
      });

   


  return (
      <Modal visible={modalVisible} animationType="slide">
          <SafeAreaView style={styles.container}>
        <AntDesign
          onPress={() => setModalVisible(false)}
          name="arrowleft"
          size={30}
          color="black"
        />
        <Image style={styles.image} resizeMode="cover" source={{uri:productInfo&&productInfo.image}}/>
        <View style={styles.info}>
           <Text style={styles.title}>{productInfo&&productInfo.title}</Text> 
           <Text style={styles.price}>${productInfo&&productInfo.price}</Text>
           <Text style={styles.desc}>{productInfo&&productInfo.desc}</Text>
        </View>
        <TouchableHighlight style={styles.btn}
        
        onPress={()=>{handleAddToCart(productInfo)
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
        >
            <Text style={styles.btnText}>add to cart</Text>
        </TouchableHighlight>
    </SafeAreaView>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image:{
    width:'100%',
    height: 250,
    marginTop:43
  },info:{
marginTop:22

  },
  title:{
fontSize:24,
fontFamily:"Poppins_700Bold",
color:"#4C4C4C"

  },
  price:{
fontFamily:"Poppins_600SemiBold",
fontSize:16,
color:"#4C4C4C"

  },
  desc:{
    fontFamily:"Poppins_500Medium",
    fontSize:17,
    color:"grey"
  },
  btn:{
  backgroundColor:'#373737',
  padding:13,
  borderRadius:6,
marginTop:143
  },
  btnText:{
textAlign:'center',
fontSize:22,
color:'white',
fontFamily:"Poppins_700Bold",
  }
});
