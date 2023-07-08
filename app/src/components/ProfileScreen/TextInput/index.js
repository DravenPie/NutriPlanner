import { TextInput as Input, Text, View } from 'react-native';

import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const TextInput = ({ placeholder, style, ...props }) => {
  return (
    <View style={[styles.container, debug]}>
      <Text style={[styles.placeholder, debug]}>{placeholder}</Text>
      <Input
        style={[styles.input, style, debug]}
        keyboardType="number-pad"
        cursorColor={colors.darkGrey}
        {...props}
      />
    </View>
  )
}

export default TextInput;
