import { horizontalScale, minMaxDimensions, verticalScale } from "./metrics";

import { StatusBar } from "react-native";

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
    ...minMaxDimensions(),
    ...padding(20),

    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
}

export { padding, debug, defaultContainer };
