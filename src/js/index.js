import keybordKeys from "./keys.js";

const Keyboard = {
  

  download() {
    const display = document.createElement('textarea');
    display.classList.add('display');
    document.body.append(display);

    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');

    const keys = keybordKeys.map(el => {
      console.log(el.contentLang.en);
      let key = document.createElement('button');
      key.classList.add('keyboard__key');
      key.textContent = el.contentLang.en;
      wrapper.append(key);
      return key;
    } )
    document.body.append(wrapper);
  },
  
}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.download();
})

