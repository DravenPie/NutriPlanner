import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';
import { useEffect, useState } from 'react';

import Button from '@components/General/Button';
import FoodDisplay from '@components/LibraryScreen/FoodDisplay';
import FoodDisplayModal from '@components/LibraryScreen/FoodDisplayModal';
import SearchBar from '@components/General/SearchBar';
import styles from './styles';
import { verticalScale } from '@styles/metrics';

const bd = [
  {id: 0,
  name:'Água',
  kcal:1000,
  quantity:1000,
  carb:1000,
  prot:1000,
  fat:1000,},
  {id: 1,
  name:'Carne',
  kcal:100,
  quantity:100,
  carb:100,
  prot:100,
  fat:100,},
  {id: 2,
  name:'Suco',
  kcal:10,
  quantity:10,
  carb:10,
  prot:10,
  fat:10,}
];

const LibraryScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodList, setFoodList] = useState([]);

  let index = 100;

  useEffect(() => {    // inicializa os dados
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('URL_DO_SERVIDOR', token);
  //       const data = response.data;
  //       setFoodList(data.foodList);
  //     } catch (error) {
  //       console.error('Erro ao fazer a solicitação LibraryScreen:', error);
  //     }
  //   };

  //   fetchData();

    setFoodList(bd)
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateSearch = (search) => {  // atualiza a lista de comidas a cada caracter
    setSearch(search);
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('URL_DO_SERVIDOR', token);
  //       const data = response.data;
  //       setFoodList(data.foodList);
  //     } catch (error) {
  //       console.error('Erro ao fazer a solicitação LibraryScreen:', error);
  //     }
  };

  const handlePostSubmit = async (food) => {    // upa os dados, recebe eles atualizados, faz o set
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.post('URL_DO_SERVIDOR', token);
    //       const data = response.data;
    //       setFoodList([...data.foodList, food]);
    //     } catch (error) {
    //       console.error('Erro ao fazer a solicitação LibraryScreen:', error);
    //     }
  
    updateSearch('');
    food.id = index++;
    console.log(food);
    setFoodList([...foodList, food]);
    };
  
    const handleDeleteSubmit = async (food) => {    // upa os dados, recebe eles atualizados, faz o set
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.post('URL_DO_SERVIDOR', token);
    //       const data = response.data;
    //       const newFoodList = foodList.filter(item => item.id !== food.id);
    //       setFoodList(newFoodList);
    //     } catch (error) {
    //       console.error('Erro ao fazer a solicitação LibraryScreen:', error);
    //     }
  
      updateSearch('');
      console.log(food);
      const newFoodList = foodList.filter(item => item.id !== food.id);
      setFoodList(newFoodList);
    };

  return (
    <SafeAreaView style={[styles.container, debug]}>
      <View style={debug}>
        <Text style={[styles.headerTitle, debug]}>Biblioteca de alimentos</Text>
        <SearchBar
          onChangeText={updateSearch}
          value={search}
        />
        <Button
          title="ADICIONAR ALIMENTO"
          onPress={() => { toggleModal() }}
        />
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
          {foodList.map((food, index) => (
            <FoodDisplay
              key={index}
              food={food}
              editable={false}
              onSubmit={handleDeleteSubmit}
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
    </SafeAreaView>
  )
}

export default LibraryScreen;
