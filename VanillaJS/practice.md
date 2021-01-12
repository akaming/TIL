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

<br>

[이벤트 및 이벤트 핸들러](https://developer.mozilla.org/ko/docs/Web/Events)
------
* 웹 사이트에서 발생하는 모든(사건)을 의미 ex) 클릭,새로고침,닫기,버튼입력,submit,etc. 등
* javascript event 는 굉장히 많이 있음
* 사실 노마드코더에서는 addEventListener() 메서드 만 써서 밑에는 자주 쓰는 이벤트들을 정리 할려다가 내가 함수(Function)와 메소드(Method)의 정의를 잘 모르는거 같아서 다시 정리 함

### 객체(Object)
* 자바스크립트의 객체는 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합

### 프로퍼티(Property)
* 객체에 붙은 변수(variable)
* 프로퍼티 키(이름)와 프로퍼티 값으로 구성
* 프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 됨
### 함수(function)
* 독립적으로 존재

### 메서드(method)
* 객체에 종속되어 존재
* 호출된 객체에 암시적으로 전달 가능
* 클래스 안에 있는 data를 조작 가능


### Window 객체 프로퍼티
|프로퍼티|설명|
|-------|----|
|closed|창이 종료되었는지 여부를 나타내는 부울(bollean) 값을 반환한다.|
|defaultStatus|창의 상태표시줄의 텍스트를 반환하거나 설정한다.|
|document| 창의 document 객체를 반환한다.|
|frameElement| 현재 창에 삽입된 < iframe > 요소를 반환한다.|
|frames| 현재 창에서 모든 < iframe > 요소를 반환한다.|
|history| 창의 history 객체를 반환한다.|
|innerHeight| 창의 콘텐츠 영역(뷰포트)의 내부 높이를 반환한다|
|innerWidth| 창의 콘텐츠 영역(뷰포트)의 내부 너비를 반환한다.|
|length| 현재 창의 < iframe > 요소의 갯수를 반환한다.|
|localStorage| 데이터를 저장하는데 사용되는 로컬 스토리지 객체에 대한 참조를 반환한다. 저장된 데이터는 유효기간이 없다.|
|location| 창의 location 객체를 반환한다.|
|name| 창의 이름을 반환하거나 설정한다.|
|navigator| 창의 navigator 객체를 반환한다.|
|opener| 창을 생성한 창에 대한 참조를 반환한다.|
|outerHeight| 툴바 및 스크롤바를 포함하는 창의 외부 높이를 반환한다.|
|outerWidth| 툴바 및 스크롤바를 포함하는 창의 외부 너비를 반환한다.|
|pageXOffset| 창의 상부 좌측 구석으로부터 현재의 문서가 스크롤(수평) 된 픽셀를 반환한다.|
|pageYOffset| 창의 상부 좌측 구석으로부터 현재의 문서가 스크롤(수직) 된 픽셀 반환한다.|
|parent| 현재 창의 부모 창을 반환한다.|
|screen| 창의 screen 객체를 반환한다|
|screenLeft|데스크톱을 기준으로 창 화면의 X좌표를 반환한다.|
|screenTop| 데스크톱을 기준으로 창 화면의 Y좌표를 반환한다. |
|screenX| 데스크톱을 기준으로 창 화면의 X좌표를 반환한다. |
|screenY| 데스크톱을 기준으로 창 화면의 Y좌표를 반환한다. |
|sessionStorage| 데이터를 저장하는데 사용되는 로컬 스토리지 객체에 대한 참조를 반환한다. 저장된 데이터는 하나의 세션이다(브라우저 ||탭이 닫힐때 손실). |
|scrollX| pageXOffset 의 별칭이다. |
|scrollY| pageYOffset 의 별칭이다. |
|self| 현재 창을 반환한다. |
|status| 창의 상태표시줄의 텍스트를 반환하거나 설정한다. |
|top| 최상위의 브라우저 창을 반환한다.|

<br>

