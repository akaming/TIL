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

