function changeEventTargetColor(colors, event) {
	// get a random item
	const color = colors[Math.floor(Math.random() * colors.length)];
	event.target.setAttribute('style', `background-color: ${color}`);
}

/**
 * @param {HTMLElement} targetElement
 * @param {Array.<string>} colors
 */
export default function(targetElement, colors) {
	targetElement.addEventListener('click', changeEventTargetColor.bind(null, colors));
}