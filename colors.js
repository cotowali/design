import color from 'color'

const main = {
  red: color('#cb1b45'),
  darkRed: color('#8a1a35'),
}

export default {
  ...main,
  dark: color.hsl(main.red.hue(), 26, 14),
  black: color.hsl(main.red.hue(), 26, 3),
  white: color.hsl(main.red.hue(), 63, 96),
}
