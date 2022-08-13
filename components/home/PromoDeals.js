import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { COLORS, SIZES, FONTS, constants } from "../../constants";

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
};

export default PromoDeals;
