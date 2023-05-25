import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    width: WINDOW_WIDTH,
    aspectRatio: 1,
  },
  dotContainer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    opacity: 0.7,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#888",
  },
  activeDot: {
    backgroundColor: "red",
  },
});

export default styles;
