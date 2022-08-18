import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../lib/firebase";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import * as Haptics from "expo-haptics";
import AppLoading from "expo-app-loading";
import Storage from "../storage/authStorage";
import { authContext } from "../Context/authContext";

export default function Login() {
const{setUser}=useContext(authContext)
  let [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[isLoading,setIsLoading]=useState(false)



  if(!fontsLoaded){
    return <AppLoading/>
  }

  const handleLogin = () => {
    setIsLoading(true)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user)
        Storage.setUser(user)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        alert(error.message)});
  };
  const handleSignup = () => {
 
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
 
          setUser(user)
          Storage.setUser(user)
          setIsLoading(false)
        }
      })
      .catch((error) =>{ 

        alert(error.message)});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login/Signup</Text>
      <TextInput
        placeholder="enter email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="enter password"
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        keyboardType="visible-password"
      />
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        {isLoading?<ActivityIndicator size="large" color="white" />:
        <Text style={styles.buttonText}>Login</Text>
        }
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button2}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    top: 100,
    position: "absolute",
  },
  button: {
    width: "100%",
    backgroundColor: "#373737",
    padding: 18,
    borderRadius: 5,
  },
  button2: {
    width: "100%",
    backgroundColor: "#373737",
    padding: 18,
    borderRadius: 5,
    marginTop: 142,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#EBEBEB",
    height: 60,
    marginBottom: 12,
    borderRadius: 5,
    fontSize: 15,
    color: "black",
    padding: 10,
    fontFamily: "Poppins_500Medium",
  },
});
