// modules
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import { Details } from "../../screens";
// options
import { MainBottomTab } from "../index";
// types
import { RootStackParamList } from "../../types/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootContainer = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"MainPage"}
        options={{ headerShown: false }}
        component={MainBottomTab}
      />
      <Stack.Screen
        name={"Details"}
        options={{ headerShown: true }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default RootContainer;
