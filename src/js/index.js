import keys from "./keys.js";

const Keyboard = {
  

  download() {
    const display = document.createElement('textarea');
    display.classList.add('display');
    document.querySelector('body').append(display);

    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard__wrapper');
    document.querySelector('body').append(wrapper);

    const key = document.createElement('button');
    key.classList.add('keyboard__key');
    wrapper.append(key);
  },
}

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.download();
})

