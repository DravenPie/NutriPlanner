import { horizontalScale, minMaxDimensions, verticalScale } from "./metrics";

const debug = {
  // borderWidth: 1,
  // borderColor: 'red',
}

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

const defaultContainer = () => {
  return {
    flex: 1,
    ...minMaxDimensions(),
    ...padding(20),
  }
}

export { padding, debug, defaultContainer };
