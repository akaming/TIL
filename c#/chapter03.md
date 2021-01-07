변수(Variable), 기본 자료형(Primitive Types)
=============

<br>

변수(Variable)란?
------
* 숫자, 문자와 같은 값들을 저장하는 공간
* 변할 수 있는 값을 의미

### 선언(Declaration)과 대입(Assignment)
```
    float numl;             //변수의 선언
    num1 = 128.512f;        // 변수의 대입

    float num2 = 20.8f;     // 변수의 선언과 대입이 동시에 이루어지는 경우

    const float PI = 3.14f; // const 변수(즉, 상수)는 항상 선언과 대입이 동시에 이루어짐
```
* 선언은 변수/상수의 자료형과 이름을 컴퓨터에게 알려줌
    * 변수/상수 및 자료형은 곧 다시 다를 예정
* 대입은 변수/상수의 실제 값을 컴퓨터에게 알려줌
* 선언과 대입을 동시에 할 수도 있음

### 변수는 숫자만 의미하지 않는다
* 'c'와 같은 문자나 "hello" 같은 문자열까지 변수에 포함
* 상수 또한 마찬가지

### 왜 변수를 사용해야 되나?
* 어딘가에 저장한 값을 다시 재사용하기 위해서
* 그래서 변수를 mutable(변할 수 있는, 잘 변하는) 이라고도 부름
* 그래서 상수는 immutable(변경할 수 없는, 불변의) 이라고도 부름

### 두 변수의 계산
* 예시 1
```
    using System;

    namespace Calculator2
    {
        class Program
        {
            static void Main(string[] args)
            {
                float num1 = 10.0f; //첫 번째 변수
                float num2 = 20.of; //두 번째 변수

                // 두 숫자 더하기
                Console.Write(num1 + "+" + num2 + "=");
                Console.WriteLine(num1 + num2);

                // 두 숫자 빼기
                Console.Write(num1 + "*" + num2 + "=");
                Console.WriteLine(num1 + num2);

                // 두 숫자 나누기
                Console.Write(num1 + "/" + num2 + "=");
                Console.WriteLine(num1 / num2);
            }
        }
    }
```
* 코드 재사용성이 높아짐
* 유지보수 쉬움

<br>

* 예시2
```
    // 매직 넘버를 쓸 경우
    using System;

    namespace Age1
    {
        class Program
        {
            static void Main(string[] args)
            {
                Console.WriteLine(17);
            }
        }
    }
```

```
    // 명확한 이름을 가진 변수를 쓸 경우
     using System;

    namespace Age1
    {
        class Program
        {
            static void Main(string[] args)
            {
                int age = 17;
                Console.WriteLine(age);
            }
        }
    }
```
* 다른 사람이 볼때 이 코드가 어떤거를 의미하는지 명확히 알 수 있음

<br>

변수명 짓기 팁, const 키워드
------
### 코팅 스탠다드 : 변수명은 명확하게 지을 것
* 명사로 정확하게 어떤 정보를 담는지 알려주는 단어를 사용
    * 성적이면: score
    * 이름이면: name
* 여러 명사가 들어간다면 두번째 단어의 첫 글자는 대문자로 (camelCasing)
    * 수학성적이면: mathScore
    * 사과 갯수면: appleCount

### const 키워드
* constant의 줄임말 -> 즉, 상수!
* 한번 값을 대입 한 후에 값을 바꾸고 싶지 않을 때 사용
```
    const int appleCount = 17;
    appleCount = 100;
```
* 대입 후, 값을 변경할 경우 컴파일 오류가 발생

### 코딩 표준: 변수와 상수의 이름

|변수|상수|
|----|----|
|명사를 사용하여 **소문자**로 작성<br>예) score,number|명사를 사용하여 **대문자**로 작성<br> 예) SCORE,NUMBER|
|여러 명사가 들어간다면, 두 번째 단어의 첫 단어는 대문자로 작성<br>예) mathScore,appleCount|여러 명사가 들어간다면 명사 사시에 밑줄 기호(_)를 사용<br> 예) MATH_SCORE, APPLE_COUNT|

### 코딩 표준을 적용한 사과와 오렌지 개수 출력하기
```
    static void Main(string[] args)
    {
        const int APPLE_COUNT = 17;
        cosnt int ORANGE_COUT = 20;

        Console.WriteLine(APPLE_COUNT + ORANGE_COUT);
    }
```