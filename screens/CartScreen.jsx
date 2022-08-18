import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ProductsContext } from "../Context/ProductsContext";



export default function CartScreen() {
  const {cartItems,handleRemoveCartItem,handleIncreaseQuantity,handleDecreaseQuantity}=useContext(ProductsContext)
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }



const totalQty=cartItems.map(items=>items.quantity).reduce((a,b)=>a+b,0)
const subTotal=cartItems.map(items=>items.price).reduce((a,b)=>a+b,0)






  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length<=0?<Text
      
      style={{
        fontSize:27,
fontFamily:"Poppins_500Medium"
      }}
      >Cart is empty</Text>:<><Text style={styles.subtotal}>SubTotal({totalQty}): ${subTotal*totalQty}</Text>
      <TouchableHighlight style={styles.btn}>
        <Text style={styles.btnText} onPress={()=>alert('purchase successfull')}>proceed to buy</Text>
      </TouchableHighlight>


      <ScrollView>
       {cartItems.map(item=> <View key={item.id} style={styles.cartProducts}>
          <Image style={styles.productImage} source={{uri:item.image}} resizeMode='cover'/>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.buttons}>
              <TouchableHighlight onPress={()=>handleIncreaseQuantity(item)} style={styles.cartButton}><Entypo name="plus" size={24} color="black" /></TouchableHighlight>
              <TouchableHighlight onPress={()=>handleDecreaseQuantity(item )} style={styles.cartButton}><AntDesign name="minus" size={24} color="black" /></TouchableHighlight>
              <Text style={styles.qty}>x{item.quantity}</Text>
              <FontAwesome5 onPress={()=>handleRemoveCartItem(item)} name="trash" size={20} color="#373737" />
            </View>
          </View>
        </View>)}
        
      </ScrollView>
      </>
      }
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  subtotal: {
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
  },
  btn: {
    width: "100%",
    backgroundColor: "#373737",
    padding:12,
    borderRadius:7,
    marginTop:8,
    marginBottom:33
  },
  btnText: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color:"white",
    textAlign:'center',
    
  },
  cartProducts:{
flexDirection:'row',
alignItems:'center',
marginBottom:22
  },
  productImage:{
width: 100,
height:80,
marginRight:12,
borderRadius:5,
  },
  productInfo:{

  },
  productTitle:{
fontSize:17,
fontFamily:"Poppins_500Medium"
  },
  buttons:{
flexDirection:'row',
alignItems:'center'
  },
  cartButton:{
width:35,
height:35,
borderRadius:50,
marginRight:12,
alignItems:'center',
justifyContent:'center',
elevation:7,
backgroundColor:'white'
  },
  qty:{
      fontSize:19,
      fontFamily:"Poppins_500Medium",
      marginRight:22
  }
});
