console.log('hello!')


let gradient = true;

function generateRandomGradient() {
    // Generate random RGB values for two colors
    var color1 = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
    var color2 = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };

    // Convert the RGB values to CSS color strings
    var color1Str = `rgb(${color1.r}, ${color1.g}, ${color1.b})`;
    var color2Str = `rgb(${color2.r}, ${color2.g}, ${color2.b})`;

    // Generate a CSS gradient string using the two colors
    var gradient = `linear-gradient(${color1Str}, ${color2Str})`;

    return gradient;
}

const changeBackgroundColor = () => {
	document.body.style.background  = generateRandomGradient();
};

const generateGradient = () => {
	changeBackgroundColor(gradient);
};

const clear = () => {
	document.body.style.background = 'white';
}

document.getElementById('clickme').addEventListener('click', generateGradient);
document.getElementById('clear').addEventListener('click', clear);