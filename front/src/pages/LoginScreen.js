import { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Text, TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Input, Icon } from 'react-native-elements';
import set_padding from '../utils/utils';

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
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, /*styles.debug*/]}>
          <Text style={[styles.headerText, /*styles.debug*/]}>Login</Text>
        </View>
        <View style={[styles.formView, styles.debug]}>
          <Input
            containerStyle={[styles.credentialsContainer, styles.debug]}
            labelStyle={styles.credentialsLabel}
            inputContainerStyle={styles.credentialsInput}

            placeholder="Digite seu e-mail"
            leftIcon={
            <Icon
                name="envelope"
                type="font-awesome"
                size={RFPercentage(3)}
                color="#999"
              />
            }
            label="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Input
            containerStyle={[styles.credentialsContainer, styles.debug]}
            labelStyle={styles.credentialsLabel}
            inputContainerStyle={styles.credentialsInput}

            placeholder="Digite sua senha"
            leftIcon={
            <Icon
                name="lock"
                type="font-awesome"
                size={RFPercentage(4.3)}
                color="#999"
              />
            }
            rightIcon={
              <Icon
                  name={iconEye}
                  type="font-awesome"
                  size={RFPercentage(4.3)}
                  color="#999"
                  onPress={() => { secureTextToggleState() }}
                />
              }
            label="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    ...set_padding(5)
  },

  header: {
    justifyContent: 'flex-end',
    height: '10%',
  },
  headerText: {
    fontSize: RFPercentage(3.5),
  },

  formView: {
    height: '40%',
    paddingTop: '10%',
  },
  credentialsContainer: {
    ...set_padding(0),
    paddingBottom: 0
  },
  credentialsLabel: {
    fontSize: RFPercentage(2),
  },
  credentialsInput: {
    width: '100%',
    borderWidth: 1,
    ...set_padding(0, 3),
  },

  debug: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default LoginScreen;
