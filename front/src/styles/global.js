import { horizontalScale, verticalScale } from "./metrics";

import { StatusBar } from "react-native";
import { minMaxDimensions } from "./metrics";

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
    marginTop: StatusBar.currentHeight,
  }
}

export { padding, debug, defaultContainer };
