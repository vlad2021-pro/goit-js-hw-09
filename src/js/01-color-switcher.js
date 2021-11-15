
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
  e.target.dissabled = true
  timerId = setInterval(() => {refs.bodyEl.style.backgroundColor = getRandomHexColor()  }, 1000)
}
// console.log(e.target)
// const onSwitchTheme = e => { }


refs.startBtn.addEventListener('click', onSwitchTheme)
// refs.stopBtn.addEventListener('click', offSwitchTheme)
