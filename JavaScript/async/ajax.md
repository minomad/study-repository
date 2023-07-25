# ajax
`ajax engine` 

서버는 문자를 받아야 해서 json.stringify를 사용해서 문자로 보내고

서버에서 받은 문자를 json.parse로 다시 데이터로 변환해서 
user interface로 보냄 

스마트폰 브라우저마다 각자의 다른 언어를 사용하니깐 통일된 문자를 서버로 보내는 것


## REST API

`rest - crud` 

post(create) - body에 작성해서 send

get(read) - 유저데이터 url 입력하고 send

put(update)- body에 작성하고 id(타겟)에 값을 추가

delete - id값을 입력 https://jsonplaceholder.typicode.com/users/2(id값)