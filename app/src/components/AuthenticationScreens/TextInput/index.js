import { Input } from 'react-native-elements';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const TextInput = ({ inputContainerStyle, ...props }) => {
  return (
    <Input
      containerStyle={debug}
      inputContainerStyle={[styles.inputContainer, inputContainerStyle, debug]}
      inputStyle={[styles.input, debug]}
      placeholderTextColor={colors.lightGrey}
      leftIconContainerStyle={[styles.inputIcon, debug]}
      rightIconContainerStyle={[styles.inputIcon, debug]}
      errorStyle={[styles.errorMessage, debug]}

      {...props}
    />
  );
}

export default TextInput;
