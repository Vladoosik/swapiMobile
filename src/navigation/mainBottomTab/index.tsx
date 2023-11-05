// modules
import React, { useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screen
import { Favorites, Home } from "../../screens";
// options
import { getScreenOptions } from "../../options";
// assets
import { HomeIcon, StarIcon } from "../../assets";
// types
import {RootStackParamList} from "../../types/RootStackParamList";

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainBottomTab = () => {
  const homeScreenOptions = useMemo(
    () =>
      getScreenOptions(
        <HomeIcon fill={"black"} />,
        <HomeIcon fill={"none"} />,
        false
      ),
    []
  );
  const favoriteScreenOption = useMemo(
    () =>
      getScreenOptions(
        <StarIcon fill={"black"} />,
        <StarIcon strokeColor={"black"} />,
        false
      ),
    []
  );

  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} options={homeScreenOptions} component={Home} />
      <Tab.Screen
        name={"Favorites"}
        options={favoriteScreenOption}
        component={Favorites}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
