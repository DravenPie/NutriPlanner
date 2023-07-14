import { Text, TouchableOpacity, View } from 'react-native';

import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

/**
 * SelectionScreenModal component
 * @param {array} labelList - The list of labels to be displayed.
 * @param {boolean} isVisible - Indicates whether the modal is visible.
 * @param {function} onToggleModal - The function to be called when the modal is toggled.
 * @param {string} value - The currently selected value.
 * @param {function} onChange - The function to be called when the value is changed.
 * @returns {JSX.Element} - SelectionScreenModal component
 */
const SelectionScreenModal = ({ labelList, isVisible, onToggleModal, value, onChange }) => {
  const [checked, setChecked] = useState(value);
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
        {labelList.map((label, index) => {
          return <TouchableOpacity
            key={index}
            style={[styles.view, bottomBorder(index), debug]}
            onPress={() => { onChange(label); setChecked(label); }}
            activeOpacity={0.5}
          >
            <RadioButton
              value={label}
              status={ checked == label ? 'checked' : 'unchecked' }
              onPress={() => { onChange(label); setChecked(label); }}
              color={colors.lightBlue}
            />
            <Text style={[styles.contentLabel, debug]} >{label}</Text>
          </TouchableOpacity>
        })}
      </View>
    </Modal>
  );
}

export default SelectionScreenModal;
