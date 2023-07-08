import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserData = async () => {

  return {
    height: undefined,                // int ou undefined
    weight: undefined,                // int ou undefined
    age: undefined,                   // int ou undefined
    sex: 'Masculino',                 // string
    activityLevel: 'Baixo',           // string
    goal: 'Perder peso',              // string
    dietType: 'Padrão',               // string
    bmr: undefined,                   // int ou undefined
    bmi: undefined,                   // int ou undefined
    waterRequirements: undefined,     // int ou undefined
    caloricRequirements: undefined,   // int ou undefined
  }
}

const postUserData = async ({
  height,            // int
  weight,            // int
  age,               // int
  sex,               // string
  activityLevel,     // string
  goal,              // string
  dietType           // string
}) => {

  // manipula os dados e devolve eles atualizados

  return {
    height: undefined,                // int
    weight: undefined,                // int
    age: undefined,                   // int
    sex: 'Masculino',                 // string
    activityLevel: 'Baixo',           // string
    goal: 'Perder peso',              // string
    dietType: 'Padrão',               // string
    bmr: undefined,                   // int
    bmi: undefined,                   // int
    waterRequirements: undefined,     // int
    caloricRequirements: undefined,   // int
  }
}

const getFoodList = async () => {

  return [{   // exemplo de lista com 1 item, pode ser vazia
    id: undefined,          // int
    name: undefined,        // string
    kcal: undefined,        // int
    quantity: undefined,    // int
    carb: undefined,        // int
    prot: undefined,        // int
    fat: undefined,         // int
  }]
}

const postFoodList = async ([{   // exemplo de lista com 1 item, pode ser vazia
  id,          // int
  name,        // string
  kcal,        // int
  quantity,    // int
  carb,        // int
  prot,        // int
  fat,         // int
}]) => {

  // manipula os dados e devolve eles atualizados

  return [{   // exemplo de lista com 1 item, pode ser vazia
    id: undefined,          // int
    name: undefined,        // string
    kcal: undefined,        // int
    quantity: undefined,    // int
    carb: undefined,        // int
    prot: undefined,        // int
    fat: undefined,         // int
  }]
}

export { getUserData, postUserData, getFoodList, postFoodList };
