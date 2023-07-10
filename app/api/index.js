import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyProgress from './models/DailyProgress';
import User from './models/User';

const [userToken, foodListToken, dailyProgressToken] = ['User', 'FoodList', 'DailyProgress'];

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

const getUserData = async () => {
  try {
    const user = await AsyncStorage.getItem(userToken);
    return user !== null ? JSON.parse(user) : undefined;
  } catch (error) {
    console.log('getUserData:', error);
  }

  return undefined;
}

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

const filterFood = (search, food) => {
  const normalizeTerm = (term) => {
    return term.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  return normalizeTerm(food.name).includes(normalizeTerm(search));
}

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

const postFood = async (data) => {
  try {
    if (data !== undefined) {
      const foodList = await getFoodList('');
      data.id = (foodList.length !== 0)
        ? foodList[foodList.length - 1].id + 1 : 1;

      const newFoodList = [...foodList, data].sort((a, b) => a.name.localeCompare(b.name));
      await AsyncStorage.setItem(foodListToken, JSON.stringify(newFoodList));

      return newFoodList;
    }
  } catch (error) {
    console.log('postFood:', error);
  }

  return undefined;
}

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

const getDailyProgress = async () => {
  try {
    const dailyProgress = await AsyncStorage.getItem(dailyProgressToken);
    return dailyProgress !== null ? JSON.parse(dailyProgress) : undefined;
  } catch (error) {
    console.log('getDailyProgress:', error);
  }

  return undefined;
}

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
