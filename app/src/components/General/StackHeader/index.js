import { Text, View } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

/**
 * StackHeader component
 * @param {string} title - The title text to be displayed in the header.
 * @param {JSX.Element} leftButton - The JSX element representing the left button component.
 * @returns {JSX.Element} - StackHeader component
 */
const StackHeader = ({ title, leftButton }) => {
  return (
    <View style={[styles.container, debug]}>
      {leftButton}
      <Text style={[styles.text, debug]}>{title}</Text>
    </View>
  )
}

export default StackHeader;
