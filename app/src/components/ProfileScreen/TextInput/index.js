import { TextInput as Input, Text, View } from 'react-native';

import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

/**
 * TextInput component
 * @param {string} placeholder - The placeholder text for the input.
 * @param {boolean} error - Indicates whether there is an error with the input.
 * @param {object} containerStyle - The styles for the container view.
 * @param {object} inputStyle - The styles for the input component.
 * @param {object} props - (Optional) Additional props that can be passed to the `TextInput` component from `react-native`.
 * @returns {JSX.Element} - TextInput component
 */
const TextInput = ({ placeholder, error, containerStyle, inputStyle, ...props }) => {
  return (
    <View style={[styles.container, containerStyle, debug]}>
      <Text style={[styles.placeholder, debug]}>{placeholder}</Text>
      <Input
        style={[styles.input, inputStyle, error && { borderColor: colors.red }, debug]}
        keyboardType="number-pad"
        cursorColor={colors.darkGrey}
        {...props}
      />
    </View>
  )
}

export default TextInput;
