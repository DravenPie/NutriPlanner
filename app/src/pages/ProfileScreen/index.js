import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { getUserData, postUserData } from '../../../api';
import { moderateScale, verticalScale } from '@styles/metrics';
import { useEffect, useState } from 'react';

import Button from 'components/ProfileScreen/Button';
import { LogBox } from 'react-native';
import SelectionScreenModal from '@components/ProfileScreen/SelectionScreenModal';
import TextInput from '@components/ProfileScreen/TextInput'
import TextSelection from '@components/ProfileScreen/TextSelection';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

/**
 * Schema for validating user data when registering.
 */
const schema = yup.object({
  height: yup.number().positive().required(),
  weight: yup.number().positive().required(),
  age: yup.number().positive().required(),
});

/**
 * ProfileScreen component
 * @param {object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} - ProfileScreen component
 */
const ProfileScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      height: undefined,
      weight: undefined,
      age: undefined,
      sex: 'Masculino',
      activityLevel: 'Baixo',
      goal: 'Perder peso',
      dietType: 'Padrão',
    },
    resolver: yupResolver(schema),
  });

  const [sex, basalMetabolicRate, bodyMassIndex, waterRequirements,
    caloricRequirements] = watch(['sex', 'basalMetabolicRate', 'bodyMassIndex',
      'waterRequirements', 'caloricRequirements']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData();
        if (user !== undefined) reset(user);
      } catch (error) {
        console.error('init dados user:', error);
      }
    };

    fetchData();
  }, []);

  const handlePostSubmit = async (data) => {
    try {
      const user = await postUserData(data);
      reset(user);
    } catch (error) {
      console.error('post dados user:', error);
    }
  };

  const handleWeightChange = (value, set) => {
    // Expressão regular para validar o formato (###.##)
    const regex = /^\d{0,3}(\.\d{0,2})?$/;

    // Verifica se o valor corresponde à expressão regular
    if (regex.test(value)) set(value);
  };

  const [isSexModalVisible, setSexModalVisible] = useState(false);
  const toggleModal = () => {
    setSexModalVisible(!isSexModalVisible);
  };

  return (
    <View style={[styles.container, debug]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={verticalScale(110)}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={[styles.view, debug]}>
              <Text style={[styles.viewHeader, debug]}>Perfil</Text>

              <View style={styles.mainContainer}>
                <Controller
                  control={control}
                  name="height"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      placeholder="Altura (cm)"
                      value={value && String(value)}
                      onChangeText={onChange}
                      maxLength={3}
                      error={errors.height}
                      containerStyle={{
                        borderTopLeftRadius: moderateScale(5),
                        borderTopRightRadius: moderateScale(5),
                      }}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="weight"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      placeholder="Peso (kg)"
                      value={value && String(value)}
                      onChangeText={(data) => { handleWeightChange(data, onChange) }}
                      error={errors.weight}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="age"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      placeholder="Idade"
                      value={value && String(value)}
                      onChangeText={onChange}
                      maxLength={3}
                      error={errors.age}
                    />
                  )}
                />

                <TextSelection
                  placeholder="Sexo"
                  value={sex}
                  onPress={() => { toggleModal() }}
                />

                <Controller
                  control={control}
                  name="sex"
                  render={({ field: { onChange, value } }) => (
                    <SelectionScreenModal
                      labelList={['Masculino', 'Feminino']}
                      isVisible={isSexModalVisible}
                      onToggleModal={toggleModal}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="activityLevel"
                  render={({ field: { onChange, value } }) => (
                    <TextSelection
                      placeholder="Nível de atividade"
                      value={value}
                      onPress={() => {
                        navigation.navigate('ActivityLevelScreen', {
                          params: {
                            itemList: [
                              ['Baixo', 'Pouquíssimo exercício ou nenhum'],
                              ['Moderado', 'Pouco exercício, 1 a 3 vezes por semana'],
                              ['Alto', 'Exercício moderado, 3 a 5 vezes por semana'],
                              ['Muito alto', 'Exercício intenso, 6 a 7 vezes por semana'],
                              ['Hiperativo', 'Exercício muito intenso, atividade física, 2 horas ou mais']
                            ],
                            value: value,
                            onChange: onChange,
                          },
                        });
                      }}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="goal"
                  render={({ field: { onChange, value } }) => (
                    <TextSelection
                      placeholder="Objetivo"
                      value={value}
                      onPress={() => {
                        navigation.navigate('GoalScreen', {
                          params: {
                            itemList: [
                              ['Perder peso', 'Diminuir os requisitos calóricos em 20%'],
                              ['Perder peso lentamente', 'Diminuir os requisitos calóricos em 10%'],
                              ['Manter peso', 'Não alterar os requisitos calóricos'],
                              ['Aumentar o peso lentamente', 'Aumentar os requisitos calóricos em 10%'],
                              ['Aumentar o peso', 'Aumentar os requisitos calóricos em 20%']
                            ],
                            value: value,
                            onChange: onChange,
                          },
                        });
                      }}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="dietType"
                  render={({ field: { onChange, value } }) => (
                    <TextSelection
                      placeholder="Tipo de dieta"
                      value={value}
                      onPress={() => {
                        navigation.navigate('DietTypeScreen', {
                          params: {
                            itemList: [
                              ['Padrão', '50% Carboidratos, 20% Proteínas, 30% Gorduras'],
                              ['Equilibrado', '50% Carboidratos, 25% Proteínas, 25% Gorduras'],
                              ['Pobre em gorduras', '60% Carboidratos, 25% Proteínas, 15% Gorduras'],
                              ['Rico em proteínas', '25% Carboidratos, 40% Proteínas, 35% Gorduras'],
                              ['Cetogénica', '5% Carboidratos, 30% Proteínas, 65% Gorduras']
                            ],
                            value: value,
                            onChange: onChange,
                          },
                        });
                      }}
                      containerStyle={{
                        borderBottomWidth: 0,
                        borderBottomLeftRadius: moderateScale(5),
                        borderBottomRightRadius: moderateScale(5),
                      }}
                    />
                  )}
                />
              </View>
            </View>

            <View style={[styles.view, debug]}>
              <Text style={[styles.viewHeader, debug]}>Resultados</Text>

              <View style={styles.mainContainer}>
                <TextInput
                  placeholder="Taxa Metabólica Basal"
                  value={basalMetabolicRate && String(basalMetabolicRate)}
                  editable={false}
                  inputStyle={{ backgroundColor: colors.darkWhite }}
                  containerStyle={{
                    borderTopLeftRadius: moderateScale(5),
                    borderTopRightRadius: moderateScale(5),
                  }}
                />

                <TextInput
                  placeholder="Índice de Massa Corporal"
                  value={bodyMassIndex && String(bodyMassIndex)}
                  editable={false}
                  inputStyle={{ backgroundColor: colors.darkWhite }}
                />

                <TextInput
                  placeholder="Requisitos de Água (ml)"
                  value={waterRequirements && String(waterRequirements)}
                  editable={false}
                  inputStyle={{ backgroundColor: colors.darkWhite }}
                />

                <TextInput
                  placeholder="Requisitos Calóricos (kcal)"
                  value={caloricRequirements && String(caloricRequirements)}
                  editable={false}
                  inputStyle={{ backgroundColor: colors.darkWhite }}
                  containerStyle={{
                    borderBottomWidth: 0,
                    borderBottomLeftRadius: moderateScale(5),
                    borderBottomRightRadius: moderateScale(5),
                  }}
                />
              </View>
            </View>
            <Button title="SALVAR" onPress={handleSubmit(handlePostSubmit)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ProfileScreen;
