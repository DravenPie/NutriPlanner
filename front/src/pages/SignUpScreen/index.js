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
  firstName: yup.string()
    .required('Campo obrigatório'),

  lastName: yup.string()
    .required('Campo obrigatório'),

  email: yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),

  password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Campo obrigatório'),

  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required('Campo obrigatório'),
});

const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const handleSignIn = async (data) => {  // realizar cadastro
    navigation.navigate('LoginScreen');
  };

  const [secureText, setSecureText] = useState(true);
  const secureTextToggleState = () => {
    setSecureText(secureText === true ? false : true);
  };

  return (
    <SafeAreaView style={[styles.container, debug]}>
      <View style={[styles.header, debug]}>
        <Text style={[styles.headerText, debug]}>Sign Up</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={verticalScale(80)}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          <View style={[styles.formView, debug]}>
            <View style={[{ width: '100%' }, debug]}>
              <Controller
                control={control}
                name='firstName'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Nome"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="default"
                    errorMessage={
                      errors.firstName && errors.firstName?.message
                    }
                    inputContainerStyle={errors.firstName && { borderColor: colors.red }}
                  />
                )}
              />

              <Controller
                control={control}
                name='lastName'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Sobrenome"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="default"
                    errorMessage={
                      errors.lastName && errors.lastName?.message
                    }
                    inputContainerStyle={errors.lastName && { borderColor: colors.red }}
                  />
                )}
              />

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

              <Controller
                control={control}
                name='confirmPassword'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    leftIcon={<LockIcon size={20} color={colors.darkGrey} />}
                    rightIcon={<EyeIcon active={!secureText} size={20}
                        color={colors.darkGrey} onPress={secureTextToggleState} />}
                    placeholder="Confirme sua senha"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={secureText}
                    keyboardType="default"
                    errorMessage={
                      errors.confirmPassword && errors.confirmPassword?.message
                    }
                    inputContainerStyle={errors.confirmPassword && { borderColor: colors.red }}
                  />
                )}
              />
            </View>

            <Button title={"Continuar"} onPress={handleSubmit(handleSignIn)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default SignUpScreen;
