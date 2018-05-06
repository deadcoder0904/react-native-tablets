import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { ChatWrapper } from "./ChatWrapper";

export const BlueChat = props => (
  <ChatWrapper
    {...props}
    wrapperStyle={styles.blueChat}
    textStyle={styles.whiteText}
  />
);

const styles = StyleSheet.create({
  blueChat: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end"
  },
  whiteText: {
    color: "white",
    fontSize: wp("3.75%")
  }
});
