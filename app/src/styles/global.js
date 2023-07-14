import { horizontalScale, minMaxDimensions, verticalScale } from "./metrics";

/**
 * Debug style object for adding red borders to components
 */
const debug = {
  // borderWidth: 1,
  // borderColor: 'red',
}

/**
 * Returns a padding object like css
 * @returns {object} - Padding object
 */
const padding = (a, b, c, d) => {
  return {
    paddingTop: verticalScale(a),
    paddingRight: b !== undefined ? horizontalScale(b) : horizontalScale(a),
    paddingBottom: c !== undefined ? verticalScale(c) : verticalScale(a),
    paddingLeft: d !== undefined ? horizontalScale(d)
      : (c !== undefined ? horizontalScale(b)
      : (b !== undefined ? horizontalScale(b)
      : horizontalScale(a) ))
  }
}

/**
 * Returns a default container style object
 * @returns {object} - Default container style object
 */
const defaultContainer = () => {
  return {
    flex: 1,
    ...minMaxDimensions(),
    ...padding(20),
  }
}

export { debug, padding, defaultContainer };
