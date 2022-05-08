import keybordKeys from "./keys.js";

const Keyboard = {
  language: 'en',
  isCapsLock: 'false',
  btns: [],

  download() {
    const display = document.createElement('textarea');
    display.classList.add('display');
    document.body.append(display);

    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');

    this.btns = keybordKeys.map(el => {
      let key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.id = el.name;
      key.textContent = el.contentLang.en;
      wrapper.append(key);
      this.showDisplay(key);
      return key;
    } )
    document.body.append(wrapper);
    this.pressBtn(this.btns);
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

    })
  }

}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.download();
})

