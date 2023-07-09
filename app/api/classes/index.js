class User {
    constructor(height, weight, age, sex, activityLevel, goal, dietType) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.sex = sex;
        this.activityLevel = activityLevel;
        this.goal = goal;
        this.dietType = dietType;

        this.bmr = this.calcBmr(weight, height, age, sex, activityLevel);
        this.bmi = this.calcBmi(weight, height);
        this.waterRequirements = this.calcWaterRequirements(weight);
        this.caloricRequirements = this.calcCaloricRequirements(this.bmr, goal);
    }

    getHeight() { return this.height; }
    getWeight() { return this.weight; }
    getAge() { return this.age; }
    getSex() { return this.sex; }
    getActivityLevel() { return this.activityLevel; }
    getGoal() { return this.goal; }
    getDietType() { return this.dietType }
    getBmr() { return this.bmr }
    getBmi() { return this.bmi }
    getWaterRequirements() { return this.waterRequirements }
    getCaloricRequirements() { return this.caloricRequirements }

    setHeight(height) { this.height = height; }
    setWeight(weight) { this.weight = weight; }
    setAge(age) { this.age = age; }
    setSex(sex) { this.sex = sex; }
    setActivityLevel(activityLevel) { this.activityLevel = activityLevel; }
    setGoal(goal) { this.goal = goal; }
    setDietType(dietType) { this.dietType = dietType; }
    setBmr(bmr) { this.bmr = bmr; }
    setBmi(bmi) { this.bmi = bmi; }
    setWaterRequirements(waterRequirements) { this.waterRequirements = waterRequirements; }
    setCaloricRequirements(caloricRequirements) { this.caloricRequirements = caloricRequirements; }

    calcBmr(weight, height, age, sex, activityLevel) {
        try {
            if (sex === 'Masculino') {
                var bmr = 66.500 + (13.750 * weight) + (5.003 * height) - (6.755 * age)
            }
            else {
                var bmr = 665.100 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
            }
        } catch (error) {
            console.error(error);
        }


        switch (activityLevel) {
            case 'Baixo':
                // Baixo
                bmr += bmr * 1.200;
                break;
            case 'Moderado':
                // Moderado
                bmr += bmr * 1.375;
                break;
            case 'Alto':
                // Alto
                bmr += bmr * 1.550;
                break;
            case 'Muito alto':
                // Muito alto
                bmr += bmr * 1.725;
                break;
            case 'Hiperativo':
                // Hiperativo
                bmr += bmr * 1.900;
                break;
            default:
                console.log("Foi passado um parâmetro inválido no campo activityLevel da função calculaTaxaBasal")
                break;
        }

        return bmr;
    };

    calcBmi(weight, height) {
        try {
            bmi = weight / (height/100 * height/100); // Altura estava em cm, para converter para m, divide-se por 100
        } catch (error) {
            console.error(error);
        }
        return bmi
    };

    // OMS recomenda consumir weight*35 ml em média de água por dia
    calcWaterRequirements(weight) {
        try {
            waterRequirements = 35 * weight
        } catch (error) {
            console.error(error);
        }
        return waterRequirements
    };

    calcCaloricRequirements(bmr, goal) {
        try {
            var caloricRequirements = 0;
            switch (goal) {
                case 'Perder peso':
                    // Perder weight
                    caloricRequirements += bmr * 0.8;
                    break;
                case 'Perder peso lentamente':
                    // Perder weight lentamente
                    caloricRequirements += bmr * 0.9;
                    break;
                case 'Manter peso':
                    // Manter weight
                    caloricRequirements += bmr;
                    break;
                case 'Aumentar o peso lentamente':
                    // Aumentar weight lentamente
                    caloricRequirements += bmr * 1.1;
                    break;
                case 'Aumentar o peso':
                    // Aumentar weight
                    caloricRequirements += bmr * 1.2;
                    break;
                default:
                    console.log("Foi passado um parâmetro inválido no campo goal da função calculaReqCal")
                    break;
            }
        } catch (error) {
            console.error(error);
        }
        return caloricRequirements;
    };
}

class Food {
    constructor(id, name, kcal, quantity, carb, prot, fat) {
        this.id = id;
        this.name = name;
        this.kcal = kcal;
        this.quantity = quantity;
        this.carb = carb;
        this.prot = prot;
        this.fat = fat;
    }
}

export { User, Food };