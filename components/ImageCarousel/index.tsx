import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import styles from "./styles";

interface ImageCarouselProps {
  imageArray: string[];
}

interface DotIndicatorProps {
  currentIndex: number;
  imageCount: number;
}

interface DotProps {
  index: number;
  currentIndex: number;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const animatedValue = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedValue.value,
    };
  });

  useEffect(() => {
    if (currentIndex === index) {
      animatedValue.value = withTiming(1, { duration: 500 });
    }
  }, []);

  return (
    <Animated.View
      key={index}
      style={[
        styles.dot,
        currentIndex === index && styles.activeDot,
        animatedStyle,
      ]}
    />
  );
};

const DotIndicator = ({ currentIndex, imageCount }: DotIndicatorProps) => {
  return (
    <View style={styles.dotContainer}>
      {[...Array(imageCount)].map((_, index) => (
        <Dot key={index} index={index} currentIndex={currentIndex} />
      ))}
    </View>
  );
};

const ImageCarousel = ({ imageArray }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={imageArray}
        onMomentumScrollEnd={(event) => {
          if (event.nativeEvent.contentOffset.x > windowWidth) {
            setWindowWidth(event.nativeEvent.contentOffset.x);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else if (event.nativeEvent.contentOffset.x < windowWidth) {
            setWindowWidth(event.nativeEvent.contentOffset.x);
            setCurrentIndex((prevIndex) => prevIndex - 1);
          }
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.img} resizeMode="cover" />
        )}
      />
      <DotIndicator
        currentIndex={currentIndex}
        imageCount={imageArray.length}
      />
    </View>
  );
};

export default ImageCarousel;
