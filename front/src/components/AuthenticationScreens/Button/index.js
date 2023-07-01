import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ title, navigateTo }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.debug]}
      onPress={navigateTo}
      activeOpacity={0.9}
    >
      <Text style={[styles.buttonText, styles.debug]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
