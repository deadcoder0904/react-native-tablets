import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
 
export const ChatWrapper = ({
  wrapperStyle,
  textStyle,
  toggle,
  name,
  text
}) => (
  <View style={[styles.wrapper, wrapperStyle]}>
    <Text style={textStyle}>
      <Text style={styles.username}>@{name}:</Text> {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: hp("6.4%"),
    justifyContent: "center",
    padding: wp("2.7%"),
    margin: wp("1.35%"),
    borderRadius: wp("1.35%")
  },
  username: {
    fontWeight: "900",
    fontFamily: "Futura",
    fontSize: wp("3.2%")
  }
});
