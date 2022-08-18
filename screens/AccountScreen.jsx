import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";
import { authContext as AuthContext } from "../Context/authContext";
import * as Haptics from "expo-haptics";
import Storage from "../storage/authStorage";

export default function AccountScreen() {
  const { user, setUser } = useContext(AuthContext);

  let [fontsLoaded, error] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleLogout = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setUser();
    Storage.removeUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}></View>
        <Text style={styles.userEmail}>{user && user.email}</Text>
      </View>
      <TouchableHighlight style={styles.button2} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  userInfo: {
    alignItems: "center",
    marginTop: 33,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "grey",
  },
  userEmail: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
  },
  button2: {
    width: "100%",
    backgroundColor: "#373737",
    padding: 18,
    borderRadius: 5,
    marginTop: 42,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    flexDirection: "row",
    alignItems: "center",
  },
});
