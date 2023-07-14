import { ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';
import { getDailyProgress, initializeDailyProgress, postDailyProgress } from '../../../api';
import { moderateScale, verticalScale } from 'styles/metrics';
import { useCallback, useState } from 'react';

import Button from '@components/General/Button';
import ProgressCircle from 'progress-circle-react-native';
import { colors } from '@styles/colors';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

/**
 * DailyProgressScreen component
 * @param {object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} - DailyProgressScreen component
 */
const DailyProgressScreen = ({ navigation }) => {
  const [progressData, setProgressData] = useState({});

  useFocusEffect(useCallback(() => {
    const fetchData = async () => {
      try {
        const dailyProgress = await getDailyProgress();
        if (dailyProgress !== undefined) setProgressData(dailyProgress);
      } catch (error) {
        console.error('init dados dailyProgress:', error);
      }
    };

    fetchData();
  }, []));

  const getProgress = (concluded, remaining) => {
    if (concluded > 0 && remaining >= 0) {
      return parseInt(((concluded / (concluded + remaining)) * 100).toFixed(0));
    }

    if (concluded > 0 && remaining <= 0) return 100;

    return 0;
  }

  const onSubmitAddProgress = async (data) => {
    try {
      const dailyProgress = await postDailyProgress(data);
      setProgressData(dailyProgress);
    } catch (error) {
      console.error('post dados dailyProgress:', error);
    }
  };

  return (
    <View style={[styles.view, debug]}>
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
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>{
                progressData.kcalConcluded && progressData.kcalConcluded.toFixed(0)
              } Kcal</Text>
            </View>

            <View style={debug}>
              <ProgressCircle
                percent={getProgress(
                  progressData.kcalConcluded,
                  progressData.kcalRemaining
                )}
                radius={40}
                borderWidth={5}
                color={colors.powerYellow}
                shadowColor={colors.lightGrey}
                bgColor={colors.white}
              >
                <Text style={{ fontSize: moderateScale(16) }}>{
                  getProgress(
                    progressData.kcalConcluded,
                    progressData.kcalRemaining
                  )
                }%</Text>
              </ProgressCircle>
            </View>

            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Restantes</Text>
              <Text style={[styles.value, { color: colors.pastelRed }, debug]}>{
                progressData.kcalRemaining && progressData.kcalRemaining.toFixed(0)
              } Kcal</Text>
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
                  progressData.carbGoal && progressData.carbGoal.toFixed(0)
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
                  progressData.protGoal && progressData.protGoal.toFixed(0)
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
                  progressData.fatGoal && progressData.fatGoal.toFixed(0)
                }g</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { ...padding(0, 0, 35, 0) }, debug]}>
          <Text style={[styles.containerHeaderText, debug]}>Água</Text>
          <View style={[styles.contentContainer, debug]}>
            <View style={[{ width: '30%', alignItems: 'center', justifyContent: 'center' }, debug]}>
              <Text style={[styles.label, debug]}>Consumo</Text>
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>{
                progressData.waterConcluded && progressData.waterConcluded.toFixed(0)
              } ml</Text>
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
              <Text style={[styles.value, { color: colors.pastelGreen }, debug]}>{
                progressData.waterGoal && progressData.waterGoal.toFixed(0)
              } ml</Text>
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

        <Button
          title="LIMPAR"
          style={{ marginTop: verticalScale(25) }}
          textStyle={{ color: colors.red }}
          onPress={() => {
            initializeDailyProgress(true);

            const setProgress = async () => {
              setProgressData(await getDailyProgress());
            }
            setProgress();            
          }}
        />
      </ScrollView>
    </View>
  )
}

export default DailyProgressScreen;
