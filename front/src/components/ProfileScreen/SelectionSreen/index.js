import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { RadioButton } from 'react-native-paper';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const SelectionScreen = ({ route, navigation }) => {
  const { name, itemList } = route.params.params;
  const [checked, setChecked] = useState(itemList[0][0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, debug]}>
        {itemList.map(([label, description], index) => (
          // description === undefined ?
          //   <TouchableOpacity
          //     key={index}
          //     style={[styles.view, debug]}
          //     onPress={() => setChecked(label)}
          //     activeOpacity={0.5}
          //   >
          //     <RadioButton
          //       value={label}
          //       status={ checked === label ? 'checked' : 'unchecked' }
          //       onPress={() => setChecked(label)}
          //       color={colors.lightBlue}
          //     />
          //     <View style={[styles.content, { justifyContent: 'center' }, debug]}>
          //       <Text style={[styles.contentLabel, debug]} >{label}</Text>
          //     </View>
          //   </TouchableOpacity>
          // : 
            <View key={index} style={[styles.view, debug]}>
              <RadioButton
                value={label}
                status={checked === label ? 'checked' : 'unchecked'}
                onPress={() => setChecked(label)}
                color={colors.lightBlue}
              />
              <View style={[styles.content, debug]}>
                <Text style={[styles.contentLabel, debug]}>{label}</Text>
                <Text style={[styles.contentDescription, debug]}>{description}</Text>
              </View>
            </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default SelectionScreen;
