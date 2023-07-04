import { TextInput as Input, Text, View } from 'react-native';

import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const TextInput = ({ placeholder, displayColor, ...props }) => {
  return (
    <View style={[styles.container, debug]}>
      <Text style={[styles.placeholder, debug]}>{placeholder}</Text>
      <Input
        style={[styles.input, {backgroundColor: displayColor}, debug]}
        keyboardType="number-pad"
        cursorColor={colors.darkGrey}
        {...props}
      />
    </View>
  )
}

export default TextInput;
