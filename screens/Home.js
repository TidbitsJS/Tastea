import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { HeaderBar } from "../components";
import { COLORS, SIZES } from "../constants";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView
        style={{
          flex: 1,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          backgroundColor: COLORS.secondary,
          marginTop: -25,
        }}
      ></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
