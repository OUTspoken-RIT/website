const colors = {
  "foam": "color-foam",
  "magic-turquoise": "color-magic-turquoise",
  "sky-blue": "color-sky-blue",
  "serene-indigo": "color-serene-indigo",
  "royal-purple": "color-royal-purple",
  "burgundy": "color-burgundy",
  "lively-red": "color-lively-red",
  "healing-orange": "color-healing-orange",
  "tangerine": "color-tangerine",
  "sunshine-yellow": "color-sunshine-yellow",
  "white": "color-white",
  "sensual-pink": "color-sensual-pink",
  "bubblegum": "color-bubblegum",
  "plum": "color-plum",
  "spirited-violet": "color-spirited-violet",
  "periwinkle": "color-periwinkle",
  "dryer-lint": "color-dryer-lint",
  "tabby-gray": "color-tabby-gray",
  "asphalt": "color-asphalt",
  "black": "color-black",
  "moss": "color-moss",
  "natural-green": "color-natural-green",
  "fern": "color-fern",
}

export const getColorClassName = (color) => {
  return colors[color] ?? "";
}