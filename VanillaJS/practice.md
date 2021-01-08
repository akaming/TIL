연습
=============

<br>

첫 번째 JS 함수
------
* console.log 에서 console 이라는 object 가 있고 log 라는 키가 있음
* console.log(nicoInfo.favFood) 이 경우에는 log는 function(함수) 이다.
* console.log(console) 을 찍으면 아래처럼 나옴
```
    assert: ƒ assert()
    clear: ƒ clear()
    context: ƒ context()
    count: ƒ count()
    countReset: ƒ countReset()
    debug: ƒ debug()
    dir: ƒ dir()
    dirxml: ƒ dirxml()
    error: ƒ error()
    group: ƒ group()
    groupCollapsed: ƒ groupCollapsed()
    groupEnd: ƒ groupEnd()
    info: ƒ info()
    log: ƒ log()
    .
    .
    .
```
* 즉, console은 niconInfo(그냥 예시로 만든 함수) 보다 더 큰 object 이다.

<br>

* 함수란?
    * 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록
```
    함수 예시)

    function sayHello() {
        console.log('Hello!');
    }

    sayHello();
    console.log("Hi!");
```

* 인자(argument)란?
    * 함수에 전달된 인수에 해당하는 Array 형태의 객체
```
    함수 예시)

    function sayHello(potato) {
        console.log('Hello!',potato);
    }

    sayHello("Nicolas");
    console.log("Hi!");
```
<br>

더 많은 기능 재미
------
* 백틱(``)이란? 
    * 백틱(`)을 사용하면 ${}를 사용해서 문자열과 변수를 적절히 같이 사용할 수 있다.
```
    이전 코드)
    
    const num1 = 10;
    const num2 = 20;

    console.log(num1 + ' + ' + num2 + ' = ' + (num1+num2) +  " 입니다.");
```

```
    백틱을 적용한 코드)
    const num1 = 10;
    const num2 = 20;

    console.log(`${num1} + ${num2} = ${num1+num2} 입니다.`);
```
변수만 따로 구분할 수 있게 해서 좀 더 직관적으로 볼 수 있다.

<br>

* return 
    * 함수 실행을 종료하고, 주어진 값을 호출 지점으로 반환
```
    예시 1)

    function sayHello(name, age) {
            return `Hello ${name} you are ${age} years old`;
    }

    const greetNicolas = sayHello("Nicolas",14)
```
```
    예시 2)

    const calculator =  {
        plus: function(a,b) {
            return a + b;
        }
    }

    const plus = calculator.plus(5, 5);
    console.log(plus);
```

<br>

JS DOM 함수
------
* [DOM (Document Object Module)](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
    * 문서객체모델이라고 하며 HTML 혹은 XML문서의 구조화된 표현을 제공하는 표준 
    * HTML에서는 자바스크립트가 DOM 구조에 접근할 수 있는 방법이 제공되며 이를 통해 문서 구조, 스타일, 내용등을 변경 가능
<br>

* Document.getElementById()
    * 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환
```
    html 예시)
        <h1 id="title">안녕</h1>

    js 예시) 

        const title = document.getElementById("title");
        console.log(title);

    출력 화면)
        <h1 id="title">안녕</h1>
```
<br>

* Document.getElementsByTagName()
    * 리먼트의 HTMLCollection 과 주어진 태그명을 반환
```
    html 예시)
        <p>안녕</p>
        <p>안녕</p>

    js 예시) 
        function getAllParaElems() {
            const allParas = document.getElementsByTagName('p');
            const num = allParas.length;
            alert('p태그 개수 는 ' + num + '개 입니다.');
        }   
        getAllParaElems();

    실행 시킨 화면 alert)
        p태그 개수 는 2개 입니다.
```
<br>

* Document.createElement()
    * 지정한 tagName의 HTML 요소를 만들어 반환
```
     html 예시)
        <p>안녕</p>
        <p>안녕</p>
    
    js 예시)
        function addElement () {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("환영합니다!");
            newDiv.appendChild(newContent);
            
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
        } 
        addElement();
    
    실행 시킨 화면)
        안녕
        안녕
        환영합니다!
```
<br>

* Node.appendChild()
    * 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
```
     html 예시)
        <p>안녕</p>
        <p id="test">안녕</p>
    
    js 예시)
        function addElement () {
            const div = document.createElement("div");
            document.getElementById("test").appendChild(div);
        } 
        addElement();
    
    실행 시킨 화면)
        <p>안녕</p>
        <p id="test">
            안녕
            <div></div>
        </p>
```