import { SafeAreaView, Text, View } from 'react-native';

import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const StackHeader = ({ title, leftButton }) => {
  return (
    <SafeAreaView style={[{ backgroundColor: colors.lightGreen }, debug]}>
      <View style={[styles.container, debug]}>
        {leftButton}
        <Text style={[styles.text, debug]}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

export default StackHeader;
