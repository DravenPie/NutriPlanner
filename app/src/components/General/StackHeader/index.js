import { Text, View } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

const StackHeader = ({ title, leftButton }) => {
  return (
    <View style={[styles.container, debug]}>
      {leftButton}
      <Text style={[styles.text, debug]}>{title}</Text>
    </View>
  )
}

export default StackHeader;
