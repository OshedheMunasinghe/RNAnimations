/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const opacity = useState(new Animated.Value(0))[0];


  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={[{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            opacity, //this is from variable useState
            backgroundColor: "red"
          }]}
        />

        <TouchableOpacity onPress={fadeInBall}>
          <Text>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOutBall}>
          <Text>Fade Out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default App;
