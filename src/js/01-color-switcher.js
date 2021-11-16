
const refs = {
  bodyEl: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const onSwitchTheme = e => {
  e.target.disabled = true
  timerId = setInterval(() => {refs.bodyEl.style.backgroundColor = getRandomHexColor ()}, 1000)
}

const offSwitchTheme = e => {
  refs.startBtn.disabled = false
  clearInterval (timerId)
}


refs.startBtn.addEventListener('click', onSwitchTheme)
refs.stopBtn.addEventListener('click', offSwitchTheme)
