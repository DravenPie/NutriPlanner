import { Text, TouchableOpacity, View } from 'react-native';

import FoodDisplayModal from '@components/LibraryScreen/FoodDisplayModal';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const FoodDisplay = ({ name, quantity, kcal, carb, prot, fat }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity
      style={[styles.container, debug]}
      onPress={() => { toggleModal() }}
      activeOpacity={0.7}
    >
      <View style={[{ width: '30%' }, debug]}>
        <Text
          style={[styles.text, debug]}
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          {name}
        </Text>
        <Text
          numberOfLines={1} 
          ellipsizeMode="tail"
          style={[styles.text, debug]}
        >
          {quantity}g
        </Text>
      </View>
      <View style={[styles.propertiesContainer,  debug]}>
        <Text
          numberOfLines={1} 
          ellipsizeMode="tail"
          style={[styles.text,  debug]}
        >
          {kcal} Kcal  C: {carb}  P: {prot}  G: {fat}
        </Text>
      </View>

      <FoodDisplayModal
        name={name}
        kcal={kcal}
        quantity={quantity}
        carb={carb}
        prot={prot}
        fat={fat}
        isVisible={isModalVisible}
        onToggleModal={toggleModal}
      />
    </TouchableOpacity>
  )
}

export default FoodDisplay;
