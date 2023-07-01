import { SafeAreaView, Text, View } from 'react-native';

import Button from '@components/AuthenticationScreens/Button';
import { Icon } from 'react-native-elements';
import TextInput from '@components/AuthenticationScreens/TextInput'
import { colors } from '@styles/colors';
import styles from './styles';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [iconEye, setIconEye] = useState('eye-slash');

  const secureTextToggleState = () => {
    setSecureText(secureText === true ? false : true);
    setIconEye(iconEye === 'eye-slash' ? 'eye' : 'eye-slash');
  };

  return (
    <SafeAreaView style={[styles.container, styles.debug]}>
      <View style={[styles.header, styles.debug]}>
        <Text style={[styles.headerText, styles.debug]}>Login</Text>
      </View>

      <View style={[styles.formView, styles.debug]}>
        <View style={[{ width: '100%' }, styles.debug]}>
          <TextInput
            leftIcon={
              <Icon
                name="envelope"
                type="font-awesome"
                size={15}
                color={colors.lightGrey}
                style={styles.debug}
              />
            }
            leftIconContainerStyle={[styles.inputIcon, styles.debug]}

            label="E-mail"
            placeholder="Digite seu e-mail"

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
                color={colors.lightGrey}
                style={styles.debug}
              />
            }
            leftIconContainerStyle={[styles.inputIcon, styles.debug]}
            rightIcon={
              <Icon
                name={iconEye}
                type="font-awesome"
                size={20}
                color={colors.lightGrey}
                style={styles.debug}
                onPress={() => { secureTextToggleState() }}
              />
            }
            rightIconContainerStyle={[styles.inputIcon, styles.debug]}

            label="Senha"
            placeholder="Digite sua senha"

            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
        </View>

        <Button title={"Entrar"} navigateTo={() => { navigation.navigate('Home') }} />
      </View>

      <View style={[styles.footer, styles.debug]}>
        <Text style={[styles.footerText, styles.debug]}>
          Não tem uma conta? <Text
            style={[styles.footerTextSpam, styles.debug]}
            onPress={() => { navigation.navigate('SignUpScreen') }}
          >Inscreva-se</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;
