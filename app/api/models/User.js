const User = ({ height, weight, age, sex, activityLevel, goal, dietType }) => {
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

const basalMetabolicRate = (height, weight, age, sex) => {
  let bmr = {
    'Masculino': 66.500 + (13.750 * weight) + (5.003 * height) - (6.755 * age),
    'Feminino': 665.100 + (9.563 * weight) + (1.850 * height) - (4.676 * age),
  }[sex];

  return parseInt(bmr.toFixed(0));
};

const bodyMassIndex = (height, weight) => {
  return parseFloat( (weight / ((height / 100) * (height / 100))).toFixed(2) );
};

const waterRequirements = (weight) => {
  return 35 * weight;
};

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