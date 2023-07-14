import { Text, View } from 'react-native';

import { debug } from '@styles/global';
import styles from './styles';

/**
 * Main header component
 * @returns {JSX.Element} - Header component
 */
const Header = () => {
  return (
    <View style={[styles.container, debug]}>
      <Text style={styles.text}>NutriPlanner</Text>
    </View>
  )
}

export default Header;
