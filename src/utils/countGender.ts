export const CountGender = (favorites: any[], genderToCount?: string) => {
    if (genderToCount) {
        return favorites.reduce((count: number, item: any) => {
            if (item.gender === genderToCount) {
                return count + 1;
            }
            return count;
        }, 0);
    }else {
        return favorites.reduce((other: number, item: any) => {
            if (item.gender !== 'male' && item.gender !== 'female') {
                return other + 1;
            }
            return other;
        }, 0);
    }
};
