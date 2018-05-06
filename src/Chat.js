import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Video } from "expo";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { chats } from "./DB";
import { YellowChat } from "./YellowChat";
import { BlueChat } from "./BlueChat";

export const Chat = ({ toggle }) => {
  return chats.map(({ text, name, video }, i) => {
    if (video)
      return (
        <Video
          source={require("../assets/videos/john-cena-meme.mp4")}
          useNativeControls
          isMuted
          resizeMode="cover"
          style={[styles.video, styles.flexEnd]}
          key={i}
        />
      );
    return name !== "John" ? (
      <YellowChat name={name} text={text} toggle={toggle} key={i} />
    ) : (
      <BlueChat name={name} text={text} toggle={toggle} key={i} />
    );
  });
};

const styles = StyleSheet.create({
  flexEnd: {
    alignSelf: "flex-end"
  },
  video: {
    width: "100%", // RN percentage is not always correct. We could change this as well to wp("100%")
    height: hp("40%")
  }
});
