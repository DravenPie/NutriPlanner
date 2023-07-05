import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { SelectionScreenModal } from 'components/ProfileScreen/SelectionScreenModal';
import TextInput from '@components/ProfileScreen/TextInput'
import TextSelection from '@components/ProfileScreen/TextSelection';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';
import { verticalScale } from '@styles/metrics';

const ProfileScreen = ({ navigation }) => {
  const [userHeight, setUserHeight] = useState('');  // vai dar get na api
  const [userWeight, setUserWeight] = useState('');  // vai dar get na api
  const [userAge, setUserAge] = useState('');  // vai dar get na api
  const [userSex, setUserSex] = useState('');  // vai dar get na api
  const [userActivityLevel, setUserActivityLevel] = useState('');  // vai dar get na api
  const [userGoal, setUserGoal] = useState('');  // vai dar get na api
  const [userDietType, setUserDietType] = useState('');  // vai dar get na api
  const [isSexModalVisible, setSexModalVisible] = useState(false);

  const handleWeightChange = (text) => {
    // Expressão regular para validar o formato (###.##)
    const regex = /^\d{0,3}(\.\d{0,2})?$/;
    
    // Verifica se o valor corresponde à expressão regular
    if (regex.test(text)) setUserWeight(text);
  };

  const toggleModal = () => {
    setSexModalVisible(!isSexModalVisible);
  };

  return (
    <SafeAreaView style={[styles.container, debug]}>
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
          <View style={[styles.view, debug]}>
            <Text style={[styles.viewHeader, debug]}>Perfil</Text>

            <TextInput
              placeholder="Altura (cm)"
              value={userHeight}
              onChangeText={setUserHeight}
              maxLength={3}
              // onPressOut={}
            />

            <TextInput
              placeholder="Peso (kg)"
              value={userWeight}
              onChangeText={handleWeightChange}
              // onPressOut={}
            />

            <TextInput
              placeholder="Idade"
              value={userAge}
              onChangeText={setUserAge}
              maxLength={3}
              // onPressOut={}
            />

            <TextSelection
              placeholder="Sexo"
              value={userSex}
              onPress={() => { toggleModal() }}
            />

            <TextSelection
              placeholder="Nível de atividade"
              value={userActivityLevel}
              onPress={() => {
                navigation.navigate('ActivityLevelScreen', {
                  params: { 
                    name: 'activityLevel',
                    itemList: [
                      ['Baixo', 'Pouquíssimo exercício ou nenhum'],
                      ['Moderado', 'Pouco exercício, 1 a 3 vezes por semana'],
                      ['Alto', 'Exercício moderado, 3 a 5 vezes por semana'],
                      ['Muito alto', 'Exercício intenso, 6 a 7 vezes por semana'],
                      ['Hiperativo', 'Exercício muito intenso, atividade física, 2 horas ou mais']
                    ],
                  },
                });
              }}
            />

            <TextSelection
              placeholder="Objetivo"
              value={userGoal}
              onPress={() => {
                navigation.navigate('GoalScreen', {
                  params: { 
                    name: 'goal',
                    itemList: [
                      ['Perder peso', 'Diminuir os requisitos calóricos em 20%'],
                      ['Perder peso lentamente', 'Diminuir os requisitos calóricos em 10%'],
                      ['Manter peso', 'Não alterar os requisitos calóricos'],
                      ['Aumentar o peso lentamente', 'Aumentar os requisitos calóricos em 10%'],
                      ['Aumentar o peso', 'Aumentar os requisitos calóricos em 20%']
                    ],
                  },
                });
              }}
            />

            <TextSelection
              placeholder="Tipo de dieta"
              value={userDietType}
              onPress={() => {
                navigation.navigate('DietTypeScreen', {
                  params: { 
                    name: 'dietType',
                    itemList: [
                      ['Padrão', '50% Carboidratos, 20% Proteínas, 30% Gorduras'],
                      ['Equilibrado', '50% Carboidratos, 25% Proteínas, 25% Gorduras'],
                      ['Pobre em gorduras', '60% Carboidratos, 25% Proteínas, 15% Gorduras'],
                      ['Rico em proteínas', '25% Carboidratos, 40% Proteínas, 35% Gorduras'],
                      ['Cetogénica', '5% Carboidratos, 30% Proteínas, 65% Gorduras']
                    ],
                  },
                });
              }}
            />

          </View>

          <View style={[styles.view, debug]}>
            <Text style={[styles.viewHeader, debug]}>Resultados</Text>

            <TextInput
              placeholder="Taxa Metabólica Basal"
              value={''}  // vai dar get na api
              editable={false}
              displayColor={colors.darkWhite}
            />

            <TextInput
              placeholder="Índice de Massa Corporal"
              value={''}  // vai dar get na api
              editable={false}
              displayColor={colors.darkWhite}
            />

            <TextInput
              placeholder="Requisitos de Água (ml)"
              value={''}  // vai dar get na api
              editable={false}
              displayColor={colors.darkWhite}
            />

            <TextInput
              placeholder="Requisitos Calóricos (kcal)"
              value={''}  // vai dar get na api
              editable={false}
              displayColor={colors.darkWhite}
            />

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <SelectionScreenModal
        name="sex"
        labelList={['Masculino', 'Feminino']}
        isVisible={isSexModalVisible}
        onToggleModal={toggleModal}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen;
