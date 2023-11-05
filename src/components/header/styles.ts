// modules
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        alignSelf: 'center',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        marginVertical: 10,
    },
    btnText: {
        color: 'red',
        fontSize: 17
    }
});
