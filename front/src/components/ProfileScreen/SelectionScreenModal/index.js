import { Text, TouchableOpacity, View } from 'react-native';

import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const SelectionScreenModal = ({ name, labelList, isVisible, onToggleModal }) => {
  const [checked, setChecked] = useState(labelList[0]);
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
        {labelList.map((label, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.view, bottomBorder(index), debug]}
            onPress={() => setChecked(label)}
            activeOpacity={0.5}
          >
            <RadioButton
              value={label}
              status={ checked === label ? 'checked' : 'unchecked'}
              onPress={() => setChecked(label)}
              color={colors.lightBlue}
            />
            <Text style={[styles.contentLabel, debug]} >{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

export { SelectionScreenModal };
