import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const ChatWrapper = ({
  wrapperStyle,
  textStyle,
  toggle,
  name,
  text
}) => {
  const styles = toggle ? scaledStyles : regularStyles;
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={textStyle}>
        <Text style={styles.username}>@{name}:</Text> {text}
      </Text>
    </View>
  );
};

const scaledStyles = ScaledSheet.create({
  wrapper: {
    height: "40@vs",
    justifyContent: "center",
    padding: "10@ms",
    margin: "5@ms",
    borderRadius: 5
  },
  username: {
    fontWeight: "900",
    fontFamily: "Futura",
    fontSize: "12@ms"
  }
});

const regularStyles = StyleSheet.create({
  wrapper: {
    height: 40,
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  username: {
    fontWeight: "900",
    fontFamily: "Futura",
    fontSize: 12
  }
});
