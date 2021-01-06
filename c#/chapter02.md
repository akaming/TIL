출력(Output), 상수(Constant)
=============

<br>

메인 함수란?
------

```
/* 예시 */

using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```
* 시작정(Entry Point)
    * C# 프로그램은 반드시 어떤 함수에서부터 실행되어야 함
    * 그 '어떤'함수가 바로 Main 함수(함수라는 표현대신 메서드라고도 함)
    * exe 파일을 실행하면, 이 함수가 자동으로 실행 됨

### staic
* **전역함수** 만 된다는 것만 기억
* OOP와 상관없다는 것만 기억


### string[] args
* 메인 함수가 외부로부터 받는 데이터
    * 이걸 함수 인자(function argument/parameter)라고 부름
    * 메서드 인자라고도 불리기도 함
* 커맨드 라인(command-line)으로부터 인자를 받음
* 커맨드 라인 인자란?
    * exe 파일을 실행할 때 추가적으로 넣는 정보
        * ex) > HelloWorld.exe Hi C# is fun
        * "Hi","C#", "is", "fun" 총 네 개의 인자가 들어감
        * 이 인자들이 args에 저장됨

### 반환형(Return type)
* 모든 함수는 반환형이 존재
* 실제로 값을 반환할 수도 있고, 아무런 값도 반환하지 않을 수 있음
* **void**
* 메인 메서드의 경우 정수 값을 반환하게 할 수 있음
    * 정수를 반환할 때는 **int**를 사용
    * 실제로 값을  반환할 때는 **return**이라는 키워드를 사용

### 반환형의 역활
* 커맨드 라인은 이 반환형을 받아서 exe 프로그램이 올바르게 실행됐는지 여부를 알 수 있음
    * 0: 대부분의 경우 성공을 의미
    * 0이 아닌 값: 오류코드

<br>

Console.WriteLine();
------
* 화면에 글자를 출력할 때 사용하는 함수
* '명령 프롬프트에 한 줄의 글을 쓴다' 라고만 이해하면 됨

<br>

using System;
------
* **using**을 C#에서는 지시어라고 함
* **using System;**을 없애고 빌드하면 어떤 일이 일어날까?
    * 빌드 오류가 발생
* **using** 지시어 다음에는 우리가 사용할 라이브러리 이름을 넣음
* C#에서는 네임스페이스(namespace)라고 함

<br>

컴파일(Compile)이란?
------
* 소스코드를 기계 또는 VM(Virtual Machine)이 이해할 수 있는 언어로 변경하는 행위
* 컴파일러(compiler)라는 프로그램을 사용
    * 커맨드라인
    * IDE(통합개발 환경. 예: 비주얼 스튜디오)
* 컴파일을 할 때, 오류(error) 또는 경고(Warning)가 발생할 수 있음

### 컴파일 오류
* 작성한 코드가 프로그래밍 언어의 규격에 위반되는 경우
* 오류가 있을 경우, exe 파일이 생성되지 않음
* 따라서 프로그램을 실행조차 할 수 없음(exe 파일이 없으니까)
* 컴파일 오류는 프로그램 실행 중에 문제를 발견하는 것보다 이득
    * 프로그램 실행 중에 문제가 있는 것을 **버그**라고 함
    * 버그가 나는 상황을 프로그래머가 직접 재현해야 함
    * 버그를 재현한 후에는 프로그래머가 머리를 잘 굴려 고쳐야 함

### 컴파일 경고
* 경고가 있더라도, exe 파일이 생성됨
* 따라서 프로그램 실행 가능
* 경고란 프로그래머의 실 수처럼 보이는 것을 똑똑한 컴파일러가 찾아준 것
* 경고가 실제로는 문제가 아닌 경우가 보통!
    * 한 10%는 정도 문제가 있을수 있음
* 그러나 경고를 수정하지 않으면, 나중에 진짜 문제를 찾기 어려울 수 있음 그러니깐 경고는 언제나 고쳐야함


### 디버그(debug)와 릴리즈(release) 빌드
* 디버그 빌드 : 개발자가 개발중에 사용하는 실행파일
    * 디버깅에 유용한 많은 정보가 담겨져 있음
    * 최적화는 거의 안됨
    * 그러다 보니 성능은 별로 안좋음
