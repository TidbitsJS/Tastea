import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  COLORS,
  SIZES,
  FONTS,
  constants,
  dummyData,
  images,
} from "../../constants";
import CustomButton from "../CustomButton";

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

const PromoDeals = ({ appTheme }) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {/* Header - Tabs */}
      <Tabs appTheme={appTheme} />

      {/* Details */}
      <Animated.FlatList
        data={dummyData.promos}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: SIZES.width,
              paddingTop: SIZES.base,
            }}
          >
            <Image
              source={images.strawberryBackground}
              resizeMode="contain"
              style={{ width: "100%" }}
            />

            <Text
              style={{
                color: COLORS.red,
                ...FONTS.h1,
                fontSize: 27,
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                marginTop: 3,
                color: appTheme.textColor,
                ...FONTS.body4,
              }}
            >
              {item.description}
            </Text>

            <Text
              style={{
                marginTop: 3,
                color: appTheme.textColor,
                ...FONTS.body4,
              }}
            >
              Calories: {item.calories}
            </Text>

            <CustomButton
              label="Order Now"
              isPrimaryButton
              containerStyle={{
                marginTop: 10,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.base,
                borderRadius: SIZES.radius * 2,
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              handlePress={() => navigation.navigate("Location")}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PromoDeals;
