const messages = ['Salut,', 'Hello,', 'Meow,']
let rank=0

const getElement = () => document.getElementById('typewriter')

function changeText () {
	let _h1 = this.getElementsByTagName('h1')[0]
	_h1.style.webkitAnimation = 'none'

	setTimeout(applyChange(_h1), 1000);
}

const applyChange = _h1 => () => {
	_h1.innerHTML=messages[rank]
	let speed =0.5*messages[rank].length/6
	_h1.style.webkitAnimation = `typing ${speed}s steps(40, end), blink-caret .75s step-end infinite`
	rank = rank === messages.length - 1
		? 0
		: rank + 1
}

window.onload = () => {
	getElement().addEventListener("webkitAnimationEnd", changeText)
	getElement().addEventListener("animationend", changeText)
}

const onNextSectionClick = () => document.getElementById('firstSection').scrollIntoView()

