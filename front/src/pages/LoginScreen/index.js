import { EnvelopeIcon, EyeIcon, LockIcon } from '@components/Icons';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Button from '@components/AuthenticationScreens/Button';
import TextInput from '@components/AuthenticationScreens/TextInput'
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';
import { verticalScale } from '@styles/metrics';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const secureTextToggleState = () => {
    setSecureText(secureText === true ? false : true);
  };

  return (
    <SafeAreaView style={[styles.container, debug]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={verticalScale(25)}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          <View style={[styles.header, debug]}>
            <Text style={[styles.headerText, debug]}>Login</Text>
          </View>

          <View style={[styles.formView, debug]}>
            <View style={[{ width: '100%' }, debug]}>
              <TextInput
                leftIcon={ <EnvelopeIcon size={15} color={colors.darkGrey}/> }
                leftIconContainerStyle={[styles.inputIcon, debug]}

                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <TextInput
                leftIcon={ <LockIcon size={20} color={colors.darkGrey}/> }
                leftIconContainerStyle={[styles.inputIcon, debug]}
                rightIcon={
                  <EyeIcon
                    active={!secureText}
                    size={20}
                    color={colors.darkGrey}
                    onPress={() => { secureTextToggleState() }}
                  />
                }
                rightIconContainerStyle={[styles.inputIcon, debug]}

                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureText}
                keyboardType="default"
              />
            </View>

            <Button title={"Entrar"} navigateTo={() => { navigation.navigate('HomeScreen') }} />
          </View>

          <View style={[styles.footer, debug]}>
            <Text style={[styles.footerText, debug]}>
              Não tem uma conta? <Text
                style={[styles.footerTextSpam, debug]}
                onPress={() => { navigation.navigate('SignUpScreen') }}
              >Inscreva-se</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen;
