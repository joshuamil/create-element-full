# createElementFull

`create-element-full` extends the capabilities of `createElement` by allowing you to specify an attribute collection and additional content to embed within the newly created element.
If you prefer the style of `createElement` rather than using ES6 [_template literals_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or the `npm` package [`markobj`](https://www.npmjs.com/package/markobj) then `create-element-full` gives you the ability to create complete, nested DOM elements more easily than with vanilla js syntax alone.


## Install

```
npm install create-element-full
```


## Building the Example
This will install `Webpack`, `eslint`, `babel`, `es2015` and the necessary loaders to transpile the example code to an `app.bundle.js` file. If you just want to run the example and not continue to modify the example code, then you do not need the `--watch` flag for the `webpack` command.

```
$ cd /directory/where/you/installed/create-element-full
$ npm install
$ webpack --watch
$ open http://localhost/create-element-full/example.html
```


## Usage
```js
const createElementFull = require('./create-element-full');

let options = {
  class: 'content',
  id: 'main',
  title: 'Main Content Area'
};

let inner1 = createElementFull('span', [], 'Appended');
let inner2 = createElementFull('span', [], 'Content');
let outer = createElementFull('div', options, [inner1, inner2]);

document.querySelector('body').appendChild(outer);

/**
 * Inserts the following HTML into the document body:
 <div class="content" id="main" title="Main Content Area">
  <span>Appended</span>
  <span>Content</span>
 </div>
 */

```


## Options

### element (String = '')
The HTML element you wish to create (e.g.: `div`, `ul`, `span`, etc.)

### attribute (Object = {})
An object containing attribute/value pairs you wish the target element to possess.

### input (Array = [] | String = '')
An array of objects, or a text string that you wish the target element to contain.
