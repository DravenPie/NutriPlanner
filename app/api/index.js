import AsyncStorage from '@react-native-async-storage/async-storage';

import { User, Food } from './classes';

// Retorna os dados armazenados do usuário, que são fornecidos na tela de Perfil
const getUserData = async () => {

  // A chave para acessar os dados guardados do usuário é "User". Como é apenas um usuário, não tem problema
  // Obtém os dados armazenados e os atribui à variável serializedUser
  const serializedUser = AsyncStorage.getItem('User');

  // Desserializa as informações obtidas e as atribui à variável deserializedUser
  const deserializedUser = JSON.parse(serializedUser);

  // Inicializa as variáves que serão retornadas pela função
  const height = parseInt(deserializedUser.height);
  const weight = parseInt(deserializedUser.weight);
  const age = parseInt(deserializedUser.age);
  const sex = deserializedUser.sex;
  const activityLevel = deserializedUser.activityLevel;
  const goal = deserializedUser.goal;
  const dietType = deserializedUser.dietType;
  const bmr = deserializedUser.bmr;
  const bmi = deserializedUser.bmi;
  const waterRequirements = deserializedUser.waterRequirements;
  const caloricRequirements = deserializedUser.caloricRequirements;

  // height: undefined,                // int ou undefined
  // weight: undefined,                // int ou undefined
  // age: undefined,                   // int ou undefined
  // sex: 'Masculino',                 // string
  // activityLevel: 'Baixo',           // string
  // goal: 'Perder peso',              // string
  // dietType: 'Padrão',               // string
  // bmr: undefined,                   // int ou undefined
  // bmi: undefined,                   // int ou undefined
  // waterRequirements: undefined,     // int ou undefined
  // caloricRequirements: undefined,   // int ou undefined

  // Retorna um vetor com as info solicitadas
  return [height,
    weight,
    age,
    sex,
    activityLevel,
    goal,
    dietType,
    bmr,
    bmi,
    waterRequirements,
    caloricRequirements]

}

// Dados os parâmetros fornecidos, atualiza os dados armazenados do usuário e retorna um vetor com os dados atualizados
const postUserData = async ({
  height,            // int
  weight,            // int
  age,               // int
  sex,               // string
  activityLevel,     // string
  goal,              // string
  dietType           // string
}) => {

  // Instancia um usuário para serializá-lo e armazenar em um JSON
  const user = new User(
    height,
    weight,
    age,
    sex,
    activityLevel,
    goal,
    dietType);

  // manipula os dados e devolve eles atualizados

  // Converte o usuário em um JSON para que seja possível armazenar seus dados, já que AsyncStorage só trabalha com string
  const serializedUser = JSON.stringify(user);

  // A chave para acessar os dados guardados do usuário é "User". Como é apenas um usuário, não tem problema
  // Sobrescreve os dados do usuário que estiverem escritos, atualizando-os
  AsyncStorage.mergeItem('User', serializedUser);

  // height: undefined,                // int
  // weight: undefined,                // int
  // age: undefined,                   // int
  // sex: 'Masculino',                 // string
  // activityLevel: 'Baixo',           // string
  // goal: 'Perder peso',              // string
  // dietType: 'Padrão',               // string
  // bmr: undefined,                   // int
  // bmi: undefined,                   // int
  // waterRequirements: undefined,     // int
  // caloricRequirements: undefined,   // int

  // Retorna um vetor com as info atualizadas
  return [
    user.getHeight(),
    user.getWeight(),
    user.getAge(),
    user.getSex(),
    user.getActivityLevel(),
    user.getGoal(),
    user.getDietType(),
    user.getBmr(),
    user.getBmi(),
    user.getWaterRequirements(),
    user.getCaloricRequirements()
  ]
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
