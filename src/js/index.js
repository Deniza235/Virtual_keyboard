import keybordKeys from "./keys.js";

const Keyboard = {
  language: 'en',
  isCapsLock: 'false',
  display: null,
  btns: [],

  download() {
    this.display = document.createElement('textarea');
    this.display.classList.add('display');
    this.display.setAttribute('autofocus', true);
    document.body.append(this.display);

    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');

    const descr = document.createElement('p');
    descr.classList.add('descr');
    descr.textContent = 'Клавиатура создана в операционной системе Windows';

    this.btns = keybordKeys.map(el => {
      let key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.id = el.name;
      key.textContent = el.contentLang.en;
      wrapper.append(key);
      this.showDisplay(key);
      return key;
    })
    document.body.append(wrapper);
    document.body.append(descr);
    this.pressBtn(this.btns);
    this.display.addEventListener('blur', (e) => {
      e.target.focus();
  });
  },

  pressBtn(btns) {
    document.addEventListener('keydown', function(event){
      btns.forEach(el => {
      if(event.code === el.id) {
          el.classList.add('active');
        }
      })
    });
    document.addEventListener('keyup', function(event){
      btns.forEach(el => {
      if(event.code === el.id) {
          el.classList.remove('active');
        }
      })
    });
  },

  showDisplay(key) {
    key.addEventListener('click', (event) => {
      let word = '';
      for(let i = 0; i < keybordKeys.length; i ++) {
        if(keybordKeys[i].name === event.target.id) {
          if(this.isCapsLock) {
            word = keybordKeys[i].contentLang['en'];
          } else {
            word = keybordKeys[i].contentShift['en'];
          }
        }
      }
      this.display.setRangeText(word, this.display.selectionStart, this.display.selectionEnd, 'end');
    })
    
  },

  /* setLocalStorage() {
    localStorage.setItem(this.language);
  },

  getLocalStorage() {
    if(localStorage.getItem(this.language)) {
      this.language = localStorage.getItem(this.language);
    }
  }, */

}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.download();
})

/* window.addEventListener('beforeunload', Keyboard.setLocalStorage);
window.addEventListener('load', Keyboard.getLocalStorage); */

