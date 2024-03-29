const messages = ['Salut,', 'Hola,', 'Meow,', 'Hello,']
let rank = 0

const getTypewriter = () => document.getElementById('typewriter')

const getProfile = () => document.getElementsByClassName('profile').item(0)

const getAudio = () => document.getElementsByTagName('audio')[0]

const getUpScrollButton = () => document.getElementById('upScrollButton')

const getLandingContainer = () => document.getElementById('landingContainer')

function changeText() {
	let _h1 = this.getElementsByTagName('h1')[0]
	_h1.style.webkitAnimation = 'none'

	setTimeout(applyChange(_h1), 1000)
}

const applyChange = _h1 => () => {
	_h1.innerHTML = messages[rank]
	let speed = 0.5 * messages[rank].length / 6
	_h1.style.webkitAnimation = `typing ${speed}s steps(40, end), blink-caret .75s step-end infinite`
	rank = rank === messages.length - 1
		? 0
		: rank + 1
}

const scroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		getUpScrollButton().style.display = 'block'
	} else {
		getUpScrollButton().style.display = 'none'
	}
}

window.onload = () => {
	getTypewriter().addEventListener('webkitAnimationEnd', changeText)
	getTypewriter().addEventListener('animationend', changeText)
	getProfile().addEventListener('mouseenter', () => getAudio().play())
}

window.onscroll = scroll

const goToSection = section => document.getElementById(section).scrollIntoView()

const goToTop = () => {
	getLandingContainer().scrollIntoView()
}

