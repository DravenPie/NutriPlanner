import { Text, View } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

const Header = () => {
  return (
      <View style={[styles.container, debug]}>
        <Text style={styles.text}>NutriPlanner</Text>
      </View>
  )
}

export default Header;
