const DailyProgress = ({ dailyProgress, food, user }) => {
  if (user !== undefined) {
    if (user.height === undefined) return {
      kcalConcluded: 0,
      kcalRemaining: 0,
      kcalGoal: 0,

      carbConcluded: 0,
      carbRemaining: 0,
      carbGoal: 0,

      protConcluded: 0,
      protRemaining: 0,
      protGoal: 0,

      fatConcluded: 0,
      fatRemaining: 0,
      fatGoal: 0,

      waterConcluded: 0,
      waterRemaining: 0,
      waterGoal: 0,
    };

    const kcal = kcalRemaining(user);
    return {
      kcalConcluded: 0,
      kcalRemaining: kcal,
      kcalGoal: kcal,

      carbConcluded: 0,
      carbRemaining: macrosRemaining(user, 'carb', kcal),
      carbGoal: macrosRemaining(user, 'carb', kcal),

      protConcluded: 0,
      protRemaining: macrosRemaining(user, 'prot', kcal),
      protGoal: macrosRemaining(user, 'prot', kcal),

      fatConcluded: 0,
      fatRemaining: macrosRemaining(user, 'fat', kcal),
      fatGoal: macrosRemaining(user, 'fat', kcal),

      waterConcluded: 0,
      waterRemaining: user.waterRequirements,
      waterGoal: user.waterRequirements,
    };
  }

  if (food.id === 0) {
    dailyProgress.waterConcluded += food.quantity;
    dailyProgress.waterRemaining -= food.quantity;
    return dailyProgress;
  }

  dailyProgress.kcalConcluded += food.kcal;
  dailyProgress.kcalRemaining -= food.kcal;

  dailyProgress.carbConcluded += food.carb;
  dailyProgress.carbRemaining -= food.carb;

  dailyProgress.protConcluded += food.prot;
  dailyProgress.protRemaining -= food.prot;

  dailyProgress.fatConcluded += food.fat;
  dailyProgress.fatRemaining -= food.fat;

  return dailyProgress;
}

const kcalRemaining = (user) => {
  return parseInt({
    'Perder peso': user.caloricRequirements * 0.8,
    'Perder peso lentamente': user.caloricRequirements * 0.9,
    'Manter peso': user.caloricRequirements,
    'Aumentar o peso lentamente': user.caloricRequirements * 1.1,
    'Aumentar o peso': user.caloricRequirements * 1.2,
  }[user.goal].toFixed(0));
}

const macrosRemaining = (user, macro, kcal) => {
  const value = kcal * {
    'Padrão': {
      'carb': 0.5 / 4,
      'prot': 0.2 / 4,
      'fat': 0.3 / 9,
    },
    'Equilibrado': {
      'carb': 0.5 / 4,
      'prot': 0.25 / 4,
      'fat': 0.25 / 9,
    },
    'Pobre em gorduras': {
      'carb': 0.6 / 4,
      'prot': 0.25 / 4,
      'fat': 0.15 / 9,
    },
    'Rico em proteínas': {
      'carb': 0.25 / 4,
      'prot': 0.4 / 4,
      'fat': 0.35 / 9,
    },
    'Cetogénica': {
      'carb': 0.05 / 4,
      'prot': 0.3 / 4,
      'fat': 0.65 / 9,
    },
  }[user.dietType][macro]

  return parseInt(value.toFixed(0));
}

export default DailyProgress;
