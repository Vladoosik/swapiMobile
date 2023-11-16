// modules
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loaderContainer: {
    marginTop: 30,
  },
  renderContainer: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
  },
  btnNext: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnPrev: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  pageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 15,
    borderColor: 'blue',
  }
});
