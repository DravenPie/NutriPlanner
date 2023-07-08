import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 740;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const minMaxDimensions = () => ({ minWidth: 360, minHeight: 665, maxWidth: 800, maxHeight: 1280 });

export { horizontalScale, verticalScale, moderateScale, minMaxDimensions };
