const createElementFull = require('./create-element-full');

let options = {
  class: 'content',
  id: 'main',
  title: 'Main Content Area',
};

let inner1 = createElementFull('span', [], 'Appended ');
let inner2 = createElementFull('span', [], 'Content');
let outer = createElementFull('div', options, [inner1, inner2]);

document.querySelector('body').appendChild(outer);
