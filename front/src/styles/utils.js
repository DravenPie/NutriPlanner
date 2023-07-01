const [ minWindowWidth, minWindowHeight,
  maxWindowWidth, maxWindowHeight ] = [ 360, 665, 1000, 1000 ]

const setDebug = (bool) => {
  if (bool) {
    return {
      debug: {
        borderWidth: 1,
        borderColor: 'red',
      }
    }
  }

  return { }
}

const setPadding = (a, b, c, d) =>  {
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

const setMinMaxDimensions = () => {
  return {
    minWidth: minWindowWidth, minHeight: minWindowHeight,
    maxWidth: maxWindowWidth, maxHeight: maxWindowHeight,
  }
}

export { setDebug, setPadding, setMinMaxDimensions };
