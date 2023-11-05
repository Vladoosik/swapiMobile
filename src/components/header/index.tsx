// modules
import React, { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// styles
import { styles } from "./styles";

interface HeaderProps {
  countMale?: number;
  countFemale?: number;
  countOther?: number;
  onResetPress?: () => void;
}

const Header: FC<HeaderProps> = (props): JSX.Element => {
  const { countOther, countMale, countFemale, onResetPress } = props;
  return (
    <View>
      <View style={styles.container}>
        <Text>Male: {countMale}</Text>
        <Text>Female: {countFemale}</Text>
        <Text>Other: {countOther}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onResetPress}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);

Header.defaultProps = {
  countMale: 0,
  countFemale: 0,
  countOther: 0,
};
