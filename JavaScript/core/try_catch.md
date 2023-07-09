try...catch

발생시킬때 -> 던진다고한다. (throw)
명시적으로 인지할때 -> 잡는다고 한다. (catch)
 

```js
function runner() {
    try {
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!'); // 여기서 바로 catch문으로 간다

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}
runner();

```
