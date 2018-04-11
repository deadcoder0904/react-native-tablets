import React from "react";
import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { ChatWrapper } from "./ChatWrapper";

export const YellowChat = props => {
  const styles = props.toggle ? scaledStyles : regularStyles;
  return (
    <ChatWrapper
      {...props}
      wrapperStyle={styles.yellowChat}
      textStyle={styles.blackText}
    />
  );
};

const scaledStyles = ScaledSheet.create({
  yellowChat: {
    backgroundColor: "#FDE74C",
    alignSelf: "flex-start"
  },
  blackText: {
    color: "black",
    fontSize: "14@ms0.3"
  }
});

const regularStyles = StyleSheet.create({
  yellowChat: {
    backgroundColor: "#FDE74C",
    alignSelf: "flex-start"
  },
  blackText: {
    color: "black",
    fontSize: 14
  }
});
