// modules
import React, { FC, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { observer } from "mobx-react";
// store
import ResponseStore from "../../store/responseStore";
// components
import { EmptyList, Header, HeaderList, RenderItems } from "../../components";
// utils
import { CountGender } from "../../utils/countGender";
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
  const { favorites, resetFavorite, setFavorites } = ResponseStore;
  const [value, setValue] = useState<MemberType[] | null>(null);

  useEffect(() => {
    setValue(favorites);
  }, [favorites]);

  const countMale = CountGender(favorites, "male");
  const countFemale = CountGender(favorites, "female");
  const countOther = CountGender(favorites);

  const detailNavigate = (item: MemberType) => {
    navigation.navigate("Details", {
      item,
    });
  };

  return (
    <>
      <Header
        countOther={countOther}
        countMale={countMale}
        countFemale={countFemale}
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
