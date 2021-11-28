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
  const value = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(value, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false
    }).start();

  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={[{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            marginLeft: value,
            backgroundColor: "red"
          }]}
        />

        <TouchableOpacity onPress={moveBall}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default App;
