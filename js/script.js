console.log('hello!')


let gradient = true;

const changeBackgroundColor = () => {
	if (!gradient) document.querySelector('.page').classList.add('gradient');
	else document.querySelector('.page').classList.remove('gradient');
};

const randomStuff = () => {
	gradient = !gradient;
	changeBackgroundColor(gradient);
	// happened today in history
	// change color
	// disco
	// translate to spanish
};

document.getElementById('clickme').addEventListener('click', randomStuff);