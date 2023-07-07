import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import Button from '@components/General/Button';
import Modal from 'react-native-modal';
import { XIcon } from '@components/General/Icons';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required(),
  kcal: yup.number().positive().required(),
  quantity: yup.number().positive().required(),
  carb: yup.number().positive().required(),
  prot: yup.number().positive().required(),
  fat: yup.number().positive().required(),
});

const FoodDisplayModal = ({ isRegister, food, isVisible, onToggleModal, onSubmit }) => {
  const { control, handleSubmit, formState: { errors }, reset, getValues } = useForm({
    defaultValues: isRegister ?
      {
        id: undefined, name: undefined, kcal: undefined,
        quantity: 0, carb: undefined, prot: undefined, fat: undefined
      }
      : food,
    resolver: yupResolver(schema),
  });

  const itemList = [
    ['Calorias (Kcal)', 'kcal'],
    ['Quantidade (g)', 'quantity'],
    ['Carboidratos (g)', 'carb'],
    ['Proteínas (g)', 'prot'],
    ['Gorduras (g)', 'fat']
  ];

  return (
    <Modal
      style={[styles.modal, debug]}
      isVisible={isVisible}
      onBackdropPress={onToggleModal}
      transparent={true}
    >
      <View style={[styles.container, debug]}>
        <View style={[styles.header, debug]}>
          <XIcon
            containerStyle={[{ width: '15%' }, debug]}
            size={22}
            color={colors.white}
            onPress={onToggleModal}
          />
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.headerText,
                    debug
                  ]}
                  placeholder="Alimento"
                  placeholderTextColor={colors.lightWhite}
                  cursorColor={colors.white}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType='default'
                  editable={isRegister}
                />
              )}
            />
        </View>
        {itemList.map(([label, name], index) => (
          <View
            key={index}
            style={[styles.foodDisplay, debug]}
          >
            <Text style={[styles.foodDisplayText, debug]}>
              {label}
            </Text>
            <Controller
              control={control}
              name={name}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.foodDisplayInput,
                    isRegister ? { color: colors.black } : { color: colors.lightGrey },
                    errors[name] && { borderColor: colors.red },
                    debug
                  ]}
                  placeholder={isRegister ? 'Obrigatório' : undefined}
                  placeholderTextColor={colors.lightGrey}
                  cursorColor={colors.darkGrey}
                  textAlign='center'
                  value={value && String(value)}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType='number-pad'
                  editable={isRegister}
                />
              )}
            />
          </View>
        ))}

        {isRegister ?
          <Button
            title={'SALVAR'}
            onPress={(data) => {
              onToggleModal();
              return handleSubmit((data) => {
                onSubmit(data);
                reset();
              })(data);
            }}
          />
          :
          <Button
            textStyle={{ color: colors.red }}
            title={'EXCLUIR'}
            onPress={() => {
              onToggleModal();
              onSubmit(food);
            }}
          />
        }


      </View>
    </Modal>
  );
}

export default FoodDisplayModal;
