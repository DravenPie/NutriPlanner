import { Text, TouchableOpacity } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, debug]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={[styles.buttonText, debug]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
