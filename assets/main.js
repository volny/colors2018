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
  },
  'gruvbox': {
    'color0': '#1d2021',
    'color1': '#282828',
    'color2': '#32302f',
    'color3': '#3c3836',
    'color4': '#504945',
    'color5': '#665c54',
    'color6': '#7c6f64',
    'color7': '#928374',
    'color8': '#fb4934',
    'color9': '#b8bb26',
    'color10': '#fabd2f',
    'color11': '#83a598',
    'color12': '#d3869b',
    'color13': '#8ec07c',
    'color14': '#fe8019',
    'color15': '#fbf1c7',
  },
  'gruvbox-bright': {
    'color0': '#f9f5d7',
    'color1': '#fbf1c7',
    'color2': '#f2e5bc',
    'color3': '#ebdbb2',
    'color4': '#d5c4a1',
    'color5': '#bdae93',
    'color6': '#a89984',
    'color7': '#928374',
    'color8': '#cc241d',
    'color9': '#98971a',
    'color10': '#d79921',
    'color11': '#458588',
    'color12': '#b16286',
    'color13': '#689d6a',
    'color14': '#d65d0e',
    'color15': '#ebdbb2',
  }
}

const updateColors = (targets, palette) => {
  const colors = data[palette]
  targets.forEach((box, i) => {
    const color = colors[`color${i}`]
    box.style.background = color
    box.setAttribute('data-clipboard-text', color)
  })

  // UPDATE SELECT OPTIONS

  var options = document.querySelector('.select_options')
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  const choices = Object.keys(data).filter(p => p !== palette)
  const children = choices.map(c => {
    const listItem = document.createElement('li')
    listItem.className = 'select_option'
    const input = document.createElement('input')
    input.className = 'select_input'
    input.type = 'radio'
    input.name = 'awesomeness'
    input.id = c
    const label = document.createElement('label')
    label.className = 'select_label'
    label.setAttribute('for', c)
    label.innerHTML = c.split('-').map(a => capitalize(a)).join(' ')
    listItem.appendChild(input)
    listItem.appendChild(label)
    return listItem
  })
  children.forEach(child => {
    options.appendChild(child)
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

      // update logo

      const logo = document.querySelector('.colorscheme-img')
      const parent = logo.parentNode
      logo.style.opacity = '0'
      window.setTimeout(() => {
        parent.removeChild(logo)
      }, 250)
      const newLogo = document.createElement('img')
      const name = `static/${event.target.id}`
      newLogo.src = `${name}.png`
      newLogo.alt = name
      newLogo.className = 'colorscheme-img'
      newLogo.style.opacity = '0'
      window.setTimeout(() => {
        parent.appendChild(newLogo)
        window.setTimeout(() => {
          newLogo.style.opacity = '1'
        }, 250)
      }, 250)


      // fade switch colors




      updateColors(colorsBoxes, event.target.id)
    }
  })

})



