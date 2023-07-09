import { Text, TouchableOpacity, View } from 'react-native';

import FoodDisplayModal from '@components/LibraryScreen/FoodDisplayModal';
import { debug } from '@styles/global';
import styles from './styles';
import { useState } from 'react';

const FoodDisplay = ({ isWater, isAddProgress, food, onSubmit }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity
      style={[styles.container, debug]}
      onPress={() => { !isAddProgress && isWater || toggleModal() }}
      activeOpacity={0.7}
    >
      <View style={[
        styles.labelContainer,
        isWater && { width: '100%', alignItems: 'center' },
        debug
      ]}>
        <Text
          style={[styles.text, debug]}
          numberOfLines={1} 
          ellipsizeMode="tail"
        >{food.name}</Text>

        {isWater ||
          <Text
            numberOfLines={1} 
            ellipsizeMode="tail"
            style={[styles.text, debug]}
          >
            {food.quantity && String(food.quantity) + 'g'}
          </Text>}
      </View>
      {isWater ||
        <View style={[styles.propertiesContainer,  debug]}>
            <Text
              numberOfLines={1} 
              ellipsizeMode="tail"
              style={[styles.text,  debug]}
            >
              {food.kcal && String(food.kcal) + ' Kcal  '}
              {food.carb && 'C: ' + String(food.carb)}
              {food.prot && '  P: ' + String(food.prot)}
              {food.fat && '  G: ' + String(food.fat)}
            </Text>
        </View>}

      <FoodDisplayModal
        isWater={isWater}
        isAddProgress={isAddProgress}
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
