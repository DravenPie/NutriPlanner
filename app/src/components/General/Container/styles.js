import { StatusBar, StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
import { colors } from '@styles/colors';
import { minMaxDimensions } from '@styles/metrics';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    ...minMaxDimensions(),
    // marginTop: StatusBar.currentHeight,
    backgroundColor: colors.lightGreen,
  },
});

export default styles;
