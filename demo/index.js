import colorSwitch from '../src/index';

const element = document.getElementById('the_box');

colorSwitch(element, [
	'red',
	'green',
	'blue',
	'#f0f',
	'rgba(0, 0, 0, 0.4)',
	'#fefefe'
]);