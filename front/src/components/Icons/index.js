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

const ArrowLeftIcon = ({ size, color, onPress }) => (
  <Icon
    name="arrow-left"
    type="feather"
    size={moderateScale(size)}
    color={color}
    containerStyle={[{ alignItems: 'flex-start' }, debug ]}
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
  />
);

const BookIcon = ({ size, color }) => (
  <Icon
    name="book"
    type="feather"
    size={size}
    color={color}
  />
);

const ClipboardIcon = ({ size, color }) => (
  <Icon
    name="clipboard"
    type="feather"
    size={size}
    color={color}
  />
);

const PieChartIcon = ({ size, color }) => (
  <Icon
    name="pie-chart"
    type="feather"
    size={size}
    color={color}
  />
);

const CalendarIcon = ({ size, color }) => (
  <Icon
    name="calendar"
    type="feather"
    size={size}
    color={color}
  />
);

export { EnvelopeIcon, LockIcon, EyeIcon, ArrowLeftIcon, UserIcon, BookIcon, ClipboardIcon, PieChartIcon, CalendarIcon };
