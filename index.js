'use strict';

function changeEventTargetColor(colors, event) {
	// get a random item
	var color = colors[Math.floor(Math.random() * colors.length)];
	event.target.setAttribute('style', 'background-color: ' + color);
}

/**
 * @param {HTMLElement} targetElement
 * @param {Array.<string>} colors
 */
function index (targetElement, colors) {
	targetElement.addEventListener('click', changeEventTargetColor.bind(null, colors));
}

module.exports = index;
