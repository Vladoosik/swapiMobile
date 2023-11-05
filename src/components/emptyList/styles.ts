// modules
import {Dimensions, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height / 2,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
      fontSize: 23,
    },
})
