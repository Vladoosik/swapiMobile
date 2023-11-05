// modules
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// theme
import { theme } from "./src/theme";
// navigation
import { RootContainer } from "./src/navigation";
import { observer } from "mobx-react";
// store
import ResponseStore from "./src/store/responseStore";

const App = observer((): JSX.Element => {
  const { getResponse, page } = ResponseStore;

  useEffect(() => {
    getResponse(`https://swapi.dev/api/people/?page=${page}`);
  }, [page]);

  return (
    <NavigationContainer theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootContainer />
      </SafeAreaView>
    </NavigationContainer>
  );
});

export default App;