### Window 객체 메서드
|메서드|설명|
|-----|----|
|alert()| 메세지와 확인 버튼을 대화상자를 표시한다. |
|atob()| base-64로 인코딩 된 문자열을 디코딩한다. |
|blur()| 현재 창에서 포커스를 제거한다. |
|btoa()| base-64로 문자열을 인코딩한다. |
|clearInterval()| setInterval()로 설정한 타이머를 제거한다. |
|clearTimeout()| setTimeout()로 설정한 타이머를 제거한다. |
|close()| 현재 창을 닫는다. |
|confirm()| 메세지 및 확인, 취소 버튼이 있는 대화상자를 표시한다. |
|focus()| 현재 창을 포커스한다. |
|getComputedStyle()| 현재 계산된 CSS 스타일 요소의 적용을 가져온다. |
|getSelection()| 사용자에 의해 선택된 텍스트의 범위를 나타내는 selection 객체를 반환한다. |
|matchMedia()| 지정된 CSS 미디어쿼리 문자열을 나타내는 mediaQueryList 객체를 반환한다. |
|moveBy()| 현재 위치에 창을 상대적으로 이동시킨다. |
|moveTo()| 지정된 위치에 창을 이동시킨다. |
|open()| 새로운 브라우저 창을 생성한다. |
|print()| 현재 창의 내용을 인쇄한다. |
|prompt()| 방문자의 입력을 기다리는 대화상자를 표시한다. |
|resizeBy()| 지정된 픽셀만큼 창 크기를 조정한다. |
|resizeTo()| 지정된 너비와 높이로 창 크기를 조정한다. |
|scroll()| 이 메서드는 scrollTo() 메서드로 대체되었다. |
|scrollBy()| 지정된 픽셀의 수만큼 문서를 스크롤한다. |
|scrollTo()| 지정된 좌표로 문서를 스크롤한다. |
|setInterval()| 함수를 호출하거나 지정된 간격(밀리초)으로 표현식을 수행한다. |
|setTimeout()| 함수를 호출하거나 지정된 밀리초의 수 이후에 표현식을 수행한다. |
|stop()| 로딩중인 창을 중지한다.|

<br>

### addEventListener 등으로 등록할 수 있는 이벤트 중 자주 쓰이는 이벤트 목록
* addEventListener 란?
    * document내에 특정요소에 event를 등록할때 사용하는 메서드

|이벤트 명|설명|
|--------|----|
|hange|변동이 있을 때 발생 |
|click|클릭시 발생 |
|focus|포커스를 얻었을 때 발생|
|keydown| 키를 눌렀을 때 발생 |
|keyup| 키에서 손을 땟을 때 발생 |
|load| 로드가 완료 되었을 때 발생 |
|mousedown| 마우스를 클릭 했을 때 발생|
|mouseout| 마우스가 특정 객체 밖으로 나갔을 때 발생 |
|mouseover| 마우스가 특정 객체 위로 올려졌을 때 발생 |
|mousemove| 마우스가 움직였을 때 발생 |
|mouseup| 마우스에서 손을 땟을 때 발생 |
|select| option 태그 등에서 선택을 햇을 때 발생 |

* removeEventListener 란?
    * 등록된 이벤트리스너를 지우는 역할

<br>

###  왜 handleResize()가 아니라 handleResize 일까? 분명 함수를 매개변수로 받는데 왜 괄호가 없는걸까? 
``` 
    노마드 코더 예시)

    const title = document.querySelector("#title");

   function handleResize() {
        console.alert("I have been resized");
    }

    window.addEventListener("resize", handleResize);
```
* **괄호가 존재하는 함수**의 의미는 **지금 당장 해당함수를 호출하라는 의미**
* 반대로, **괄호가 없는 함수**는 **해당 함수가 필요할 때 호출 하라는 의미**
* 위의 예시에서 resize이벤트가 발생했을때, handleResize 함수가 필요한 것이므로, 괄호 없이 사용

### event 객체 확인
- event 객체는 다음과 같은 방법으로 확인 할 수 있음
```
    function handleResize(event) { // event 객체는 JS로부터 생성되는 객체
    console.log(event);
    }

    window.addEventListener("resize", handleResize);
```

<br>

if,else,and 또는 
------
### if
```
    if(조건문) {
        block
    }
```
* if 안에 있는 조건식이 참인 경우 해당하는 경우 block 을 실행 시킴

### else

```
    if(조건문) {
        block
    } else {
        block
    }
```
* if 안에 있는 조건식에 해당되지 않으면 else에 있는 block 을 실행 시킴
### && (and)
```
    if(20 > 5 && "nicolas" === "nicolas") {
        console.log("yes");
    } else {
        console.log("no");
    }
```
* 둘다 참 이어야 실행 가능
    * 20 > 5 이것도 참, "nicolas" === "nicolas" 참 이어야 console.log("yes"); 실행 가능
### || (or)
```
    if(20 > 5 || "nicolas" === "nicolas") {
        console.log("yes");
    } else {
        console.log("no");
    }
```
* 둘 중에 하나라도 참 이면 실행 가능
    * 20 > 5 이것도 참, "nicolas" === "nicolas" 거짓 이어도 console.log("yes"); 실행 가능
    * 20 > 5 이것도 거짓, "nicolas" === "nicolas" 참 이어도 console.log("yes"); 실행 가능