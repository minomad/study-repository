# 원시값의 메서드
원시형의 종류는 문자(string), 숫자(number), bigint, 불린(boolean), 심볼(symbol), null, undefined형으로 총 일곱 가지 입니다

객체는 원시값 보다 무겁습니다.<br/>
객체는 다양한 종류의 값을 저장할 수 있고 함수도 프로퍼티로 사용할 수 있습니다.

원시타입은 가볍지만 값을 가지고만 있습니다.</br>
그래서 가벼운 원시타입을 메서드로 호출할때만 잠깐 객체로 사용하고 다시 되돌리는 것이 래퍼 객체입니다.

원시 래퍼객체를 사용는 이유는 캡슐화<br/>
캡슐화로 내부 상태를 보호하고 외부에선 객체의 메서드를 통해서만 사용할 수 있도록 하는 것입니다.</br>