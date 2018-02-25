# Element color changer

This is a demonstration on how to create a JavaScript library

## [Demo link](https://stak-digital.github.io/javascript-module/dist/)

## Purpose

This was made to change the color of a clicked element to a random color from an array of color strings

## Usage

`npm install --save color-switch`

```
import colorSwitch from ‘color-switch’;

const yourElement = document.getElementById(‘el’);
colorSwitch(yourElement, [
    ‘#f0f’,
    ‘red’,
    ‘rgba(0, 0, 0, 0.4)’,
    ‘green’
]);
```
