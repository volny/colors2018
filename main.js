const colors = {
  'base16': {
    'color0': '#181818',
    'color1': '#282828',
    'color2': '#383838',
    'color3': '#585858',
    'color4': '#b8b8b8',
    'color5': '#d8d8d8',
    'color6': '#e8e8e8',
    'color7': '#f8f8f8',
    'color8': '#ab4642',
    'color9': '#dc9656',
    'color10': '#f7ca88',
    'color11': '#a1b56c',
    'color12': '#86c1b9',
    'color13': '#7cafc2',
    'color14': '#ba8baf',
    'color15': '#a16946',
  }
}

document.addEventListener("DOMContentLoaded", e => {
  const colorsBoxes = document.querySelectorAll('.color')
  colorsBoxes.forEach((box, i) => {
    const color = colors.base16[`color${i}`]
    box.style.background = color
    box.setAttribute('data-clipboard-text', color)
  })
})


