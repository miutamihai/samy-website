const messages = ['Salut,', 'Hola,', 'Meow,', 'Hello,' ]
let rank=0

const getTypewriter = () => document.getElementById('typewriter')

const getProfile = () => document.getElementsByClassName('profile').item(0)

const getAudio = () => document.getElementsByTagName('audio')[0]

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
	getTypewriter().addEventListener("webkitAnimationEnd", changeText)
	getTypewriter().addEventListener("animationend", changeText)
	getProfile().addEventListener('mouseenter', () => getAudio().play())
}

const onFirstArrowClick = () => document.getElementById('firstSection').scrollIntoView()

const onSecondArrowClick = () => document.getElementById('secondSection').scrollIntoView()

const onCodingArrowClick = () => document.getElementById('codingSection').scrollIntoView()

const onOwnerArrowClick = () => document.getElementById('ownerSection').scrollIntoView()

