import { Dimensions } from 'react-native';

// Get the width and height of the device screen
const { width, height } = Dimensions.get('window');

// Define the base width and height for scaling calculations
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 740;

/**
 * Scale a given size horizontally based on the device width.
 *
 * @param {number} size - The size to be scaled.
 * @returns {number} - The scaled size.
 */
const horizontalScale = (size) => (width / guidelineBaseWidth) * size;

/**
 * Scale a given size vertically based on the device height.
 *
 * @param {number} size - The size to be scaled.
 * @returns {number} - The scaled size.
 */
const verticalScale = (size) => (height / guidelineBaseHeight) * size;

/**
 * Scale a given size based on both horizontal and vertical scaling factors.
 *
 * @param {number} size - The size to be scaled.
 * @param {number} factor - The scaling factor to be applied.
 * @returns {number} - The scaled size.
 */
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

/**
 * Get the minimum and maximum dimensions for a responsive container.
 *
 * @returns {object} - The object containing the minimum and maximum dimensions.
 */
const minMaxDimensions = () => ({ minWidth: 360, minHeight: 665, maxWidth: 800, maxHeight: 1280 });

export { horizontalScale, verticalScale, moderateScale, minMaxDimensions };
