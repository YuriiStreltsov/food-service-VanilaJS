import storage from '../js/storage'
const inputEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body')

inputEl.addEventListener('change', onSwitchTheme)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onSwitchTheme() {
    bodyEl.classList.toggle(Theme.LIGHT, !bodyEl.classList.toggle(Theme.DARK));
    storage.save('Theme', bodyEl.classList[0]);
}

const themeChosen = storage.load('Theme');
inputEl.checked = themeChosen === 'dark-theme' ? true : false;
bodyEl.classList.add(themeChosen ? themeChosen : Theme.LIGHT);