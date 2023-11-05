import {MemberType} from "./MemberType";

export interface DetailsProp {
    item: MemberType
}

interface KeysProp {
    [key: string]: undefined | DetailsProp;
}

export interface RootStackParamList extends KeysProp{
    Home: undefined
    Favorites: undefined
    MainPage: undefined
    Details: DetailsProp
}
