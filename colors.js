import chroma from 'chroma-js'

const brand = {
  red: chroma('#cb1b45'),
  darkRed: chroma('#8a1a35'),
}

export default {
  brand,
  dark: chroma.scale([brand.red, 'black'])(0.92),
  white: chroma.scale([brand.red, 'white'])(0.92),
}
