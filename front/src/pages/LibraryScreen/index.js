import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { debug, padding } from '@styles/global';

import Button from 'components/Button';
import FoodDisplay from 'components/LibraryScreen/FoodDisplay';
import FoodDisplayModal from 'components/LibraryScreen/FoodDisplayModal';
import SearchBar from '@components/SearchBar';
import styles from './styles';
import { useState } from 'react';
import { verticalScale } from '@styles/metrics';

const LibraryScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateSearch = (search) => {
    setSearch(search);
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
          <FoodDisplay
            name={'Água'}
            kcal={'1000'}
            quantity={'1000'}
            carb={'1000'}
            prot={'1000'}
            fat={'1000'}
          />
        </ScrollView>
        <FoodDisplayModal
          isVisible={isModalVisible}
          onToggleModal={toggleModal}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LibraryScreen;
