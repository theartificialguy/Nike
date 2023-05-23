import React, { useRef } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import Animated, {
  FadeIn,
  interpolate,
  Extrapolate,
  SharedValue,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { Product } from "../../../utils/types";
import { StatusBar } from "expo-status-bar";
import data from "../../../utils/data";
import Shoe from "./components/Shoe";

const BACKGROUND = require("../../../assets/nike-background.jpeg");

const HEADER_IMAGE_HEIGHT_MIN = 100;
const HEADER_IMAGE_HEIGHT_MAX = 300;

const AnimatedImageHeader = ({ scrollY }: { scrollY: SharedValue<number> }) => {
  const imageHeight = interpolate(
    scrollY.value,
    [0, HEADER_IMAGE_HEIGHT_MIN],
    [HEADER_IMAGE_HEIGHT_MAX, HEADER_IMAGE_HEIGHT_MIN],
    Extrapolate.CLAMP
  );
//   console.log('height: ', imageHeight);
  return (
    <Animated.Image
      source={BACKGROUND}
      resizeMode="cover"
      style={[styles.backgroundImg, { height: imageHeight }]}
    />
  );
};

export default () => {
//   const scrollRef = useRef(null);
  const scrollY = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler((event) => {
    console.log('event: ', event);
    // scrollY.value = event.contentOffset.y;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Animated.FlatList
        data={data}
        numColumns={2}
        // ref={scrollRef}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        // entering={FadeIn.delay(1500)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: Product }) => (
          <Shoe key={item.id} imageUri={item.image} />
        )}
      />
      <AnimatedImageHeader scrollY={scrollY} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 32,
    color: "#38434D",
  },
  backgroundImg: {
    width: "100%",
    position: "absolute",
    height: HEADER_IMAGE_HEIGHT_MAX,
  },
});
