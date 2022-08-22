import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";

import {
  COLORS,
  SIZES,
  FONTS,
  constants,
  dummyData,
  images,
} from "../../constants";
import CustomButton from "../CustomButton";

const promoTabs = constants.promoTabs.map((promoTab) => ({
  ...promoTab,
  ref: React.createRef(),
}));

const TabIndicator = ({ measureLayout, scrollX }) => {
  const inputRange = promoTabs.map((_, i) => i * SIZES.width);
  const tabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        height: "100%",
        width: tabIndicatorWidth,
        left: 0,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [{ translateX }],
      }}
    />
  );
};

const Tabs = ({ appTheme, scrollX, onPromoTabPress }) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);
  const containerRef = React.useRef();

  const tabPosition = Animated.divide(scrollX, SIZES.width);

  React.useEffect(() => {
    let ml = [];

    promoTabs.forEach((promo) => {
      promo.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          console.log(x, y, width, height);

          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === promoTabs.length) {
            setMeasureLayout(ml);
          }
        }
      );
    });
  }, [containerRef.current]);

  return (
    <View
      ref={containerRef}
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
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {/* Tabs  */}
      {promoTabs.map((item, index) => {
        const textColor = tabPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.lightGray2, COLORS.white, COLORS.lightGray2],
          extrapolate: "clamp",
        });

        return (
          <TouchableOpacity
            key={`PromoTab-${index}`}
            onPress={() => onPromoTabPress(index)}
          >
            <View
              ref={item.ref}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                alignItems: "center",
                justifyContent: "center",
                height: 48,
              }}
            >
              <Animated.Text
                style={{
                  color: textColor,
                  ...FONTS.h3,
                }}
              >
                {item.title}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const PromoDeals = ({ appTheme }) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const promoScrollViewRef = React.useRef();
  const onPromoTabPress = React.useCallback((promoTabIndex) => {
    promoScrollViewRef?.current.scrollToOffset({
      offset: promoTabIndex + SIZES.width,
    });
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      {/* Header - Tabs */}
      <Tabs
        appTheme={appTheme}
        scrollX={scrollX}
        onPromoTabPress={onPromoTabPress}
      />

      {/* Details */}
      <Animated.FlatList
        ref={promoScrollViewRef}
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
