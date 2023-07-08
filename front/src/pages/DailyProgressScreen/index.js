import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';
import { useEffect, useState } from 'react';

import Button from '@components/General/Button';
import ProgressCircle from 'react-native-progress-circle'
import { colors } from '@styles/colors';
import { moderateScale } from 'styles/metrics';
import styles from './styles';

const DailyProgressScreen = ({ navigation }) => {
  const [progressData, setProgressData] = useState({
    calorieConcluded: 10000,
    calorieRemaining: 0,

    carbConcluded: 10000,
    carbRemaining: 0,

    protConcluded: 10000,
    protRemaining: 0,

    fatConcluded: 10000,
    fatRemaining: 0,

    waterConcluded: 10000,
    waterRemaining: 0,
  });

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

  const getGoal = (concluded, remaining) => concluded + remaining;

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

  return (
    <SafeAreaView style={styles.view}>
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

            <View>
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

        <View style={styles.container}>
          <Text style={styles.containerHeaderText}>Macros</Text>
          <View style={[styles.contentContainer, { ...padding(10, 20) }, styles.debug]}>
            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
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

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.label, debug]}>Carboidratos</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  getGoal(progressData.carbConcluded, progressData.carbRemaining)
                }g</Text>
              </View>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.label, debug]}>Proteínas</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  getGoal(progressData.protConcluded, progressData.protRemaining)
                }g</Text>
              </View>
            </View>

            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
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

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.label, debug]}>Gorduras</Text>
                <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>Meta: {
                  getGoal(progressData.fatConcluded, progressData.fatRemaining)
                }g</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.containerHeaderText}>Água</Text>
          <View>
            <View></View>

            <View></View>

            <View></View>
          </View>
        </View>

        <Button
          title="ADICIONAR PROGRESSO"
        // onPress={() => { toggleModal() }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DailyProgressScreen;
