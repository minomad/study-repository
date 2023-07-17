```js
function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
}

const isNull = (data) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';
```
