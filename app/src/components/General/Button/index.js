import { Text, TouchableOpacity } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, debug]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={[styles.buttonText, textStyle, debug]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
