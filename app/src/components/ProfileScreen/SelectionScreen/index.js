import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { RadioButton } from 'react-native-paper';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';
import { verticalScale } from '@styles/metrics';

const SelectionScreen = ({ route, navigation }) => {
  const { itemList, value, onChange } = route.params.params;
  const [checked, setChecked] = useState(value);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={verticalScale(25)}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          <View style={[styles.container, debug]}>
            {itemList.map(([label, description], index) => (
              <TouchableOpacity
                key={index}
                style={[styles.view, debug]}
                onPress={() => { onChange(label); setChecked(label); }}
                activeOpacity={0.5}
              >
                <RadioButton
                  value={label}
                  status={checked === label ? 'checked' : 'unchecked'}
                  onPress={() => { onChange(label); setChecked(label); }}
                  color={colors.lightBlue}
                />
                <View style={[styles.content, debug]}>
                  <Text style={[styles.contentLabel, debug]}>{label}</Text>
                  <Text style={[styles.contentDescription, debug]}>{description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SelectionScreen;
