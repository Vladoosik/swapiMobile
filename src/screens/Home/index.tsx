// modules
import React, { FC, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { observer } from "mobx-react";
// components
import { EmptyList, Header, HeaderList, RenderItems } from "../../components";
// store
import ResponseStore from "../../store/responseStore";
// styles
import { styles } from "./styles";
// utils
import { CountGender } from "../../utils/countGender";
// types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/RootStackParamList";
import { MemberType } from "../../types/MemberType";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: FC<HomeScreenProps> = observer((props): JSX.Element => {
  const { navigation } = props;
  const {
    starWarsValue,
    loading,
    prevPage,
    nextPage,
    page,
    setFavorites,
    favorites,
    resetFavorite,
  } = ResponseStore;
  const [value, setValue] = useState<MemberType[] | null>(null);
  const countMale = CountGender(favorites, "male");
  const countFemale = CountGender(favorites, "female");
  const countOther = CountGender(favorites);
  const loadingArray = new Array(7).fill(null);

  const detailsNavigate = (item: MemberType) => {
    navigation.navigate("Details", {
      item,
    });
  };

  useEffect(() => {
    setValue(starWarsValue.results);
  }, [starWarsValue]);

  return (
    <>
      <Header
        countFemale={countFemale}
        countMale={countMale}
        countOther={countOther}
        onResetPress={resetFavorite}
      />
      <FlatList
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={HeaderList}
        stickyHeaderIndices={[0]}
        data={loading || !value ? loadingArray : value}
        contentContainerStyle={styles.renderContainer}
        renderItem={({ item, index }) => (
          <RenderItems
            loading={loading || !value}
            item={item}
            key={index}
            activeStar={favorites.includes(item)}
            onStarPress={() => setFavorites(item)}
            onItemPress={() => detailsNavigate(item)}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.btnPrev, { borderColor: page <= 1 ? "gray" : "red" }]}
          onPress={prevPage}
          disabled={page <= 1 || loading || !value}
        >
          <Text>Prev</Text>
        </TouchableOpacity>
        <View style={styles.pageContainer}>
          <Text>{page}</Text>
        </View>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={nextPage}
          disabled={loading || !value}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
});

export default Home;
