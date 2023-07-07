import { debug } from '@styles/global';
import styles from './styles';

const KeyboardScrollView = ({ children, keyboardVerticalOffset }) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.container, debug]}
        keyboardVerticalOffset={verticalScale(keyboardVerticalOffset)}
      >
        <ScrollView
          style={[styles.container, debug]}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          {children}
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardScrollView;
