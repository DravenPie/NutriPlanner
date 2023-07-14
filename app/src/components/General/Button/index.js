import { Text, TouchableOpacity } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

/**
 * Button component
 * @param {string} title - The text to be displayed on the button.
 * @param {function} onPress - The function to be called when the button is pressed.
 * @param {object} style - (Optional) Additional style properties for the button.
 * @param {object} textStyle - (Optional) Additional style properties for the text.
 * @returns {JSX.Element} - Button component
 */
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
