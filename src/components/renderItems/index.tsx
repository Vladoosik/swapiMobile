// modules
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StarIcon } from "../../assets";
// styles
import { styles } from "./styles";
// types
import { MemberType } from "../../types/MemberType";
import { RenderSceleton } from "../index";

interface RenderItemProps {
  item: MemberType;
  onStarPress?: () => void;
  onItemPress?: () => void;
  activeStar?: boolean;
  loading?: boolean;
}

const RenderItems: FC<RenderItemProps> = (props): JSX.Element => {
  const { item, onStarPress, onItemPress, activeStar, loading } = props;

  return (
    <>
      {loading ? (
        <RenderSceleton />
      ) : (
        <TouchableOpacity activeOpacity={0.8} onPress={onItemPress}>
          <View style={styles.container}>
            <View style={styles.descriptionContainer}>
              <View style={styles.nameContainer}>
                <TouchableOpacity onPress={onStarPress}>
                  <StarIcon
                    fill={"black"}
                    strokeColor={activeStar ? "red" : "none"}
                  />
                </TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text style={styles.birthday}>{item.birth_year}</Text>
            </View>
            <Text>{item.gender}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default RenderItems;
