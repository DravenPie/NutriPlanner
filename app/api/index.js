import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyProgress from './models/DailyProgress';
import User from './models/User';

const [userToken, foodListToken, dailyProgressToken] = ['User', 'FoodList', 'DailyProgress'];

/**
 * Initializes user data by checking if it exists in AsyncStorage.
 * If user data doesn't exist, it creates default user data and stores it.
 */
const initializeUserData = async () => {
  try {
    const user = await getUserData();
    if (!user) {
      await postUserData({
        height: undefined,
        weight: undefined,
        age: undefined,
        sex: 'Masculino',
        activityLevel: 'Baixo',
        goal: 'Perder peso',
        dietType: 'Padrão',
      });
    }
  } catch (error) {
    console.log('initializeUserData:', error);
  }
};

/**
 * Retrieves user data from AsyncStorage.
 * @returns {Object|undefined} - The retrieved user data or undefined if it doesn't exist.
 */
const getUserData = async () => {
  try {
    const user = await AsyncStorage.getItem(userToken);
    return user !== null ? JSON.parse(user) : undefined;
  } catch (error) {
    console.log('getUserData:', error);
  }

  return undefined;
}

/**
 * Stores user data in AsyncStorage.
 * It also reset the daily progress.
 * @param {Object} data - The user data to be stored.
 * @returns {Object|undefined} - The stored user data or undefined if storing fails.
 */
const postUserData = async (data) => {
  try {
    const user = User(data);
    if (user !== undefined) {
      await AsyncStorage.setItem(userToken, JSON.stringify(user));
    }

    await initializeDailyProgress(true);
    return user;
  } catch (error) {
    console.log('postUserData:', error);
  }

  return undefined;
}

/**
 * Initializes the food list by checking if it exists in AsyncStorage.
 * If the food list doesn't exist, it initializes it with an empty array.
 */
const initializeFoodList = async () => {
  try {
    const foodList = await getFoodList();
    if (!foodList) {
      await AsyncStorage.setItem(foodListToken, JSON.stringify([]));
    }
  } catch (error) {
    console.log('initializeFoodList:', error);
  }
};

/**
 * Filters food items based on the search term.
 * @param {string} search - The search term to filter food items.
 * @param {Object} food - The food item to be filtered.
 * @returns {boolean} - Whether the food item matches the search term.
 */
const filterFood = (search, food) => {
  const normalizeTerm = (term) => {
    return term.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  return normalizeTerm(food.name).includes(normalizeTerm(search));
}

/**
 * Retrieves the food list from AsyncStorage and filters it based on the search term.
 * @param {string} search - The search term to filter the food list.
 * @returns {Array|undefined} - The filtered food list or undefined if it doesn't exist.
 */
const getFoodList = async (search) => {
  try {
    const foodList = await AsyncStorage.getItem(foodListToken);

    if (search !== '' && search !== undefined && foodList !== null) {
      return JSON.parse(foodList)
        .filter((food) => filterFood(search, food))
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    return foodList !== null
      ? JSON.parse(foodList).sort((a, b) => a.name.localeCompare(b.name))
      : undefined;
  } catch (error) {
    console.log('getFoodList:', error);
  }

  return undefined;
}

/**
 * Stores a food item in the food list in AsyncStorage.
 * It also generates a unique ID for the food item and sorts the food list.
 * @param {Object} data - The food item to be stored.
 * @returns {Array|undefined} - The updated food list or undefined if storing fails.
 */
const postFood = async (data) => {
  try {
    if (data !== undefined) {
      const foodList = await getFoodList('');
      data.id = Date.now().toString();

      const newFoodList = [...foodList, data].sort((a, b) => a.name.localeCompare(b.name));
      await AsyncStorage.setItem(foodListToken, JSON.stringify(newFoodList));

      return newFoodList;
    }
  } catch (error) {
    console.log('postFood:', error);
  }

  return undefined;
}

/**
 * Deletes a food item from the food list in AsyncStorage.
 * @param {Object} data - The food item to be deleted.
 * @returns {Array|undefined} - The updated food list or undefined if deleting fails.
 */
const deleteFood = async (data) => {
  try {
    if (data !== undefined) {
      const foodList = await getFoodList('');
      const newFoodList = foodList.filter(item => item.id !== data.id);
      await AsyncStorage.setItem(foodListToken, JSON.stringify(newFoodList));

      return newFoodList;
    }
  } catch (error) {
    console.log('deleteFood:', error);
  }

  return undefined;
}

/**
 * Initializes the daily progress if it doesn't exist.
 * It creates a new daily progress object based on the user data.
 * @param {boolean} flag - Indicates whether to force initialization even if daily progress exists.
 */
const initializeDailyProgress = async (flag) => {
  try {
    const dailyProgress = await getDailyProgress();
    const user = await getUserData();

    if (!dailyProgress && user || flag) {      
      const newDailyProgress = DailyProgress({
        user: user,
      });

      await AsyncStorage.setItem(dailyProgressToken, JSON.stringify(newDailyProgress));
    }
  } catch (error) {
    console.log('initializeDailyProgress:', error);
  }
};

/**
 * Retrieves the daily progress from AsyncStorage.
 * @returns {Object|undefined} - The retrieved daily progress or undefined if it doesn't exist.
 */
const getDailyProgress = async () => {
  try {
    const dailyProgress = await AsyncStorage.getItem(dailyProgressToken);
    return dailyProgress !== null ? JSON.parse(dailyProgress) : undefined;
  } catch (error) {
    console.log('getDailyProgress:', error);
  }

  return undefined;
}

/**
 * Stores the daily progress in AsyncStorage after updating it based on the food item.
 * @param {Object} data - The food item to update the daily progress.
 * @returns {Object|undefined} - The updated daily progress or undefined if storing fails.
 */
const postDailyProgress = async (data) => {
  try {
    const dailyProgress = await getDailyProgress();
    if (dailyProgress !== undefined) {

      const newDailyProgress = DailyProgress({
        dailyProgress: dailyProgress,
        food: data,
      });

      await AsyncStorage.setItem(dailyProgressToken, JSON.stringify(newDailyProgress));
      return newDailyProgress;
    }

    return dailyProgress;
  } catch (error) {
    console.log('postDailyProgress:', error);
  }

  return undefined;
}

export {
  initializeUserData,
  getUserData,
  postUserData,
  initializeFoodList,
  getFoodList,
  postFood,
  deleteFood,
  initializeDailyProgress,
  getDailyProgress,
  postDailyProgress,
};
