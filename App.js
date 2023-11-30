import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.rowOfSquares}>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="airplane" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="football" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="lock-closed" size={50} color="#ccc" />
          </View>
        </View>
      </View>
      <View style={styles.rowOfSquares}>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="logo-stackoverflow" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="rocket" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <Ionicons name="moon" size={50} color="#ccc" />
          </View>
        </View>
      </View>
      <View style={styles.rowOfSquares}>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <MaterialCommunityIcons name="calculator" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <MaterialCommunityIcons name="headphones" size={50} color="#ccc" />
          </View>
        </View>
        <View style={styles.outerSquare}>
          <View style={styles.innerSquare}>
            <MaterialCommunityIcons name="trumpet" size={50} color="#ccc" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  rowOfSquares: {
    flexDirection: "row",
  },
  outerSquare: {
    backgroundColor: "black",
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: "#bbb",
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  innerSquare: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
