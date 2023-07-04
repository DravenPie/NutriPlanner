import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';

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

  const handleWeightChange = (text) => {
    // Expressão regular para validar o formato (###.##)
    const regex = /^\d{0,3}(\.\d{0,2})?$/;
    
    // Verifica se o valor corresponde à expressão regular
    if (regex.test(text)) setUserWeight(text);
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
              value={''}  // vai dar get na api
              // onPress={() => {
              //   navigation.navigate('SexSelectionScreen', {
              //     params: { 
              //       name: 'sex',
              //       itemList: [
              //         ['Masculino', undefined],
              //         ['Feminino', undefined]
              //       ],
              //     },
              //   });
              // }}
            />

            <TextSelection
              placeholder="Nível de atividade"
              value={''}  // vai dar get na api
            />

            <TextSelection
              placeholder="Objetivo"
              value={''}  // vai dar get na api
            />

            <TextSelection
              placeholder="Tipo de dieta"
              value={''}  // vai dar get na api
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
    </SafeAreaView>
  )
}

export default ProfileScreen;
