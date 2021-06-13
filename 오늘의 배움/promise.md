### Promise

- 프로미스는 비동기 작업을 할 때 미래의 완료 또는 실패와 그 결과값을 나타낸다.
- 비동기 처리 : 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성

### Promise가 왜 필요한가?

- 프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용

```
    $.get('url 주소/products/1', function(response){

    })
```

- 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜬다. 이와 같은 문제점을 해결하기 위한 방법 중 하나가 프로미스

### 프로미스 코드 - 기초

- 먼저 아래 간단한 ajax 통신 코드 이다.

```
    function getData(callbackFunc){
        $.get('url 주소/products/1', function(response){
            callbackFunc(response);  // 서버에서 받은 데이터를 response를 callbackFunc() 함수에 넘겨줌
        })
    }

    getData(function(tableData){
        console.log(tableData);   // $.get()의 response 값이 tableData에 전달됨
    })
```

- 위 코드에 프로미스를 적용하면 아래와 같은 코드가 된다.

```
    function getData(callback){
        // new Promise()추가
        return new Promise(function(resolve, reject){
            // 데이터를 받으면 resolve() 호출
            $.get('url 주소/products/1', function(response){
                resolve(response);
            });
        });
    }

    // getData()의 실행이 끝나면 호출되는 then()
    getData().then(fucntion(tableData){
        // resolve()의 결과 값이 여기로 전달됨
        console.log(tableData); //$.get()의 response 값이 tableData에 전달됨
    });
```

### 프로미스 3가지 상태(states)

- new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖고있다.
  - Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
  - Fulfilled(이행 or 완료) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
  - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

### Pending(대기)

- 먼저 아래와 같이 new Promise() 메서드를 호출하면 대기 상태가 됨

```
    new Promise();
```

- new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 resolve(해결), reject(거부) 이다

```
    new Promise(function(resolve, reject){

    });
```

- 콜백함수 : 다른 함수의 매개변수로 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미

### Fulfilled(이행 or 완료)

- 콜백 함수의 인자 resolve를 아래와 같이 실행하면 완료 상태가 된다.

```
    new Promise(function(resolve, reject){
        resolve();
    });
```

- 그리고 완료 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있다.

```
    function getData(){
        return new Promise(function(resolve, reject){
            var data = 100;
            resolve(data);
        })
    }
    // resolve()의 결과 값 data를 resolvedData로 받음
    getData().then(function(resolvedData){
        console.log(resolveData);   // 100
    })
```

### Rejected(실패)

- new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다고 했는데 아래와 같이 호출을 하면 실패 상태가 된다.

```
    new Promise(function(resolve, reject){
        reject();
    })
```

- 그리고 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.

```
    function getData(){
        return new Promise(function(resolve, reject)){
            reject(new Error("Request is failed"));
        });
    }

    // reject()의 결과 값 Error를 err에 받음
    getData().then().catch(function(err){
        console.log(err);    //Error: Request is failed
    })
```

### 프로미스 코드 - 쉬운예제

```
    fucntion gatData(){
        return new Promise(function(resolve, reject){
            $.get(''url 주소/products/1', function(response){
                if(response){
                    resolve(response);
                }
                reject(new Error("Request is failed"));
            })
        })
    }

    getData().then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
```

### 여러 개의 프로미스 연결하기

```
    function getData() {
        return new Promise({

        });
    }


    // then()으로 여러개의 프로미스를 연결한 방식
    getData()
        .then(function(data){
            //...
        })
        .then(function(){
            //...
        })
        .then(function(){
            //...
        });
```
