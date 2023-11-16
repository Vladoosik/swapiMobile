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
    genderCounts,
  } = ResponseStore;
  const [value, setValue] = useState<MemberType[] | null>(null);
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
        countFemale={genderCounts.female}
        countMale={genderCounts.male}
        countOther={genderCounts.other}
        onResetPress={resetFavorite}
      />
      <FlatList
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={HeaderList}
        stickyHeaderIndices={[0]}
        data={loading ? loadingArray : value}
        contentContainerStyle={styles.renderContainer}
        renderItem={({ item, index }) => (
          <RenderItems
            loading={loading}
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
          style={[
            styles.btnPrev,
            { borderColor: page <= 1 || loading ? "gray" : "red" },
          ]}
          onPress={prevPage}
          disabled={page <= 1 || loading}
        >
          <Text>Prev</Text>
        </TouchableOpacity>
        <View style={styles.pageContainer}>
          <Text>{page}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.btnNext,
            { borderColor: !value || loading ? "gray" : "blue" },
          ]}
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
