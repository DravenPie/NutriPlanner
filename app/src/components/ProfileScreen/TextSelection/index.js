import { Text, TouchableOpacity, View } from 'react-native';

import { ChevronRightIcon } from '@components/General/Icons';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

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
