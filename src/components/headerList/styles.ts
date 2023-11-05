// modules
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    headerContent: {
        width: 250,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    headerTextName: {
        marginLeft: 30,
        fontSize: 15,
        fontWeight: 'bold',
    }
});
