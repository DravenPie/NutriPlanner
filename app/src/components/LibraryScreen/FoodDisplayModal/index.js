import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

import Button from '@components/General/Button';
import Modal from 'react-native-modal';
import { XIcon } from '@components/General/Icons';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

/**
 * Main schema for validating food data when registering.
 */
const mainSchema = yup.object({
  name: yup.string().required(),
  kcal: yup.number().positive().required(),
  quantity: yup.number().positive().required(),
  carb: yup.number().min(0).required(),
  prot: yup.number().min(0).required(),
  fat: yup.number().min(0).required(),
});

/**
 * Schema for validating food data when adding progress.
 */
const addProgressSchema = yup.object({
  quantity: yup.number().positive().required(),
})

/**
 * FoodDisplayModal component
 * @param {boolean} isWater - Indicates whether the displayed food is water.
 * @param {boolean} isAddProgress - Indicates whether the food display is used for adding progress.
 * @param {boolean} isRegister - Indicates whether the food display is used for registration.
 * @param {object} food - The food data to be displayed.
 * @param {boolean} isVisible - Indicates whether the modal is visible.
 * @param {function} onToggleModal - The function to be called when the modal is toggled.
 * @param {function} onSubmit - The function to be called when the form is submitted.
 * @returns {JSX.Element} - FoodDisplayModal component
 */
const FoodDisplayModal = ({ isWater, isAddProgress, isRegister, food, isVisible, onToggleModal, onSubmit }) => {
  const { control, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm({
    defaultValues: food,
    resolver: yupResolver(isAddProgress ? addProgressSchema : mainSchema),
  });

  const ingestedQuantity = (isAddProgress && !isWater) ? parseInt(watch('quantity')) : undefined;
  useEffect(() => {
    if (ingestedQuantity || ingestedQuantity === 0) {
      const rate = ingestedQuantity / food.quantity;

      setValue('kcal', rate * food.kcal);
      setValue('carb', rate * food.carb);
      setValue('prot', rate * food.prot);
      setValue('fat', rate * food.fat);
    }
  }, [ingestedQuantity]);

  const [carb, prot, fat] = [watch('carb'), watch('prot'), watch('fat')];
  useEffect(() => {
    if (carb != undefined && prot != undefined && fat != undefined) {
      setValue('kcal', 
        carb*4 + prot*4 + fat*9
      );
    }
  }, [carb, prot, fat]);

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
      onBackdropPress={() => {
        onToggleModal();
        reset();
      }}
      transparent={true}
    >
      <View style={[styles.container, debug]}>
        <View style={[styles.header, (isWater && !isAddProgress) && { marginBottom: 0 }, debug]}>
          <XIcon
            containerStyle={[{ width: '15%' }, debug]}
            size={22}
            color={colors.white}
            onPress={() => {
              onToggleModal();
              reset();
            }}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.headerText,
                  isAddProgress && isWater && { width: 'auto' },
                  debug
                ]}
                placeholder="Alimento"
                placeholderTextColor={colors.lightWhite}
                cursorColor={colors.white}
                value={value && String(value)}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType='default'
                editable={isRegister}
              />
            )}
          />

          {isAddProgress && isWater &&
            <Controller
              control={control}
              name="quantity"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.headerTextAddProgress,
                    debug
                  ]}
                  placeholder="ml"
                  placeholderTextColor={colors.lightGrey}
                  cursorColor={colors.darkGrey}
                  value={value && String(value)}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType='number-pad'
                  textAlign="right"
                />
              )}
            />}
        </View>
        {isWater || itemList.map(([label, name], index) => (
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
                    (isRegister && (name !== 'kcal')) || ((name === 'quantity') && isAddProgress)
                      ? { color: colors.black }
                      : { color: colors.lightGrey },
                    errors[name] && (isAddProgress
                      ? (name === 'quantity') && { borderColor: colors.red }
                      : { borderColor: colors.red }),
                    debug
                  ]}
                  placeholder={(isRegister && (name !== 'kcal')) ? 'Obrigatório' : undefined}
                  placeholderTextColor={colors.lightGrey}
                  cursorColor={colors.darkGrey}
                  textAlign='center'
                  value={(value === 0 || value) && String(value)}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType='number-pad'
                  editable={
                    (isRegister && (name !== 'kcal')) || ((name === 'quantity') && isAddProgress)
                  }
                />
              )}
            />
          </View>
        ))}

        {isRegister || isAddProgress ?
          (isWater && !isAddProgress) ||
          <Button
            title={'SALVAR'}
            onPress={(data) => {
              return handleSubmit((data) => {
                onSubmit(data);
                onToggleModal();
                reset();
              })(data);
            }}
          />
          :
          isWater ||
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
