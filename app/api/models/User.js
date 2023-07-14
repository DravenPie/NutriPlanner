/**
 * Creates a user based on the provided inputs.
 *
 * @param {number} height - The user's height.
 * @param {number} weight - The user's weight.
 * @param {number} age - The user's age.
 * @param {string} sex - The user's sex.
 * @param {string} activityLevel - The user's activity level.
 * @param {string} goal - The user's goal.
 * @param {string} dietType - The user's diet type.
 * @returns {object} - The calculated user data.
 */
const User = ({ height, weight, age, sex, activityLevel, goal, dietType }) => {
  // If any of the required inputs is missing, return default user data
  if (!(height && weight && age && sex && activityLevel && goal && dietType)) return {
    height: undefined,
    weight: undefined,
    age: undefined,
    sex: 'Masculino',
    activityLevel: 'Baixo',
    goal: 'Perder peso',
    dietType: 'Padrão',
    basalMetabolicRate: undefined,
    bodyMassIndex: undefined,
    waterRequirements: undefined,
    caloricRequirements: undefined,
  };

  const bmr = basalMetabolicRate(height, weight, age, sex);
  return {
    height: height,
    weight: weight,
    age: age,
    sex: sex,
    activityLevel: activityLevel,
    goal: goal,
    dietType: dietType,
    basalMetabolicRate: parseFloat(bmr.toFixed(2)),
    bodyMassIndex: parseFloat(bodyMassIndex(height, weight).toFixed(2)),
    waterRequirements: waterRequirements(weight),
    caloricRequirements: parseFloat(caloricRequirements(activityLevel, bmr).toFixed(2)),
  }
}

/**
 * Calculates the Basal Metabolic Rate (BMR) based on height, weight, age, and sex.
 *
 * @param {number} height - The user's height.
 * @param {number} weight - The user's weight.
 * @param {number} age - The user's age.
 * @param {string} sex - The user's sex.
 * @returns {number} - The calculated BMR.
 */
const basalMetabolicRate = (height, weight, age, sex) => {
  let bmr = {
    'Masculino': 66.500 + (13.750 * weight) + (5.003 * height) - (6.755 * age),
    'Feminino': 665.100 + (9.563 * weight) + (1.850 * height) - (4.676 * age),
  }[sex];

  return parseInt(bmr.toFixed(0));
};

/**
 * Calculates the Body Mass Index (BMI) based on height and weight.
 *
 * @param {number} height - The user's height.
 * @param {number} weight - The user's weight.
 * @returns {number} - The calculated BMI.
 */
const bodyMassIndex = (height, weight) => {
  return parseFloat( (weight / ((height / 100) * (height / 100))).toFixed(2) );
};

/**
 * Calculates the water requirements based on weight.
 *
 * @param {number} weight - The user's weight.
 * @returns {number} - The calculated water requirements.
 */
const waterRequirements = (weight) => {
  return 35 * weight;
};

/**
 * Calculates the caloric requirements based on activity level and BMR.
 *
 * @param {string} activityLevel - The user's activity level.
 * @param {number} bmr - The calculated Basal Metabolic Rate (BMR).
 * @returns {number} - The calculated caloric requirements.
 */
const caloricRequirements = (activityLevel, bmr) => {
  return parseInt({
    'Baixo': bmr * 1.200,
    'Moderado': bmr * 1.375,
    'Alto': bmr * 1.550,
    'Muito Alto': bmr * 1.725,
    'Hiperativo': bmr * 1.900,
  }[activityLevel].toFixed(0));
};

export default User;
