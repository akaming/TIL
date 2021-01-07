이론
=============

<br>

let, const, var
------

### let
* [block-scoped](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
* **변수 재선언은 할수 없지만 재할당이 가능**
* let을 이용하여 선언한 변수는 글로벌 객체에 입력 안됨
```
   let name = 'apple'
    console.log(name) // apple

    let name = 'orange'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'banana'
    console.log(name) //banana
```
* let은 hoisting은 되지만 error를 발생한다
    * let은 초기 값을 할당하지 않으면 undefined가 초기 값으로 할당된다.
    ```
        let a;
        console.log(a)  // undefined
    ```
    * hoisting은 되지만 error를 발생한다.
    ```
        function doSomething() {
            console.log(a);
            console.log(b);
            var a = 1;
            let b = 2;
        }

        doSomething();
    ```
<br>

### const
* [block-scoped](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
* **변수 재선언, 재할당 모두 불가능**
* 변수 선언시 반드시 초기 값을 할당 해야 함
```
   const name = 'apple'
    console.log(name) // apple

    const name = 'orange'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'banana'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.
```
* 객체일 때 속성 값을 추가 할 수 있다
```
    const obj = {};
    obj.say = 'hello'; 
```

<br>

### var
* function-scoped
* var를 이용하여 선언한 변수는 글로벌 객체에 입력 가능
* 버그 발생과 메모리 누수의 위험 등이 있음
* 초기값이 없으면 자동으로 undefined 를 초기 값으로 하여 메모리를 할당
```
    var name = 'apple'
    console.log(name) // apple

    var name = 'orange'
    console.log(name) // orange
```
* var의 hoisting
    * var는 초기 값을 할당하지 않으면 undefined가 초기 값으로 할당된다.
    ```
        var a;
        console.log(a);   // undefined
    ```
    * hoisting
    ```
        function doSomething() {
            console.log(bar);  // undefined
            var bar = 1;
        }

        doSomething();  

    ```
    hoisting이 되면서 콘솔에 undefined가 출력된다.

### let, const, var 의 결론
* var 말고 let, const를 사용하자

<br>

JS의 데이터 유형
------
### 주석처리 
* 한줄 처리 주석
```
    // to do : finish this
    const what = ???
```
* 두줄 처리 주석
```
    /*
        to do : finish this
        to do : finish this
        to do : finish this
        to do : finish this
    */
    const what = ???
```

<br>

### String
* 보통 string 은 text string 을 의미
* " " 안에 넣으면 됨
```
    const what = "Nicolas";
```

### Boolean
* True or False
* 소문자로 씀
* " " 없이 씀 -> 왜냐하면 이거는 text가 아니기 때문
* true = 1, false = 0
```
    const what = true;
```

### Number
* 숫자
```
    const what = 666;
```

### Float
* 소숫점을 가지고 있는 숫자
```
    const what = 55.1;
```
<br>

배열로 데이터 구성
------
### Array (배열)
* 데이터를 리스트 같이 저장 하는곳
* 배열을 생성할 때 사용하는 리스트 형태의 고수준 객체

### [Array 자주 사용하는 연산](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
* 배열 만들기
```
    let fruits = ['사과', '바나나']

    console.log(fruits.length)
    // 2
```
<br>

* 인덱스로 배열의 항목에 접근하기
```
    let first = fruits[0]
    // 사과

    let last = fruits[fruits.length - 1]
    // 바나나
```

<br>

* 배열의 항목들을 순환하며 처리하기
```
    fruits.forEach(function (item, index, array) {
        console.log(item, index)
    })
    // 사과 0
    // 바나나 1
```
<br>

* 배열 끝에 항목 추가하기
```
    let newLength = fruits.push('오렌지')
    // ["사과", "바나나", "오렌지"]
```
<br>

* 배열 끝에서부터 항목 제거하기
```
    let last = fruits.pop() // 끝에있던 '오렌지'를 제거
    // ["사과", "바나나"]
```
<br>

* 배열 앞에서부터 항목 제거하기
```
    let first = fruits.shift() // 제일 앞의 '사과'를 제거
    // ["바나나"]
```
<br>

* 배열 앞에 항목 추가하기
```
    let newLength = fruits.unshift('딸기') // 앞에 추가
    // ["딸기", "바나나"]
```
<br>

* 배열 안 항목의 인덱스 찾기
```
    fruits.push('망고')
    // ["딸기", "바나나", "망고"]

    let pos = fruits.indexOf("바나나")
    // 1
```
<br>

* 인덱스 위치에 있는 항목 제거하기
```
    let removedItem = fruits.splice(pos, 1) // 항목을 제거하는 방법

    // ["딸기", "망고"]    
```
<br>

* 인덱스 위치에서부터 여러개의 항목 제거하기
```
    let vegetables = ['양배추', '순무', '무', '당근']
    console.log(vegetables)
    // ["양배추", "순무", "무", "당근"]

    let pos = 1
    let n = 2

    let removedItems = vegetables.splice(pos, n)
    // 배열에서 항목을 제거하는 방법
    // pos 인덱스부터 n개의 항목을 제거함

    console.log(vegetables)
    // ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

    console.log(removedItems)
    // ["순무", "무"]
```
<br>

* 배열 복사하기
```
    let shallowCopy = fruits.slice() // 사본을 만드는 방법
    // ["딸기", "망고"]
```
<br>

객체로 데이터 구성
------
### Object (객체)
* 각 value 에 이름을 줄 수 있음
* 생성자는 주어진 값의 객체 래퍼를 생성
* 주어진 값이 null이거나 undefined면 빈 객체를 생성해 반환하고, 그렇지 않으면 값에 맞는 자료형의 객체를 반환
* 만약 값이 이미 객체이면 그 값을 그대로 반환
* 콜론으로 나뉘어져 있는 키(문자열)와 값(어떤 값이나 가능)의 쌍

<br>

### 속성(Property)
*콤마로 구분되는 것들을 객체의 속성
```
    예시) 

    var student = {
        Name: 'myungmin',
        age: '17'
    };
```
*  위의 예시를 보면 student 객체에는 Name: 'myungmin'와 age: '17'까지 두 개의 속성 이 있다는걸 확인 할 수 있음

<br>

### 키(Key)와 값(Value)
* 속성은 키: 값 의 관계로 이루어져 있음
*  키는 속성명 
* 키는 문자열만 가능
```
    예시) 

    var student = {
        Name: 'myungmin',
        age: '17'
    };
```
* Name과 age 같은 것들을 객체의 키(Key)
* 'myungmin'와 '17'를 값(Value)