import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useAuth } from "../../context/auth";

const LOGO = require("../../assets/nike-logo.png");

export default () => {
  const { signIn } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Image source={LOGO} resizeMode="contain" style={styles.logo} />
      <View>
        <Text style={styles.title}>Start Journey With Nike</Text>
        <Text style={styles.subtitle}>
          Smart, gorgeous & fashionable collection.
        </Text>
      </View>
      <Pressable
        onPress={signIn}
        style={[styles.btnContainer, { marginBottom: 24 }]}
      >
        <Text style={styles.signin}>Google Sign In {"→"}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 28,
    color: "#38434D",
  },
  logo: {
    width: "95%",
  },
  btnContainer: {
    width: "60%",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  signin: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1e1e1e",
  },
});
