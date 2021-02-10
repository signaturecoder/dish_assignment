import AsyncStorage from "@react-native-community/async-storage";
import { STORAGE_KEY } from "../constants/Constant";


export const getUsersData = async () => {
    try {
        const db = await AsyncStorage.getItem(STORAGE_KEY)
        if (db !== null) {
          const dbUsers = JSON.parse(db).users;
          return dbUsers;
        }
      } catch (e) {
        alert('Failed to fetch the data from storage')
      }
}

export const getDishesData = async () => {
    try {
        const db = await AsyncStorage.getItem(STORAGE_KEY)
        if (db !== null) {
          const dbDishList = JSON.parse(db).dishList;
          return dbDishList;
        }
      } catch (e) {
        alert('Failed to fetch the data from storage')
      }
}