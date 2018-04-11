import React from "react";
import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { ChatWrapper } from "./ChatWrapper";

export const BlueChat = props => {
  const styles = props.toggle ? scaledStyles : regularStyles;
  return (
    <ChatWrapper
      {...props}
      wrapperStyle={styles.blueChat}
      textStyle={styles.whiteText}
    />
  );
};

const scaledStyles = ScaledSheet.create({
  blueChat: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end"
  },
  whiteText: {
    color: "white",
    fontSize: "14@ms0.3"
  }
});

const regularStyles = StyleSheet.create({
  blueChat: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end"
  },
  whiteText: {
    color: "white",
    fontSize: 14
  }
});
