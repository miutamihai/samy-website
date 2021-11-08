const good = ['nice', 'pretty', 'beautiful', 'cool', 'good', 'Good', 'Nice', 'Pretty', 'Beautiful', 'Cool']

const bad = ['ugly', 'nasty', 'lame', 'bad', 'Bad', 'Ugly', 'Nasty', 'Lame']

const setSubmitDisabled = value => {
	document.getElementById('submit').disabled = value
}

const onSamyOpinionChange = value => {
	if(good.includes(value)) {
		document.getElementById('opinionSamy').classList.add('is-valid')
		document.getElementById('opinionSamyGood').style.display = 'block'
		setSubmitDisabled(false)
	} else if(bad.includes(value)) {
		document.getElementById('opinionSamy').classList.add('is-invalid')
		document.getElementById('opinionSamyBad').style.display = 'block'
		setSubmitDisabled(true)
	} else {
		document.getElementById('opinionSamy').classList.remove('is-valid')
		document.getElementById('opinionSamy').classList.remove('is-invalid')
		document.getElementById('opinionSamyGood').style.display = 'none'
		document.getElementById('opinionSamyBad').style.display = 'none'
		setSubmitDisabled(false)
	}
}

const onWebsiteOpinionChange = value => {
	if(good.includes(value)) {
		document.getElementById('opinionWebsite').classList.add('is-valid')
		document.getElementById('opinionWebsiteGood').style.display = 'block'
		setSubmitDisabled(false)
	} else if(bad.includes(value)) {
		document.getElementById('opinionWebsite').classList.add('is-invalid')
		document.getElementById('opinionWebsiteBad').style.display = 'block'
		setSubmitDisabled(true)
	} else {
		document.getElementById('opinionWebsite').classList.remove('is-valid')
		document.getElementById('opinionWebsite').classList.remove('is-invalid')
		document.getElementById('opinionWebsiteGood').style.display = 'none'
		document.getElementById('opinionWebsiteBad').style.display = 'none'
		setSubmitDisabled(false)
	}
}

const onOwnerOpinionChange = value => {
	if(good.includes(value)) {
		document.getElementById('opinionOwner').classList.add('is-valid')
		document.getElementById('opinionOwnerGood').style.display = 'block'
		setSubmitDisabled(false)
	} else if(bad.includes(value)) {
		document.getElementById('opinionOwner').classList.add('is-invalid')
		document.getElementById('opinionOwnerBad').style.display = 'block'
		setSubmitDisabled(true)
	} else {
		document.getElementById('opinionOwner').classList.remove('is-valid')
		document.getElementById('opinionOwner').classList.remove('is-invalid')
		document.getElementById('opinionOwnerGood').style.display = 'none'
		document.getElementById('opinionOwnerBad').style.display = 'none'
		setSubmitDisabled(false)
	}
}
