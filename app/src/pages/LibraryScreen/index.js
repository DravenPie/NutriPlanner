import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';
import { deleteFood, getFoodList, postFood } from '../../../api';
import { useEffect, useState } from 'react';

import Button from '@components/General/Button';
import FoodDisplay from '@components/LibraryScreen/FoodDisplay';
import FoodDisplayModal from '@components/LibraryScreen/FoodDisplayModal';
import SearchBar from '@components/General/SearchBar';
import styles from './styles';
import { verticalScale } from '@styles/metrics';

/**
 * LibraryScreen component
 * @param {object} route - The route object provided by React Navigation.
 * @param {object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} - LibraryScreen component
 */
const LibraryScreen = ({ route, navigation }) => {
  const { isAddProgress, onSubmitAddProgress } = route?.params?.params
    || { isAddProgress: false, onSubmitAddProgress: undefined }

  const onSubmitProgress = (data) => {
    navigation.navigate('LibraryScreen');
    navigation.navigate('DailyProgressScreen');
    onSubmitAddProgress(data);
  }

  const [search, setSearch] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodList = await getFoodList(search);
        if (foodList !== undefined) setFoodList(foodList);
      } catch (error) {
        console.error('init dados foodList:', error);
      }
    };

    fetchData();
  }, [search]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  const handlePostSubmit = async (data) => {
    try {
      const foodList = await postFood(data);      
      updateSearch('');
      setFoodList(foodList);
    } catch (error) {
      console.error('post dados foodList:', error);
    }
  };

  const handleDeleteSubmit = async (data) => {
    try {
      const foodList = await deleteFood(data);
      updateSearch('');
      setFoodList(foodList);
    } catch (error) {
      console.error('post dados foodList:', error);
    }
  };

  return (
    <View style={[styles.container, debug]}>
      <View style={debug}>
        <Text style={[styles.headerTitle, debug]}>Biblioteca de alimentos</Text>
        <SearchBar
          onChangeText={updateSearch}
          value={search}
          containerStyle={isAddProgress && { paddingBottom: 0 }}
        />
        {isAddProgress ||
          <Button
            title="ADICIONAR ALIMENTO"
            onPress={() => { toggleModal() }}
          />}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[{ flex: 1 }, padding(20, 0)]}
        keyboardVerticalOffset={verticalScale(90)}
      >
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={[{ justifyContent: 'center' }, debug]}
          decelerationRate={0.9}
        >
          <FoodDisplay
            isWater={true}
            isAddProgress={isAddProgress}
            food={{ id: '0', name: 'Água' }}
            editable={false}
            onSubmit={isAddProgress && onSubmitProgress}
          />
          {foodList.map((food, index) => (
            <FoodDisplay
              key={food.id}
              isAddProgress={isAddProgress}
              food={food}
              editable={false}
              onSubmit={
                isAddProgress ? onSubmitProgress
                  : handleDeleteSubmit
              }
            />
          ))}
        </ScrollView>
        <FoodDisplayModal
          isRegister={true}
          isVisible={isModalVisible}
          onToggleModal={toggleModal}
          onSubmit={handlePostSubmit}
        />
      </KeyboardAvoidingView>
    </View>
  )
}

export default LibraryScreen;
