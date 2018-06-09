const data = {
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
  },
  'solarized': {
    'color0': '#002b36',
    'color1': '#073642',
    'color2': '#586e75',
    'color3': '#657b83',
    'color4': '#839496',
    'color5': '#93a1a1',
    'color6': '#eee8d5',
    'color7': '#fdf6e3',
    'color8': '#b58900',
    'color9': '#cb4b16',
    'color10': '#dc322f',
    'color11': '#d33682',
    'color12': '#6c71c4',
    'color13': '#268bd2',
    'color14': '#2aa198',
    'color15': '#859900',
  }
}

const updateColors = (targets, palette) => {
  const colors = data[palette]
  targets.forEach((box, i) => {
    const color = colors[`color${i}`]
    box.style.background = color
    box.setAttribute('data-clipboard-text', color)
  })

}

document.addEventListener('DOMContentLoaded', e => {
  const colorsBoxes = document.querySelectorAll('.color')
  updateColors(colorsBoxes, 'base16')
  const clipboard = new ClipboardJS(colorsBoxes)
  clipboard.on('success', (event) => {
    console.log('copied', event.text);
      // const confirmation = document.createElement('div')
      // confirmation.className = 'fullscreen'
      // confirmation.innerHTML = `<div class="inner animated tada"><p class="message" style="color: ${event.text};">copied</p></div>`
      // document.body.appendChild(confirmation)
      // window.setTimeout(() => document.body.removeChild(confirmation), 700)
      // event.clearSelection();
  });
  clipboard.on('error', (event) => {
      console.error('Action:', event.action);
      console.error('Trigger:', event.trigger);
  });

  document.querySelector('.select_options').addEventListener('click', event => {
    if (event.target.id) {
      console.log(event.target.id)
      updateColors(colorsBoxes, event.target.id)
    }
  })

})



