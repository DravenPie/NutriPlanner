import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Button from '@components/AuthenticationScreens/Button'
import { Icon } from 'react-native-elements'
import TextInput from '@components/AuthenticationScreens/TextInput'
import { colors } from '@styles/colors'
import styles from './styles';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [iconEye, setIconEye] = useState('eye-slash');

  const secureTextToggleState = () => {
    setSecureText(secureText === true ? false : true);
    setIconEye(iconEye === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  return (
    <SafeAreaView style={[styles.container, styles.debug]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={25}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, styles.debug]}
          decelerationRate={0.9}
        >
          <View style={[styles.header, styles.debug]}>
            <Icon
              name="arrow-left"
              type="feather"
              size={35}
              color={colors.darkGrey}
              containerStyle={[{ alignItems: 'flex-start' }, styles.debug]}
              onPress={() => { navigation.goBack() }}
            />
            <Text style={[styles.headerText, styles.debug]}>Sign Up</Text>
          </View>

          <View style={[styles.formView, styles.debug]}>
            <View style={[{ width: '100%' }, styles.debug]}>
              <TextInput
                placeholder="Nome"
                value={firstName}
                onChangeText={setFirstName}
                keyboardType="default"
              />

              <TextInput
                placeholder="Sobrenome"
                value={lastName}
                onChangeText={setLastName}
                keyboardType="default"
              />

              <TextInput
                leftIcon={
                  <Icon
                    name="envelope"
                    type="font-awesome"
                    size={15}
                    color={colors.darkGrey}
                    style={styles.debug}
                  />
                }
                leftIconContainerStyle={[styles.inputIcon, styles.debug]}

                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <TextInput
                leftIcon={
                  <Icon
                    name="lock"
                    type="font-awesome"
                    size={20}
                    color={colors.darkGrey}
                    style={styles.debug}
                  />
                }
                leftIconContainerStyle={[styles.inputIcon, styles.debug]}
                rightIcon={
                  <Icon
                    name={iconEye}
                    type="font-awesome"
                    size={20}
                    color={colors.darkGrey}
                    style={styles.debug}
                    onPress={() => { secureTextToggleState() }}
                  />
                }
                rightIconContainerStyle={[styles.inputIcon, styles.debug]}

                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
                keyboardType="default"
              />

              <TextInput
                leftIcon={
                  <Icon
                    name="lock"
                    type="font-awesome"
                    size={20}
                    color={colors.darkGrey}
                    style={styles.debug}
                  />
                }
                leftIconContainerStyle={[styles.inputIcon, styles.debug]}
                rightIcon={
                  <Icon
                    name={iconEye}
                    type="font-awesome"
                    size={20}
                    color={colors.darkGrey}
                    style={styles.debug}
                    onPress={() => { secureTextToggleState() }}
                  />
                }
                rightIconContainerStyle={[styles.inputIcon, styles.debug]}

                placeholder="Confirme sua senha"
                value={confirmedPassword}
                onChangeText={setConfirmedPassword}
                secureTextEntry={secureText}
                keyboardType="default"
              />
            </View>

            <Button title={"Continuar"} navigateTo={() => { navigation.navigate('LoginScreen') }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default SignUpScreen;
