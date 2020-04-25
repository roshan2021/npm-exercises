const $ = require('jquery');

const keys = require("./keys");
console.log(keys);

import math from './math';

const sayHello = () => console.log('hello');

sayHello();

$('body').css('background-color', 'blue');
console.log('Howdy!');

console.log(math.add(5,8));