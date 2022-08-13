import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../../constants";

const AvailableRewards = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        height: 120,
      }}
      onPress={() => navigation.navigate("Rewards")}
    >
      {/* Reward Cup */}
      <View
        style={{
          width: 110,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.pink,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          paddingRight: 10,
        }}
      >
        <ImageBackground
          source={icons.reward_cup}
          resizeMode="contain"
          style={{
            width: 85,
            height: 85,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.transparentBlack,
              marginTop: 10,
            }}
          >
            <Text
              style={{ color: COLORS.white, ...FONTS.h4 }}
              numberOfLines={1}
            >
              25
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* Reward Details */}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightPink,
          marginLeft: -15,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h2,
            fontSize: 20,
          }}
        >
          Available Rewards:
        </Text>

        <View
          style={{
            marginTop: 5,
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.font,
            borderRadius: SIZES.radius * 2,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            150 points - $2.50 off
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AvailableRewards;
