import { Icon } from 'react-native-elements';
import { debug } from '@styles/global';
import { moderateScale } from '@styles/metrics';
import styles from './styles';

const EnvelopeIcon = ({ size, color }) => (
  <Icon
    name="envelope"
    type="font-awesome"
    size={moderateScale(size)}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const LockIcon = ({ size, color }) => (
  <Icon
    name="lock"
    type="font-awesome"
    size={moderateScale(size)}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const EyeIcon = ({ active, size, color, onPress }) => (
  <Icon
    name={ active ? "eye" : "eye-slash" }
    type="font-awesome"
    size={moderateScale(size)}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
    onPress={onPress}
  />
);

const UserIcon = ({ size, color }) => (
  <Icon
    name="user"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const BookIcon = ({ size, color }) => (
  <Icon
    name="book"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const ClipboardIcon = ({ size, color }) => (
  <Icon
    name="clipboard"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const PieChartIcon = ({ size, color }) => (
  <Icon
    name="pie-chart"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const CalendarIcon = ({ size, color }) => (
  <Icon
    name="calendar"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const ChevronRightIcon = ({ size, color }) => (
  <Icon
    name="chevron-right"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const SearchIcon = ({ size, color }) => (
  <Icon
    name="search"
    type="feather"
    size={size}
    color={color}
    iconStyle={[styles.iconStyle, debug]}
  />
);

const XIcon = ({ size, color, containerStyle, ...props }) => (
  <Icon
    name="x"
    type="feather"
    size={size}
    color={color}
    containerStyle={containerStyle}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

export { 
  EnvelopeIcon,
  LockIcon,
  EyeIcon,
  UserIcon,
  BookIcon,
  ClipboardIcon,
  PieChartIcon,
  CalendarIcon,
  ChevronRightIcon,
  SearchIcon,
  XIcon
};
