import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { HeaderBar } from "../components";
import { COLORS, constants, FONTS, icons, SIZES } from "../constants";

function Tabs({ appTheme }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        backgroundColor: appTheme.tabBackgroundColor,
        borderRadius: 10,
      }}
    >
      {/* Tab Indicator */}
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: 120,
          left: 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      ></View>

      {/* Tabs  */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={constants.promoTabs}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={`PromoTab-${index}`}
            onPress={() => console.log(item)}
          >
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h3,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `PromoTab-${index}`}
      />
    </View>
  );
}

function RenderPromoDeals({ appTheme }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {/* Header - Tabs */}
      <Tabs appTheme={appTheme} />
    </View>
  );
}

function RenderAvailableRewards() {
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
}

const Home = () => {
  const { appTheme } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView
        style={{
          flex: 1,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          backgroundColor: appTheme.backgroundColor,
          marginTop: -25,
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {/* Rewards */}
        <RenderAvailableRewards />

        {/* Promo Deals  */}
        <RenderPromoDeals appTheme={appTheme} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
