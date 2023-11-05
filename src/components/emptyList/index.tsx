// modules
import React, {FC} from 'react';
import {Text, View, ViewStyle} from "react-native";
// styles
import {styles} from './styles'

interface EmptyListProps {
    style?: ViewStyle
}
const EmptyList:FC<EmptyListProps> = (props): JSX.Element => {
    const {style} = props;
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>Your list is empty ¯\_(ツ)_/¯</Text>
        </View>
    );
};

export default EmptyList;