* 릴리즈 빌드 : 실제 사용자(고객)에게 배포하는 실행파일
    * 디버깅을 위한 정보는 적음
    * 최적화 좋음
    * 따라서 성능이 디버깅 모드보다 엄청 빠름(때론 수십배 이상)

<br>

여러 값을 출력(Output)하기
------
### 상수(constant)
* int형
    ```
    Console.Write(30);
    ```
    * 정수를 표현
    * –2,147,483,648 ~ 2,147,483,647
    * 부호 있는 32비트 정수
    
* double 형
    ```
    Console.WriteLine(30.1);
    ```
    * 부동 소수점 숫자 형식
    * ±5.0 × 10−324(10의 마이너스 324승) ~ ±1.7 × 10308
    * ~15-17개 자릿수
    * 8바이트

* float 형
    ```
    Console.WriteLine(30.2f);
    ```
    * 부동 소수점 숫자 형식
    * ±1.5 x 10−45(10의 마이너스 45승) ~ ±3.4 x 1038
    * ~6-9개 자릿수
    * 4바이트

* bool 형
    ```
    Console.WriteLine(true);
    ```
    * 부울 값(true 또는 false)을 나타내는 형식
    *  bool 형식은 [비교](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/comparison-operators) 및 [같음](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/equality-operators) 연산자의 결과 형식

* char 형
    ```
    Console.WriteLine('p');
    ```
    * 유니코드 UTF-16 문자
    * 기본값은 \0(U + 0000)
    * [비교](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/comparison-operators), [같음](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/equality-operators), [증가](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/arithmetic-operators#increment-operator-) 및 [감소](https://docs.microsoft.com/ko-kr/dotnet/csharp/language-reference/operators/arithmetic-operators#decrement-operator---) 연산자를 지원

### 구문(statement)
1. 한줄짜리 코드
    * 보통 이 경우 코드 끝에 ';'가 있음
    ```
    예시 )
    float num1 = 10.2345f;
    Console.WriteLine("Hellow World!");
    ```
2. 여러 줄의 코드로 이루어진 블록(block)
    * 범위(scope)라고 부름
    * 이 경우 코드를 중광호({})로 감쌈
    ```
    예시 )
    if (symbol == "+")
    {
        Console.Write(num1 + "+" + num2 + "=");
        Console.WriteLine(num1 + num2);
    }
    ```

### 주석(comment)
* 코드와 관련된 내용을 메모할 때 사용
* 컴파일할 때 무시되는 문장
    ```
    한줄)
    // Hello World 를 출력함
    
    여러줄)
    /*
    Console.WriteLine("Hellow World!");
    Console.WriteLine("Hellow World!");
    Console.WriteLine("Hellow World!");
    */
    ```
* 주석을 너무 지나치게 사용하지 말아야 함
    * 주석은 코드와 마찬가지로 계속 관리해야 함
    * 너무 많으면 업데이 못하는 주석들이 생길 수 있음
    * 너무 많으면 다른 프로그래머들이 코드를 읽는데 불편
    * 반드시, 꼭 필요한 내용만 주석으로 남기는 것이 좋음
    * 주석이 없으면 없을 수록 좋은 코드
    * '혹시라도 나중에 필요할 거 같아서..' 라고 생각한다면 그건 Git 등의 버전 관리 프로그램이 해야할 일 이므로 이런 주석처리는 필요없다

<br>

상수
------

* 상수란 **변하지 않는 데이터** 
* literal(리터럴)
    * 실제 업계에서는 리터럴 이라는 표현을 잘 안쓰고 상수라는 표현을 씀
* 매직넘버 라고도 불림
* 숫자 뿐만 아니라 문자까지 포함

### 상수의 별명 - 매직 넘버(Magic Number)
* 왜 상수를 매직 넘버 라고 부를까?
    * 마치 마법처럼 **뭔지 전혀 알 수 없기** 때문
    * 문자 메세지를 받았는데 '17'만 적혀 있다면 뭔지 알수있을까 
* 매직 넘버는 되도록이면 사용하지 말아야 함
* 매직 넘버를 사용하면 코드의 가독성이 떨어지고 유지 관리가 어렵다
