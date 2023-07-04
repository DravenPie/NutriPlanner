import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { defaultContainer } from '@styles/global';

const styles = StyleSheet.create({
  container: {
    ...defaultContainer(),
    marginTop: 0,
    
    backgroundColor: colors.lightGreen,
  },
});

export default styles;
