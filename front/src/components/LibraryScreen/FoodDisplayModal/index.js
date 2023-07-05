import { Text, TextInput, View } from 'react-native';

import Button from 'components/Button';
import Modal from 'react-native-modal';
import { XIcon } from 'components/Icons';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const FoodDisplayModal = ({ name, kcal, quantity, carb, prot, fat, isVisible, onToggleModal }) => {
  const [updatedKcal, setUpdatedKcal] = useState('');
  const [updatedQuantity, setUpdatedQuantity] = useState('');
  const [updatedCarb, setUpdatedCarb] = useState('');
  const [updatedProt, setUpdatedProt] = useState('');
  const [updatedFat, setUpdatedFat] = useState('');

  const itemList = [
    ['Calorias (Kcal)', kcal, updatedKcal, setUpdatedKcal],
    ['Quantidade', quantity, updatedQuantity, setUpdatedQuantity],
    ['Carboidratos (g)', carb, updatedCarb, setUpdatedCarb],
    ['Proteínas (g)', prot, updatedProt, setUpdatedProt],
    ['Gorduras (g)', fat, updatedFat, setUpdatedFat]
  ];

  const bottomBorder = (index) => (
    (index !== labelList.length - 1) ?
      { borderBottomWidth: 1, borderBottomColor: colors.darkGrey } : {}
  )

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
          <Text style={[styles.headerText, debug]}>{name === undefined ? 'Alimento' : name}</Text>
        </View>
        {itemList.map(([label, placeholder, value, setValue], index) => (
          <View
            key={index}
            style={[styles.foodDisplay, debug]}
          >
            <Text style={[styles.foodDisplayText, debug]}>
              {label}
            </Text>
            <TextInput
              style={[styles.foodDisplayInput, debug]}
              placeholder={placeholder === undefined ? 'Obrigatório' : placeholder}
              placeholderTextColor={colors.lightGrey}
              cursorColor={colors.darkGrey}
              textAlign='center'
              value={value}
              onChangeText={setValue}
              keyboardType='number-pad'
            />
          </View>
        ))}
        <Button
          title={'SALVAR'}
          onPress={() => {
            onToggleModal()
          }}
        />
      </View>
    </Modal>
  );
}

export default FoodDisplayModal;
