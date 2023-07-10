# 클로저

독립적인 변수를 참조하는 함수

###

```js
function closure() {
  
  var num = 1; // 독립적인 변수

  function plus() {
    console.log(num++);
  }

  return plus;
}
var number = closure();
```

####
