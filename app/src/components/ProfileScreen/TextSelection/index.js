import { Text, TouchableOpacity, View } from 'react-native';

import { ChevronRightIcon } from '@components/General/Icons';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

/**
 * TextSelection component
 * @param {string} placeholder - The placeholder text for the selection.
 * @param {string} value - The selected value.
 * @param {function} onPress - The function to be called when the selection is pressed.
 * @param {object} containerStyle - The styles for the container view.
 * @returns {JSX.Element} - TextSelection component
 */
const TextSelection = ({ placeholder, value, onPress, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle, debug]}>
      <Text style={[styles.placeholder, debug]}>{placeholder}</Text>
      <TouchableOpacity
        style={[styles.display, debug]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Text
          style={[styles.displayText, debug]}
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          {value}
        </Text>
        <ChevronRightIcon size={25} color={colors.black}/>
      </TouchableOpacity>
    </View>
  )
}

export default TextSelection;
