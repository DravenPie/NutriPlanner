import { SearchIcon, XIcon } from '@components/General/Icons';

import { SearchBar as SearchB } from 'react-native-elements';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const SearchBar = ({ onChangeText, ...props }) => {
  return (
    <SearchB
      containerStyle={[styles.Container, debug]}
      inputContainerStyle={[styles.searchBar, debug]}
      inputStyle={[styles.Text, debug]}
      searchIcon={<SearchIcon size={20} color={colors.black} />}
      clearIcon={<XIcon size={22} color={colors.black} onPress={() => { onChangeText('') }} />}
      placeholder="Procurar..."
      placeholderTextColor={colors.lightGrey}
      onChangeText={onChangeText}
      {...props}
    />
  )
}

export default SearchBar;
