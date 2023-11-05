// modules
import { action, makeAutoObservable, observable, runInAction } from "mobx";
// types
import { MemberType } from "../types/MemberType";

class ResponseStore {
  starWarsValue: any = {};
  error: unknown | string = "";
  loading: boolean = false;
  page: number = 1;
  favorites: MemberType[] = [];

  constructor() {
    makeAutoObservable(this, {
      starWarsValue: observable,
      page: observable,
      favorites: observable,
      getResponse: action,
      nextPage: action,
      prevPage: action,
      setFavorites: action,
      resetFavorite: action,
    });
  }

  setFavorites = (item: MemberType) => {
    const checkItemIndex = this.favorites.indexOf(item);
    if (checkItemIndex !== -1) {
      this.favorites.splice(checkItemIndex, 1);
    } else {
      this.favorites.push(item);
    }
  };

  getResponse = async (url: string) => {
    this.loading = true;
    try {
      const response = await fetch(url);
      const data = await response.json();
      runInAction(() => {
        this.starWarsValue = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  resetFavorite = () => (this.favorites = []);

  nextPage = () => (this.page += 1);
  prevPage = () => (this.page -= 1);
}

export default new ResponseStore();
