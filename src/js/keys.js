const keys = [
  {
    name: 'key_1',
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
    name: 'key_number_1',
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
    name: 'key_number_2',
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
    name: 'key_number_3',
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
    name: 'key_number_4',
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
    name: 'key_number_5',
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
    name: 'key_number_6',
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
    name: 'key_number_7',
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
    name: 'key_number_8',
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
    name: 'key_number_9',
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
    name: 'key_number_0',
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
    name: 'key_2',
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
    name: 'key_3',
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
    name: 'key_backspace',
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
    name: 'key_tab',
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
    name: 'key_4',
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
    name: 'key_5',
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
    name: 'key_6',
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
    name: 'key_7',
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
    name: 'key_8',
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
    name: 'key_9',
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
    name: 'key_10',
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
    name: 'key_11',
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
    name: 'key_12',
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
    name: 'key_13',
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
    name: 'key_14',
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
    name: 'key_15',
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
    name: 'key_slash',
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
    name: 'key_capsLock',
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
    name: 'key_16',
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
    name: 'key_17',
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
    name: 'key_18',
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
    name: 'key_19',
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
    name: 'key_20',
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
    name: 'key_21',
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
    name: 'key_22',
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
    name: 'key_23',
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
    name: 'key_24',
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
    name: 'key_25',
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
    name: 'key_26',
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
    name: 'key_enter',
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
    name: 'key_shiftLeft',
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
    name: 'key_27',
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
    name: 'key_28',
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
    name: 'key_29',
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
    name: 'key_30',
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
    name: 'key_31',
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
    name: 'key_32',
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
    name: 'key_33',
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
    name: 'key_34',
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
    name: 'key_35',
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
    name: 'key_36',
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
    name: 'key_arrowUp',
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
    name: 'key_shiftRight',
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
    name: 'key_ctrlLeft',
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
    name: 'key_Win',
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
    name: 'key_altLeft',
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
    name: 'key_space',
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
    name: 'key_altRight',
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
    name: 'key_arrowLeft',
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
    name: 'key_arrowDown',
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
    name: 'key_arrowRight',
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
    name: 'key_ctrlRight',
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
