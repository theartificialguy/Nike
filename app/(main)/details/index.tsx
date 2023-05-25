import React from "react";
import { useSearchParams, useRouter } from "expo-router";
import { Text, SafeAreaView, Image, FlatList } from "react-native";
import { Product } from "../../../utils/types";
import data from "../../../utils/data";
import styles from "./styles";
import ImageCarousel from "../../../components/ImageCarousel";

export default () => {
  const router = useRouter();
  const { id } = useSearchParams();

  const product = data.find((item: Product) => item.id === id);

  if (!product) {
    return (
      <SafeAreaView style={[styles.container, styles.notFoundContainer]}>
        <Text style={styles.notFound}>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Image Coursel */}
      <ImageCarousel imageArray={product.images} />
    </SafeAreaView>
  );
};
