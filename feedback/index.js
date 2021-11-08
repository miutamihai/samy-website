const good = ['nice', 'pretty', 'beautiful', 'cool', 'Nice', 'Pretty', 'Beautiful', 'Cool']

const bad = ['ugly', 'nasty', 'lame', 'Ugly', 'Nasty', 'Lame']

const onSamyOpinionChange = value => {
	if(good.includes(value)) {
		document.getElementById('opinionSamy').classList.add('is-valid')
		document.getElementById('opinionSamyGood').style.display = 'block'
	} else if(bad.includes(value)) {
		document.getElementById('opinionSamy').classList.add('is-invalid')
		document.getElementById('opinionSamyBad').style.display = 'block'
	} else {
		document.getElementById('opinionSamy').classList.remove('is-valid')
		document.getElementById('opinionSamy').classList.remove('is-invalid')
		document.getElementById('opinionSamyGood').style.display = 'none'
		document.getElementById('opinionSamyBad').style.display = 'none'
	}
}
