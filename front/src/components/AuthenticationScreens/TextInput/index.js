import { Input } from 'react-native-elements';
import { colors } from '@styles/colors';
import styles from './styles';

const TextInput = ({
  leftIcon,
  leftIconContainerStyle,
  rightIcon,
  rightIconContainerStyle,
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType
}) => {
  return (
    <Input
      containerStyle={styles.debug}
      labelStyle={[styles.label, styles.debug]}
      inputContainerStyle={[styles.inputContainer, styles.debug]}
      inputStyle={[styles.input, styles.debug]}

      leftIcon={leftIcon}
      leftIconContainerStyle={leftIconContainerStyle}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}

      label={label}
      placeholder={placeholder}
      placeholderTextColor={colors.lightGrey}

      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
}

export default TextInput;
