import { StatusBar } from "react-native"
import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { debug } from '@styles/utils';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,

    width: '100%',
    height: 40,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  
  debug: {
    ...debug(false)
  },
});

export default styles;
