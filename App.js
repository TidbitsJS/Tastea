import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

import Tabs from "./navigation/tabs";
import themeReducer from "./store/themeReducer";
import { Location, Order, OrderDetail } from "./screens";

const Stack = createStackNavigator();

const store = createStore(themeReducer, applyMiddleware(thunk));

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Main"}
        >
          <Stack.Screen name="Main" component={Tabs} />

          <Stack.Screen name="Location" component={Location} />

          <Stack.Screen name="Order" component={Order} />

          <Stack.Screen name="OrderDetail" component={OrderDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
