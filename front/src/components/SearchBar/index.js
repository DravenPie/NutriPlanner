import { SearchIcon, XIcon } from '@components/Icons';

import { SearchBar as SB } from 'react-native-elements';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

const SearchBar = ({ title, onPress, ...props }) => {
  return (
    <SB
      containerStyle={[styles.Container, debug]}
      inputContainerStyle={[styles.searchBar, debug]}
      inputStyle={[styles.Text, debug]}
      searchIcon={<SearchIcon size={20} color={colors.black} />}
      clearIcon={<XIcon size={22} color={colors.black} onPress={() => { updateSearch('') }} />}
      placeholder="Procurar..."
      placeholderTextColor={colors.lightGrey}
      {...props}
    />
  )
}

export default SearchBar;
