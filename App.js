import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Keyboard,
  StatusBar
} from "react-native";
import { Font } from "expo";
import { ScaledSheet } from "react-native-size-matters";

import { Chat } from "./src/Chat";
import { addChat } from "./src/DB";

console.disableYellowBox = true;

export default class App extends React.Component {
  state = { text: "", fontLoaded: false };

  async componentDidMount() {
    StatusBar.setHidden(true);
    await Font.loadAsync({
      "Chalkboard SE": require("./assets/fonts/ChalkboardSE-Bold.ttf"),
      Futura: require("./assets/fonts/Futura.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  _onTextChange = text => {
    this.setState({ text });
  };

  _onSubmit = () => {
    const { text } = this.state;
    if (text.trim() === "") return;
    addChat("John", text);
    this.setState({ text: "" });
    Keyboard.dismiss();
  };

  _toggleSwitch = () =>
    this.setState(prevState => ({ switch: !prevState.switch }));

  render() {
    if (!this.state.fontLoaded) return null;
    const styles = this.state.switch ? scaledStyles : regularStyles;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>Chat App Demo</Text>
        </View>
        <View style={styles.switchWrapper}>
          <Text style={styles.text}>React Native Size Matters Enabled?</Text>
          <Switch
            onValueChange={this._toggleSwitch}
            value={this.state.switch}
          />
        </View>
        <ScrollView
          ref={scrollView => (this.scrollView = scrollView)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          <Chat toggle={this.state.switch} />
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            onChangeText={this._onTextChange}
            onSubmitEditing={this._onSubmit}
            blurOnSubmit={false}
            underlineColorAndroid="transparent"
          />
          <View style={styles.btn}>
            <TouchableOpacity onPress={this._onSubmit}>
              <Text style={[styles.text, styles.btnColor]}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1
  },
  header: {
    textAlign: "center",
    fontSize: "40@ms",
    fontWeight: "900"
  },
  switchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "20@vs"
  },
  text: {
    textAlign: "center",
    fontSize: "20@ms",
    fontWeight: "700",
    fontFamily: "Chalkboard SE",
    padding: "10@ms"
  },
  inputContainer: {
    alignSelf: "stretch",
    flexDirection: "row"
  },
  input: {
    flex: 1,
    fontSize: "16@ms",
    margin: "5@vs",
    borderWidth: 2,
    borderColor: "#123",
    paddingHorizontal: "3@vs"
  },
  btn: {
    alignSelf: "flex-end",
    margin: "5@vs",
    borderRadius: "5@ms0.3",
    backgroundColor: "#FF1654"
  },
  btnColor: {
    color: "white"
  }
});

const regularStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "900"
  },
  switchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Chalkboard SE",
    padding: 10
  },
  inputContainer: {
    alignSelf: "stretch",
    flexDirection: "row"
  },
  input: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderColor: "#123",
    paddingHorizontal: 3
  },
  btn: {
    alignSelf: "flex-end",
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FF1654"
  },
  btnColor: {
    color: "white"
  }
});
