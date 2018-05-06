import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { ChatWrapper } from "./ChatWrapper";

export const YellowChat = props => (
  <ChatWrapper
    {...props}
    wrapperStyle={styles.yellowChat}
    textStyle={styles.blackText}
  />
);

const styles = StyleSheet.create({
  yellowChat: {
    backgroundColor: "#FDE74C",
    alignSelf: "flex-start"
  },
  blackText: {
    color: "black",
    fontSize: wp("3.75%")
  }
});
