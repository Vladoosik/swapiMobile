// modules
import React, { FC, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { observer } from "mobx-react";
// store
import ResponseStore from "../../store/responseStore";
// components
import { EmptyList, Header, HeaderList, RenderItems } from "../../components";
// types
import { MemberType } from "../../types/MemberType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/RootStackParamList";

type FavoritesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Favorites"
>;

const Favorites: FC<FavoritesScreenProps> = observer((props): JSX.Element => {
  const { navigation } = props;
  const { favorites, resetFavorite, setFavorites, genderCounts } = ResponseStore;
  const [value, setValue] = useState<MemberType[] | null>(null);

  useEffect(() => {
    setValue(favorites);
  }, [favorites]);

  const detailNavigate = (item: MemberType) => {
    navigation.navigate("Details", {
      item,
    });
  };

  return (
    <>
      <Header
        countOther={genderCounts.other}
        countMale={genderCounts.male}
        countFemale={genderCounts.female}
        onResetPress={resetFavorite}
      />
      <FlatList
        ListEmptyComponent={EmptyList}
        data={value}
        extraData={favorites}
        renderItem={({ item, index }) => (
          <RenderItems
            item={item}
            key={index}
            activeStar={favorites.includes(item)}
            onItemPress={() => detailNavigate(item)}
            onStarPress={() => setFavorites(item)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListHeaderComponent={HeaderList}
      />
    </>
  );
});

export default Favorites;
