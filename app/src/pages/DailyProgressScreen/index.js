import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';
import { useEffect, useState } from 'react';

import Button from '@components/General/Button';
import ProgressCircle from 'progress-circle-react-native';
import { colors } from '@styles/colors';
import { moderateScale } from 'styles/metrics';
import styles from './styles';

const DailyProgressScreen = ({ navigation }) => {
  const [progressData, setProgressData] = useState({
    calorieConcluded: 10000,
    calorieRemaining: 0,
    calorieGoal: 0,

    carbConcluded: 10000,
    carbRemaining: 0,
    carbGoal: 0,

    protConcluded: 10000,
    protRemaining: 0,
    protGoal: 0,

    fatConcluded: 10000,
    fatRemaining: 0,
    fatGoal: 0,

    waterConcluded: 10000,
    waterRemaining: 0,
    waterGoal: 10000,
  });

  useEffect(() => {    // inicializa os dados
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.post('URL_DO_SERVIDOR', token);
    //       const data = response.data;
    //       setProgressData(data.progressData);
    //     } catch (error) {
    //       console.error('Erro ao fazer a solicitação ProfileScreen:', error);
    //     }
    //   };

    //   fetchData();

    // setProgressData({});
  }, []);

  const handleChange = (fieldName, value, setData) => {
    setData(previous => ({
      ...previous,
      [fieldName]: value
    }));
  };

  const getProgress = (concluded, remaining) => {
    if (concluded !== undefined && remaining !== undefined) {
      return (concluded / (concluded + remaining)) * 100;
    }
    return 0;
  }

  const onSubmitAddProgress = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={[styles.view, debug]}>
      <ScrollView
        style={[{ width: '100%' }, debug]}
        contentContainerStyle={[{ justifyContent: 'center' }, debug]}
        decelerationRate={0.9}
      >
        <Text style={[styles.headerText, debug]}>Progresso Diário</Text>

        <View style={[styles.container, debug]}>
          <Text style={[styles.containerHeaderText, debug]}>Calorias</Text>
          <View style={[styles.contentContainer, styles.debug]}>
            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Consumidas</Text>
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>{progressData.calorieConcluded} Kcal</Text>
            </View>

            <View style={debug}>
              <ProgressCircle
                percent={getProgress(
                  progressData.calorieConcluded,
                  progressData.calorieRemaining
                )}
                radius={40}
                borderWidth={5}
                color={colors.powerYellow}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(16) }}>{
                  getProgress(
                    progressData.calorieConcluded,
                    progressData.calorieRemaining
                  )
                }%</Text>
              </ProgressCircle>
            </View>

            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Restantes</Text>
              <Text style={[styles.value, { color: colors.pastelRed }, debug]}>
                {progressData.calorieRemaining} Kcal
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.container, debug]}>
          <Text style={[styles.containerHeaderText, debug]}>Macros</Text>
          <View style={[styles.contentContainer, { ...padding(10, 20) }, styles.debug]}>
            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <ProgressCircle
                percent={getProgress(
                  progressData.carbConcluded,
                  progressData.carbRemaining
                )}
                radius={25}
                borderWidth={5}
                color={colors.powerRed}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(12) }}>{
                  getProgress(
                    progressData.carbConcluded,
                    progressData.carbRemaining
                  )
                }%</Text>
              </ProgressCircle>

              <View style={[{ alignItems: 'center', justifyContent: 'center' }, debug]}>
                <Text style={[styles.label, debug]}>Carboidratos</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  progressData.carbGoal
                }g</Text>
              </View>
            </View>

            <View style={[{ alignItems: 'center', justifyContent: 'center' }, debug]}>
              <ProgressCircle
                percent={getProgress(
                  progressData.protConcluded,
                  progressData.protRemaining
                )}
                radius={25}
                borderWidth={5}
                color={colors.powerRed}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(12) }}>{
                  getProgress(
                    progressData.protConcluded,
                    progressData.protRemaining
                  )
                }%</Text>
              </ProgressCircle>

              <View style={[{ alignItems: 'center', justifyContent: 'center' }, debug]}>
                <Text style={[styles.label, debug]}>Proteínas</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  progressData.protGoal
                }g</Text>
              </View>
            </View>

            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <ProgressCircle
                percent={getProgress(
                  progressData.fatConcluded,
                  progressData.fatRemaining
                )}
                radius={25}
                borderWidth={5}
                color={colors.powerRed}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(12) }}>{
                  getProgress(
                    progressData.fatConcluded,
                    progressData.fatRemaining
                  )
                }%</Text>
              </ProgressCircle>

              <View style={[{ alignItems: 'center', justifyContent: 'center' }, debug]}>
                <Text style={[styles.label, debug]}>Gorduras</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  progressData.fatGoal
                }g</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { ...padding(0, 0, 50, 0) }, debug]}>
          <Text style={[styles.containerHeaderText, debug]}>Água</Text>
          <View style={[styles.contentContainer, debug]}>
            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Consumo</Text>
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>{progressData.waterConcluded} ml</Text>
            </View>

            <View style={styles.debug}>
              <ProgressCircle
                percent={getProgress(
                  progressData.waterConcluded,
                  progressData.waterRemaining
                )}
                radius={40}
                borderWidth={5}
                color={colors.powerBlue}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(16) }}>{
                  getProgress(
                    progressData.waterConcluded,
                    progressData.waterRemaining
                  )
                }%</Text>
              </ProgressCircle>
            </View>

            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Meta</Text>
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>
                {progressData.waterGoal} ml
              </Text>
            </View>
          </View>
        </View>

        <Button
          title="ADICIONAR PROGRESSO"
          onPress={() => {
            navigation.navigate('LibraryScreen', {
              params: {
                isAddProgress: true,
                onSubmitAddProgress: onSubmitAddProgress,
              },
            });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DailyProgressScreen;
