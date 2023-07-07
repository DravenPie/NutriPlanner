import { Icon } from 'react-native-elements';
import { debug } from '@styles/global';
import { moderateScale } from '@styles/metrics';
import styles from './styles';

const EnvelopeIcon = ({ size, ...props }) => (
  <Icon
    name="envelope"
    type="font-awesome"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const LockIcon = ({ size, ...props }) => (
  <Icon
    name="lock"
    type="font-awesome"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const EyeIcon = ({ active, size, ...props }) => (
  <Icon
    name={ active ? "eye" : "eye-slash" }
    type="font-awesome"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const UserIcon = ({ size, ...props }) => (
  <Icon
    name="user"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const BookIcon = ({ size, ...props }) => (
  <Icon
    name="book"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const PieChartIcon = ({ size, ...props }) => (
  <Icon
    name="pie-chart"
    type="feather"
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const ChevronRightIcon = ({ size, ...props }) => (
  <Icon
    name="chevron-right"
    type="feather"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const SearchIcon = ({ size, ...props }) => (
  <Icon
    name="search"
    type="feather"
    size={moderateScale(size)}
    iconStyle={[styles.iconStyle, debug]}
    {...props}
  />
);

const XIcon = ({ size, ...props }) => (
  <Icon
    name="x"
    type="feather"
    size={moderateScale(size)}
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
  PieChartIcon,
  ChevronRightIcon,
  SearchIcon,
  XIcon
};
