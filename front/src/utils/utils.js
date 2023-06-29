const set_padding = (a, b, c, d) =>  {
  return {
    paddingTop: `${a}%`,
    paddingRight: b !== undefined ? `${b}%` : `${a}%`,
    paddingBottom: c !== undefined ? `${c}%` : `${a}%`,
    paddingLeft: d !== undefined ? `${d}%`
        : (c !== undefined ? `${b}%`
        : (b !== undefined ? `${b}%`
        : `${a}%`))
  }
}

export default set_padding;
