import React, { useRef } from "react";
import { SafeAreaView } from "react-native";
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
import styles from "./styles";

// const BACKGROUND = require("../../../assets/nike-background.jpeg");

// const HEADER_IMAGE_HEIGHT_MIN = 100;
// const HEADER_IMAGE_HEIGHT_MAX = 300;

export default () => {
  const scrollRef = useRef(null);
//   const scrollY = useSharedValue(0);

//   const onScrollHandler = useAnimatedScrollHandler((event) => {
//     scrollY.value = event.contentOffset.y;
//   });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Animated.FlatList
        data={data}
        numColumns={2}
        ref={scrollRef}
        scrollEventThrottle={16}
        // onScroll={onScrollHandler}
        entering={FadeIn.duration(1500)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: Product }) => (
          <Shoe key={item.id} {...item} />
        )}
      />
      {/* <AnimatedImageHeader scrollY={scrollY} /> */}
    </SafeAreaView>
  );
};

// const AnimatedImageHeader = ({ scrollY }: { scrollY: SharedValue<number> }) => {
//   const imageHeight = interpolate(
//     scrollY.value,
//     [0, HEADER_IMAGE_HEIGHT_MIN],
//     [HEADER_IMAGE_HEIGHT_MAX, HEADER_IMAGE_HEIGHT_MIN],
//     Extrapolate.CLAMP
//   );
//   return (
//     <Animated.Image
//       source={BACKGROUND}
//       resizeMode="cover"
//       style={[styles.backgroundImg, { height: imageHeight }]}
//     />
//   );
// };