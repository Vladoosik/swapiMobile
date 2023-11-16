// modules
import { action, makeAutoObservable, observable, runInAction } from "mobx";
// types
import { MemberType, GenderCountType } from "../types/MemberType";

class ResponseStore {
  starWarsValue: any = {};
  error: unknown | string = "";
  loading: boolean = false;
  page: number = 1;
  favorites: MemberType[] = [];
  genderCounts: GenderCountType = { male: 0, female: 0, other: 0 };

  constructor() {
    makeAutoObservable(this, {
      starWarsValue: observable,
      page: observable,
      favorites: observable,
      genderCounts: observable,
      getResponse: action,
      nextPage: action,
      prevPage: action,
      setFavorites: action,
      checkGenderMember: action,
      resetFavorite: action,
    });
  }

  checkGenderMember = () => {
    this.genderCounts = this.favorites.reduce(
      (counts: GenderCountType, item: MemberType) => {
        const gender =
          item.gender === "male" || item.gender === "female"
            ? item.gender
            : "other";
        counts[gender] = (counts[gender] || 0) + 1;
        return counts;
      },
      { male: 0, female: 0, other: 0 }
    );
  };

  setFavorites = (item: MemberType) => {
    const checkItemIndex = this.favorites.indexOf(item);
    if (checkItemIndex !== -1) {
      this.favorites.splice(checkItemIndex, 1);
    } else {
      this.favorites.push(item);
    }
    this.checkGenderMember();
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

  resetFavorite = () => {
    this.favorites = [];
    this.genderCounts = { male: 0, female: 0, other: 0 };
  };

  nextPage = () => (this.page += 1);
  prevPage = () => (this.page -= 1);
}

export default new ResponseStore();
