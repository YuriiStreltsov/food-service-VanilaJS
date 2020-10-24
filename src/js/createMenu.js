import dataMenu from '../menu.json'
import menuTemlate from '../template/menu.hbs'
import cardMarkup from '../js/cardMarkup'


const listMenu = cardMarkup(dataMenu, menuTemlate)

const listEl = document.querySelector('.js-menu')
listEl.insertAdjacentHTML('beforeend', listMenu)