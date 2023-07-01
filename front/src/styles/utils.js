import { StatusBar } from "react-native"

const setMinMaxDimensions = () => {
  const [minWindowWidth, minWindowHeight,
    maxWindowWidth, maxWindowHeight] = [360, 665, 800, 1280]

  return {
    minWidth: minWindowWidth, minHeight: minWindowHeight,
    maxWidth: maxWindowWidth, maxHeight: maxWindowHeight,
  }
}

const setPadding = (a, b, c, d) => {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d
      : (c !== undefined ? b
      : (b !== undefined ? b
      : a))
  }
}

const setDefaultContainer = () => {
  return {
    ...setMinMaxDimensions(),
    ...setPadding(20),

    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
}

const setDebug = (bool) => {
  if (bool) {
    return {
      borderWidth: 1,
      borderColor: 'red',
    }
  }

  return {}
}

export { setDefaultContainer, setDebug, setPadding };
