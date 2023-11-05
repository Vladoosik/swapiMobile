// modules
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
// types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/RootStackParamList";
// styles
import { styles } from "./styles";
// store
import ResponseStore from "../../store/responseStore";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;
const Details: FC<DetailsScreenProps> = observer((props): JSX.Element => {
  const { route } = props;
  const { item } = route.params || {};
  const { favorites, setFavorites } = ResponseStore;
  const isFavorite: boolean = favorites.includes(item);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.description}>Name: {item.name}</Text>
        <Text style={styles.description}>Gender: {item.gender}</Text>
        <Text style={styles.description}>Birth Year: {item.birth_year}</Text>
        <Text style={styles.description}>Skin Color: {item.skin_color}</Text>
        <Text style={styles.description}>Eye Color: {item.eye_color}</Text>
        <Text style={styles.description}>Hair Color: {item.hair_color}</Text>
        <Text style={styles.description}>Height: {item.height}</Text>
        <Text style={styles.description}>Mass: {item.mass}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, { borderColor: isFavorite ? "red" : "blue" }]}
          onPress={() => setFavorites(item)}
        >
          <Text
            style={[styles.btnText, { color: isFavorite ? "red" : "blue" }]}
          >
            {isFavorite ? "Delete from" : "Add to"} favorite
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.madeByVlad}>
        <Text style={styles.madeText}>Made by Vladyslav Khrushchov in 05.11.2023</Text>
      </View>
    </>
  );
});

export default Details;
