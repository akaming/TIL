
복습
=============
clock.js 
------

* Document.querySelector()
    * 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환
* Date.prototype.getMinutes()
    *  Date 인스턴스의 분을 현지 시간 기준으로 반환
* Date.prototype.getHours()
    * 주어진 날짜의 현지 시간 기준 시를 반환
* Date.prototype.getSeconds()
    * Date 객체의 초 값을 현지 시간에 맞춰 반환
* 비교 연산자
    * 동등 연산자 (==)
        * 두 개의 피연산자가 동일한지 확인하며, Boolean값을 반환
    * 부등 연산자 (!=)
        * 동등 연산자( == ) 의 논리적인 반대값
        * 동등 연산자로 비교시 true일 경우, 부등 연산자는 그 반대인 false를 반환
    * 일치 연산자 (===)
        * 일치 연산자(===, strict equality)는 좌항과 우항의 피연산자가 값과 타입이 모두 같은 경우에만 true를 반환
    * 불일치 연산자 (!==)
        * 일치 연산자( (===) ) 의 논리적인 반대값
        * 일치 연산자로 비교시 true일 경우, 불일치 연산자는 그 반대인 false를 반환
* 관계 연산자
    * 초과 연산자 (>)
        * 왼쪽 피연산자가 오른쪽 피연산자보다 큰 경우 참을 반환
    * 이상 연산자 (>=)
        * 왼쪽 피연산자가 오른쪽 피연산자보다 크거나 같으면 참을 반환
    * 미만 연산자 (<)
        * 왼쪽 피연산자가 오른쪽 피연산자보다 작은 경우 참을 반환
    * 이하 연산자 (<=)
        * 왼쪽 피연산자가 오른쪽 피연산자보다 작거나 같으면 참을 반환
* 논리 연산자
    * 논리 AND (&&)
        * 두 피연산자가 모두 참일 경우에만 true이며 그렇지 않으면 false를 반환
    * 논리 OR (||)
        * 인수 중 하나라도 true가 있으면 true를 반환하고 그렇지 않으면 false를 반환
    * 논리 NOT (!)
        * 피연산자를 boolean 유형으로 변환하여 true/false로 값을 나눈 후 그 결과값의 반대값
* 삼항 조건 연산자
    * 세 개의 피연산자를 취할 수 있는 유일한 연산자
    *  IF 구문과 기능이 비슷
    ```
        조건문 ? 선택문1 : 선택문2
    ```
<br>

gretting.js
------
* Element.classList
    * 읽기 전용 프로퍼티
    * 공백으로 구분된 문자열인 element.className을 통해 엘리먼트의 클래스 목록에 접근하는 방식을 대체하는 간편한 방법

* classList.add
    * 지정한 클래스 값을 추가. 만약 추가하려는 클래스가 엘리먼트의 class 속성에 이미 존재한다면 무시

* classList.remove
    * 클래스를 필요에 따라 제거

* classList.toggle
    *  클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드

* event.preventDefault
    * 이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소
    * a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 창이 새로고침하여 실행되는데,preventDefault을 쓰면 이러한 동작을 막을수 있음
        * 👇 주로 사용 되는경우
        * a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
        * form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)

* EventTarget.addEventListener()
    * 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정
    * 이벤트리스너를 추가하는 자바스크립트 메소드
    * 말 그대로 '추가'이기 때문에, 기존에 있던 이벤트리스너도 작동
    ```
        대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
    ```
    * 이벤트 명 : 이벤트 리스너를 등록할 이벤트 타입을 문자열로 전달
    * 실행할 이벤트 리스너 : 지정된 이벤트가 발생했을 때 실행할 이벤트 리스너를 전달
    * 이벤트 전파 방식 : false면 버블링(bubbling) 방식으로, true면 캡처링(capturing) 방식으로 이벤트를 전파
### LocalStorage란?
* 데이터를 사용자 로컬에 보존하는 방식
* 데이터를 저장, 덮어쓰기, 삭제 등 조작 가능
* 자바스크립트(JavaScript)로 조작
* 쿠키와 차이점
    * 유효 기간이 없고 영구적으로 이용 가능
    * 5MB까지 사용 가능 (쿠키는 4KB까지)
    * 필요할 때 언제든 사용 가능 (쿠키는 서버 접속시에 자동 송신)
* LocalStorage 기본 구성
    * 키(key)와 값(value)을 하나의 세트로 저장
    * 도메인과 브라우저별로 저장
    * 값은 반드시 문자열로 저장됨
* 데이터 추가하기
    * localStorage.setItem()
    ```
     예시)
         localStorage.setItem(USER_LS, text);
    ```
* 데이터 취득하기
    * localStorage.getItem()
    ```
    에시)
        localStorage.getItem(USER_LS);
    ```

<br>

todo.js
------
* removeChild ()
    * 지정된 요소의 지정된 자식 노드를 제거

* appendChild ()
    * 메소드는 새로운 노드를 해당 노드의 자식 노드 리스트(child node list)의 맨 마지막에 추가
    ```
    예시)
        // js 추가하기 전
            <body>
                <div>123</div>
                <p>456</p>
            </body>

        //js
            const span = document.createElement("span");
            const div_ele = document.querySelector("div");
            div_ele.appendChild(span);

        // js 추가한 후
            <body>
                <div>123<span></span></div>
                <p>456</p>
            </body>
    ```

* Array.prototype.filter()
    * 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

* parseInt()
    * 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환

* JSON.parse()
    *  JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
    ```
    예시)
        const json = '{"result":true, "count":42}';
        const obj = JSON.parse(json);

        console.log(obj.count);
        // expected output: 42

        console.log(obj.result);
        // expected output: true
    ```

* JSON.stringify()
    * JavaScript 값이나 객체를 JSON 문자열로 변환
    ```
    예시)
        const data = {

            Name: "Myungmin"

            , Age: "27"

        }

        const person = JSON.stringify(data);

        alert(person);

        /* Output: "{"Name":"Myungmin","Age":"27"}" */
    ```

* Document.createElement()
    *  메서드는 지정한 tagName의 HTML 요소를 만들어 반환

* Array.prototype.push()
    * 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

* Array.prototype.forEach()
    * 주어진 함수를 배열 요소 각각에 대해 실행


<br>

bg.js
------
* prepend()
    * Node 객체 또는DOMString 객체를 ParentNode의 첫 자식노드 앞에 삽입
    * 부모의 자식 요소로 추가되나 그 위치가 맨 뒤가 아닌 맨 앞에 추가됨

* Math.floor()
    * 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
    ```
    예시)
        console.log(Math.floor(5.95));
        // expected output: 5

        console.log(Math.floor(5.05));
        // expected output: 5

        console.log(Math.floor(5));
        // expected output: 5

        console.log(Math.floor(-5.05));
        // expected output: -6

    ```

* Math.random()
    * 0부터 1사이의 값이 소숫점이 붙어서 무작위로 출력
    * 최대값 설정은 Math.random()에 원하는 최대값을 곱해주면 됨
        * Math.random() * 최대값
        ```
        예시)
            document.write(Math.random() * 10);
        ```