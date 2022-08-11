import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CustomStatusBar from "./StatusBar";
import { toggleTheme } from "../store/themeActions";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const HeaderBar = () => {
  const { appTheme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    if (appTheme.name === "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base,
        paddingBottom: SIZES.padding * 2,
      }}
    >
      <CustomStatusBar
        backgroundColor={COLORS.purple}
        barStyle="light-content"
      />

      {/* Greetings */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Enola,
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Welcome Back
        </Text>
      </View>

      {/* Theme toggle */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 30,
          borderRadius: 20,
          backgroundColor: COLORS.lightPurple,
        }}
        onPress={handleToggleTheme}
      >
        {/* Sun */}
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            ...(appTheme.name === "light" ? styles.selectedLightModeStyle : {}),
          }}
        >
          <Image
            source={icons.sunny}
            style={{ width: "40%", height: "40%", tintColor: COLORS.white }}
          />
        </View>

        {/* Moon */}
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            ...(appTheme.name === "dark" ? styles.selectNightModeStyle : {}),
          }}
        >
          <Image
            source={icons.night}
            style={{ width: "40%", height: "40%", tintColor: COLORS.white }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});

export default HeaderBar;
