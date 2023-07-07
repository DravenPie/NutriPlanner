import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { EnvelopeIcon, EyeIcon, LockIcon } from '@components/General/Icons';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Button from '@components/AuthenticationScreens/Button';
import TextInput from '@components/AuthenticationScreens/TextInput';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';
import { verticalScale } from '@styles/metrics';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),

  password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Campo obrigatório')
});

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (data) => {  // realizar autenticação
    navigation.navigate('Home');
  };

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
              <Controller
                control={control}
                name='email'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    leftIcon={<EnvelopeIcon size={15} color={colors.darkGrey} />}
                    placeholder="E-mail"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    errorMessage={
                      errors.email && errors.email?.message
                    }
                    inputContainerStyle={errors.email && { borderColor: colors.red }}
                  />
                )}
              />

              <Controller
                control={control}
                name='password'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    leftIcon={<LockIcon size={20} color={colors.darkGrey} />}
                    rightIcon={<EyeIcon active={!secureText} size={20}
                        color={colors.darkGrey} onPress={secureTextToggleState} />}
                    placeholder="Senha"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={secureText}
                    keyboardType="default"
                    errorMessage={
                      errors.password && errors.password?.message
                    }
                    inputContainerStyle={errors.password && { borderColor: colors.red }}
                  />
                )}
              />
            </View>

            <Button title={"Entrar"} onPress={handleSubmit(handleSignIn)} />
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
