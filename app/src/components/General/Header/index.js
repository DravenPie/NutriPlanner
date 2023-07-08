import { SafeAreaView, Text, View } from 'react-native';

import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const Header = () => {
  return (
    <View style={{ backgroundColor: colors.lightGreen }}>
      <View style={[styles.container, debug]}>
        <Text style={styles.text}>NutriPlanner</Text>
      </View>
    </View>
  )
}

export default Header;
