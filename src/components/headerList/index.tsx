// modules
import React from "react";
import { Text, View } from "react-native";
// styles
import { styles } from "./styles";

const HeaderList = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTextName}>Name</Text>
        <Text style={styles.headerText}>Birthdate</Text>
      </View>
      <Text style={styles.headerText}>Gender</Text>
    </View>
  );
};

export default HeaderList;
