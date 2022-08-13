import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { SIZES } from "../constants";
import { AvailableRewards, HeaderBar, PromoDeals } from "../components";

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
        <AvailableRewards />

        {/* Promo Deals  */}
        <PromoDeals appTheme={appTheme} />
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
