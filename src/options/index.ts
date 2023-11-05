// modules
import {ReactElement} from "react";

export interface TabBarIconFocusProps {
    focused: boolean
}


export const getScreenOptions = (tabBarIcon: ReactElement, defaultBarIcon:ReactElement, headerShown:boolean): object => ({
    headerShown,
    tabBarIcon: ({ focused }: TabBarIconFocusProps): ReactElement =>
        focused ? tabBarIcon : defaultBarIcon,
});
