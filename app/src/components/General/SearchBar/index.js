import { SearchIcon, XIcon } from '@components/General/Icons';

import { SearchBar as SearchB } from 'react-native-elements';
import { colors } from '@styles/colors';
import { debug } from '@styles/global';
import styles from './styles';

/**
 * SearchBar component
 * @param {function} onChangeText - The function to be called when the text in the search bar changes.
 * @param {object} containerStyle - (Optional) Additional style properties for the container of the search bar.
 * @param {object} props - (Optional) Additional props that can be passed to the `SearchBar` component from `react-native-elements`.
 * @returns {JSX.Element} - SearchBar component
 */
const SearchBar = ({ onChangeText, containerStyle, ...props }) => {
  return (
    <SearchB
      containerStyle={[styles.container, containerStyle, debug]}
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
