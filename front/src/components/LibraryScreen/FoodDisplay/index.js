import { Text, TouchableOpacity, View } from 'react-native';

import FoodDisplayModal from '@components/LibraryScreen/FoodDisplayModal';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const FoodDisplay = ({ food, onSubmit }) => {
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
        >{food.name}</Text>
        <Text
          numberOfLines={1} 
          ellipsizeMode="tail"
          style={[styles.text, debug]}
        >{food.quantity}g</Text>
      </View>
      <View style={[styles.propertiesContainer,  debug]}>
        <Text
          numberOfLines={1} 
          ellipsizeMode="tail"
          style={[styles.text,  debug]}
        >{food.kcal} Kcal  C: {food.carb}  P: {food.prot}  G: {food.fat}</Text>
      </View>

      <FoodDisplayModal
        isRegister={false}
        food={food}
        isVisible={isModalVisible}
        onToggleModal={toggleModal}
        onSubmit={onSubmit}
      />
    </TouchableOpacity>
  )
}

export default FoodDisplay;
