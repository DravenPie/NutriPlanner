/**
 * Icon Components Library
 */

import { Icon } from 'react-native-elements';
import { debug } from '@styles/global';
import { moderateScale } from '@styles/metrics';
import styles from './styles';

/**
 * UserIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - UserIcon component
 */
const UserIcon = ({ size, ...props }) => (
  <Icon
    name="user"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    size={size}
    {...props}
  />
);

/**
 * BookIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - BookIcon component
 */
const BookIcon = ({ size, ...props }) => (
  <Icon
    name="book"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    size={size}
    {...props}
  />
);

/**
 * PieChartIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - PieChartIcon component
 */
const PieChartIcon = ({ size, ...props }) => (
  <Icon
    name="pie-chart"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    size={size}
    {...props}
  />
);

/**
 * ChevronRightIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - ChevronRightIcon component
 */
const ChevronRightIcon = ({ size, ...props }) => (
  <Icon
    name="chevron-right"
    type="feather"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

/**
 * SearchIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - SearchIcon component
 */
const SearchIcon = ({ size, ...props }) => (
  <Icon
    name="search"
    type="feather"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

/**
 * XIcon component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - XIcon component
 */
const XIcon = ({ size, ...props }) => (
  <Icon
    name="x"
    type="feather"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

/**
 * BackArrow component
 * @param {number} size - The size of the icon.
 * @param {object} props - (Optional) Additional props that can be passed to the `Icon` component from `react-native-elements`.
 * @returns {JSX.Element} - BackArrow component
 */
const BackArrow = ({ size, ...props }) => (
  <Icon
    name="arrowleft"
    type="antdesign"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

export {
  UserIcon,
  BookIcon,
  PieChartIcon,
  ChevronRightIcon,
  SearchIcon,
  XIcon,
  BackArrow
};
