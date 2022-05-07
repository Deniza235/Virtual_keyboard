const keys = [
  {
    name: 'Backquote',
    contentLang: {
      en: '`',
      ru: 'ё',
    },
    contentShift: {
      en: '~',
      ru: 'Ё',
    },
  },
  {
    name: 'Digit1',
    contentLang: {
      en: '1',
      ru: '1',
    },
    contentShift: {
      en: '!',
      ru: '!',
    },
  },
  {
    name: 'Digit2',
    contentLang: {
      en: '2',
      ru: '2',
    },
    contentShift: {
      en: '@',
      ru: '"',
    },
  },
  {
    name: 'Digit3',
    contentLang: {
      en: '3',
      ru: '3',
    },
    contentShift: {
      en: '#',
      ru: '№',
    },
  },
  {
    name: 'Digit4',
    contentLang: {
      en: '4',
      ru: '4',
    },
    contentShift: {
      en: '$',
      ru: ';',
    },
  },
  {
    name: 'Digit5',
    contentLang: {
      en: '5',
      ru: '5',
    },
    contentShift: {
      en: '%',
      ru: '%',
    },
  },
  {
    name: 'Digit6',
    contentLang: {
      en: '6',
      ru: '6',
    },
    contentShift: {
      en: '^',
      ru: ':',
    },
  },
  {
    name: 'Digit7',
    contentLang: {
      en: '7',
      ru: '7',
    },
    contentShift: {
      en: '&',
      ru: '?',
    },
  },
  {
    name: 'Digit8',
    contentLang: {
      en: '8',
      ru: '8',
    },
    contentShift: {
      en: '*',
      ru: '*',
    },
  },
  {
    name: 'Digit9',
    contentLang: {
      en: '9',
      ru: '9',
    },
    contentShift: {
      en: '(',
      ru: '(',
    },
  },
  {
    name: 'Digit0',
    contentLang: {
      en: '0',
      ru: '0',
    },
    contentShift: {
      en: ')',
      ru: ')',
    },
  },
  {
    name: 'Minus',
    contentLang: {
      en: '-',
      ru: '-',
    },
    contentShift: {
      en: '_',
      ru: '_',
    },
  },
  {
    name: 'Equal',
    contentLang: {
      en: '=',
      ru: '=',
    },
    contentShift: {
      en: '+',
      ru: '+',
    },
  },
  {
    name: 'Backspace',
    contentLang: {
      en: 'backspace',
      ru: 'backspace',
    },
    contentShift: {
      en: 'backspace',
      ru: 'backspace',
    },
  },
  {
    name: 'Tab',
    contentLang: {
      en: 'tab',
      ru: 'tab',
    },
    contentShift: {
      en: 'tab',
      ru: 'tab',
    },
  },
  {
    name: 'KeyQ',
    contentLang: {
      en: 'q',
      ru: 'й',
    },
    contentShift: {
      en: 'Q',
      ru: 'Й',
    },
  },
  {
    name: 'KeyW',
    contentLang: {
      en: 'w',
      ru: 'ц',
    },
    contentShift: {
      en: 'W',
      ru: 'Ц',
    },
  },
  {
    name: 'KeyE',
    contentLang: {
      en: 'e',
      ru: 'у',
    },
    contentShift: {
      en: 'E',
      ru: 'У',
    },
  },
  {
    name: 'KeyR',
    contentLang: {
      en: 'r',
      ru: 'к',
    },
    contentShift: {
      en: 'R',
      ru: 'К',
    },
  },
  {
    name: 'KeyT',
    contentLang: {
      en: 't',
      ru: 'е',
    },
    contentShift: {
      en: 'T',
      ru: 'Е',
    },
  },
  {
    name: 'KeyY',
    contentLang: {
      en: 'y',
      ru: 'н',
    },
    contentShift: {
      en: 'Y',
      ru: 'Н',
    },
  },
  {
    name: 'KeyU',
    contentLang: {
      en: 'u',
      ru: 'г',
    },
    contentShift: {
      en: 'U',
      ru: 'Г',
    },
  },
  {
    name: 'KeyI',
    contentLang: {
      en: 'i',
      ru: 'ш',
    },
    contentShift: {
      en: 'I',
      ru: 'Ш',
    },
  },
  {
    name: 'KeyO',
    contentLang: {
      en: 'o',
      ru: 'щ',
    },
    contentShift: {
      en: 'O',
      ru: 'Щ',
    },
  },
  {
    name: 'KeyP',
    contentLang: {
      en: 'p',
      ru: 'з',
    },
    contentShift: {
      en: 'P',
      ru: 'З',
    },
  },
  {
    name: 'BracketLeft',
    contentLang: {
      en: '[',
      ru: 'х',
    },
    contentShift: {
      en: '{',
      ru: 'Х',
    },
  },
  {
    name: 'BracketRight',
    contentLang: {
      en: ']',
      ru: 'ъ',
    },
    contentShift: {
      en: '}',
      ru: 'Ъ',
    },
  },
  {
    name: 'Backslash',
    contentLang: {
      en: '\\',
      ru: '\\',
    },
    contentShift: {
      en: '|',
      ru: '/',
    },
  },
  {
    name: 'Delete',
    contentLanDelg: {
      en: 'Del',
      ru: 'Del',
    },
    contentShift: {
      en: 'Del',
      ru: 'Del',
    },
  },
  {
    name: 'CapsLock',
    contentLang: {
      en: 'capsLock',
      ru: 'capsLock',
    },
    contentShift: {
      en: 'capsLock',
      ru: 'capsLock',
    },
  },
  {
    name: 'KeyA',
    contentLang: {
      en: 'a',
      ru: 'ф',
    },
    contentShift: {
      en: 'A',
      ru: 'Ф',
    },
  },
  {
    name: 'KeyS',
    contentLang: {
      en: 's',
      ru: 'ы',
    },
    contentShift: {
      en: 'S',
      ru: 'Ы',
    },
  },
  {
    name: 'KeyD',
    contentLang: {
      en: 'd',
      ru: 'в',
    },
    contentShift: {
      en: 'D',
      ru: 'В',
    },
  },
  {
    name: 'KeyF',
    contentLang: {
      en: 'f',
      ru: 'а',
    },
    contentShift: {
      en: 'F',
      ru: 'А',
    },
  },
  {
    name: 'KeyG',
    contentLang: {
      en: 'g',
      ru: 'п',
    },
    contentShift: {
      en: 'G',
      ru: 'П',
    },
  },
  {
    name: 'KeyH',
    contentLang: {
      en: 'h',
      ru: 'р',
    },
    contentShift: {
      en: 'H',
      ru: 'Р',
    },
  },
  {
    name: 'KeyJ',
    contentLang: {
      en: 'j',
      ru: 'о',
    },
    contentShift: {
      en: 'J',
      ru: 'О',
    },
  },
  {
    name: 'KeyK',
    contentLang: {
      en: 'k',
      ru: 'л',
    },
    contentShift: {
      en: 'K',
      ru: 'Л',
    },
  },
  {
    name: 'KeyL',
    contentLang: {
      en: 'l',
      ru: 'д',
    },
    contentShift: {
      en: 'L',
      ru: 'Д',
    },
  },
  {
    name: 'Semicolon',
    contentLang: {
      en: ';',
      ru: 'ж',
    },
    contentShift: {
      en: ':',
      ru: 'Ж',
    },
  },
  {
    name: 'Quote',
    contentLang: {
      en: '\'',
      ru: 'э',
    },
    contentShift: {
      en: '"',
      ru: 'Э',
    },
  },
  {
    name: 'Enter',
    contentLang: {
      en: 'enter',
      ru: 'enter',
    },
    contentShift: {
      en: 'enter',
      ru: 'enter',
    },
  },
  {
    name: 'ShiftLeft',
    contentLang: {
      en: 'shift',
      ru: 'shift',
    },
    contentShift: {
      en: 'shift',
      ru: 'shift',
    },
  },
  {
    name: 'KeyZ',
    contentLang: {
      en: 'z',
      ru: 'я',
    },
    contentShift: {
      en: 'Z',
      ru: 'Я',
    },
  },
  {
    name: 'KeyX',
    contentLang: {
      en: 'x',
      ru: 'ч',
    },
    contentShift: {
      en: 'X',
      ru: 'Ч',
    },
  },
  {
    name: 'KeyC',
    contentLang: {
      en: 'c',
      ru: 'с',
    },
    contentShift: {
      en: 'C',
      ru: 'С',
    },
  },
  {
    name: 'KeyV',
    contentLang: {
      en: 'v',
      ru: 'м',
    },
    contentShift: {
      en: 'V',
      ru: 'М',
    },
  },
  {
    name: 'KeyB',
    contentLang: {
      en: 'b',
      ru: 'и',
    },
    contentShift: {
      en: 'B',
      ru: 'И',
    },
  },
  {
    name: 'KeyN',
    contentLang: {
      en: 'n',
      ru: 'т',
    },
    contentShift: {
      en: 'N',
      ru: 'Т',
    },
  },
  {
    name: 'KeyM',
    contentLang: {
      en: 'm',
      ru: 'ь',
    },
    contentShift: {
      en: 'M',
      ru: 'Ь',
    },
  },
  {
    name: 'Comma',
    contentLang: {
      en: ',',
      ru: 'б',
    },
    contentShift: {
      en: '<',
      ru: 'Б',
    },
  },
  {
    name: 'Period',
    contentLang: {
      en: '.',
      ru: 'ю',
    },
    contentShift: {
      en: '>',
      ru: 'Ю',
    },
  },
  {
    name: 'Slash',
    contentLang: {
      en: '/',
      ru: '.',
    },
    contentShift: {
      en: '?',
      ru: ',',
    },
  },
  {
    name: 'ArrowUp',
    contentLang: {
      en: '▲',
      ru: '▲',
    },
    contentShift: {
      en: '▲',
      ru: '▲',
    },
  },
  {
    name: 'ShiftRight',
    contentLang: {
      en: 'shift',
      ru: 'shift',
    },
    contentShift: {
      en: 'shift',
      ru: 'shift',
    },
  },
  {
    name: 'ControlLeft',
    contentLang: {
      en: 'ctrl',
      ru: 'ctrl',
    },
    contentShift: {
      en: 'ctrl',
      ru: 'ctrl',
    },
  },
  {
    name: 'MetaLeft',
    contentLang: {
      en: 'Win',
      ru: 'Win',
    },
    contentShift: {
      en: 'Win',
      ru: 'Win',
    },
  },
  {
    name: 'AltLeft',
    contentLang: {
      en: 'alt',
      ru: 'alt',
    },
    contentShift: {
      en: 'alt',
      ru: 'alt',
    },
  },
  {
    name: 'Space',
    contentLang: {
      en: ' ',
      ru: ' ',
    },
    contentShift: {
      en: ' ',
      ru: ' ',
    },
  },
  {
    name: 'AltRight',
    contentLang: {
      en: 'alt',
      ru: 'alt',
    },
    contentShift: {
      en: 'alt',
      ru: 'alt',
    },
  },
  {
    name: 'ArrowLeft',
    contentLang: {
      en: '◄',
      ru: '◄',
    },
    contentShift: {
      en: '◄',
      ru: '◄',
    },
  },
  {
    name: 'ArrowDown',
    contentLang: {
      en: '▼',
      ru: '▼',
    },
    contentShift: {
      en: '▼',
      ru: '▼',
    },
  },
  {
    name: 'ArrowRight',
    contentLang: {
      en: '►',
      ru: '►',
    },
    contentShift: {
      en: '►',
      ru: '►',
    },
  },
  {
    name: 'ControlRight',
    contentLang: {
      en: 'ctrl',
      ru: 'ctrl',
    },
    contentShift: {
      en: 'ctrl',
      ru: 'ctrl',
    },
  },
];
export default keys;
