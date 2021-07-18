import color from 'color'

const brand = {
  red: color('#cb1b45'),
  darkRed: color('#8a1a35'),
}

export default {
  brand,
  dark: color.hsl(brand.red.hue(), 26, 4),
  white: color.hsl(brand.red.hue(), 63, 96),
}
