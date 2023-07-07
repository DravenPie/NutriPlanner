import { SafeAreaView } from 'react-native-safe-area-context';
import { debug } from '@styles/global';
import styles from './styles';

const Container = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container, debug]}>
      {children}
    </SafeAreaView>
  )
}

export default Container;
