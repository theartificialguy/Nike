import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  imageUri: string;
}

const Shoe = ({ imageUri }: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Image
        source={{ uri: imageUri }}
        style={styles.img}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default Shoe;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: 200,
    padding: 4,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
