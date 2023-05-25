import React from "react";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../../../../utils/types";

const Shoe = (props: Product) => {
  return (
    <Link
      href={{
        pathname: "/details",
        params: { id: props.id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.container} activeOpacity={0.6}>
        <Image
          source={{ uri: props.image }}
          style={styles.img}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Link>
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
