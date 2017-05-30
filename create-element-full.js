module.exports = exports = createElementFull;

function createElementFull (element, attribute = {}, inner = []) {
  if (typeof(element) === 'undefined') {
    return false;
  }
  if (typeof(inner) === 'undefined') {
    inner = '';
  }
  let el = document.createElement(element);
  if (typeof(attribute) === 'object') {
    for (let key in attribute) {
      el.setAttribute(key, attribute[key]);
    }
  }
  if (!Array.isArray(inner)) {
    inner = [inner];
  }
  for (let k = 0; k < inner.length; k++) {
    if (inner[k].tagName) {
      el.appendChild(inner[k]);
    } else {
      el.appendChild(document.createTextNode(inner[k]));
    }
  }
  return el;
}
