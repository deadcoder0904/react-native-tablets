import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Video } from "expo";
import { ScaledSheet } from "react-native-size-matters";

import { chats } from "./DB";
import { YellowChat } from "./YellowChat";
import { BlueChat } from "./BlueChat";

export const Chat = ({ toggle }) => {
  const styles = toggle ? scaledStyles : regularStyles;
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

const scaledStyles = ScaledSheet.create({
  flexEnd: {
    alignSelf: "flex-end"
  },
  video: {
    width: "100%",
    height: "250@vs"
  }
});

const regularStyles = StyleSheet.create({
  flexEnd: {
    alignSelf: "flex-end"
  },
  video: {
    width: "100%",
    height: 250
  }
});
