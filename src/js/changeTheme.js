const inputEl = document.querySelector('#theme-switch-toggle');

const bodyEl = document.querySelector('body')

inputEl.addEventListener('change', foo)

function foo() {        
    bodyEl.classList.toggle('dark-theme', inputEl.checked)
    bodyEl.classList.toggle('ligth-theme', !inputEl.checked)    
}