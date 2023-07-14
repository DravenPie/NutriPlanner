import { Text, TouchableOpacity } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

/**
 * Button component
 * @param {string} title - The title text to be displayed on the button.
 * @param {function} onPress - The function to be called when the button is pressed.
 * @returns {JSX.Element} - Button component
 */
const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, debug]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={[styles.buttonText, debug]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
