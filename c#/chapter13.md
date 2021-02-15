함수(Function)
=============

함수의 필요성
------
* 코드의 재사용성

함수란?
------
* 수학의 함수와 정말 비슷!
* 함수에 **입력(input)**이 들어가면 어떤 결과가 **출력(output)**
    * 입력: 두 개의 정수 -> 47과 84
    * 출력: 한 개의 정수 -> 131
* 중복되는 코드를 줄이는데 사용
    * 수정 및 관리가 용이해짐
* 자주 사용하는 코드의 재활용성이 올라감
    * 함수를 호출해버리면 되니까

### 함수의 정의(definition)
```
    static <반환형> <함수명> (<매개변수 목록>)
    {
        // 함수 바디(body)
    }
```
* 이 과목에서는 함수를 만들 때 항상 **static**을 붙임
    * 왜 붙이는지는 일단은 무시해도 됨
* 함수를 정의할 때는 다음의 것들을 포함해야 함
    * 함수 시그니처(function signature)
        * static (본 강의에서 필수)
        * 함수명 (필수)
        * 매개변수 목록 (선택)
    * 반환형 (필수)
    * 함수 바디 (필수)

### 함수 - 반환형
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }
```
* 프로그래밍 세계에서 함수의 **출력(output)**
* **반환형은 반드시 선언해야 함**
    * 안하면 컴파일 오류
    ```
        static Add(int op1, int op2)
        {
            return op1 + op2;
        }
    ```

* 👇 정수형 반환값이 있는 함수
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }
```

* 👇 반환값이 없는 함수
```
    static void PrintHello(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
```
* 반환이 **void**가 아닐 경우
    * 함수 바디에 **return** 키워드를 이용해 데이터를 반환해야 함
    * 👇 데이터를 반환하지 않으면 컴파일 오류
    ```
        static int Add(int op1, int op2)
        {
            Console.WriteLine("Hello World!"); // 이렇게 쓰면 컴파일 오류
        }
    ```

### 함수 - 매개변수 목록
* 👇 두 개의 매개변수가 있는 함수
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }
```

* 👇 매개변수가 없는 함수
```
    static void PrintHello()
    {
        Console.WriteLine("Just hello!");
    }
```
* 프로그래밍 세계에서 함수의 입력
* 이를 매개변수(parameter)라고 부름
* **int, byte**와 같은 자료형 뿐만 아니라 **int**[]나 **string**[]과 같은 배열도 매개변수로 사용 가능
* 매개변수는 필수가 아님
    * 함수는 **0개 이상**의 매개변수를 가짐
* 다른 말로는 인자(argument)라고도 함
* 엄밀히 말하면 **매개변수**와 **인자**는 다름
* **매개변수**: 함수를 정의할 때 함수의 입력값을 선언하는 걸 말함
* **인자**: 함수를 호출할 때 함수로 전달하는 실제값을 말함
* 그러나 많은 사람들이 거의 구분없이 쓰기 때문에 크게 신경쓰지 않아도 됨

<br>

함수란? 2
------
### 메인 함수의 매개변수
```
    static void Main(string[] args)
    {
        for (int i = 0; i < args.Length; ++i)
        {
            Console.WriteLine($"args[{i}] = {args[i]}");
        }
    }
```
* 위의 코드를 콘솔창에 실행 하면 아무것도 안나타남
* 왜 아무것도 없나?
    * 메인 함수는 프로그램을 실행할 때 자동으로 호출되는 함수
    * 프로그램을 실행할 때 넣어준게 없기 때문
        * F5나 >MainArguments 이런 버튼만 눌렀지 다른걸 한 게 없음

### 메인 함수의 매개변수에 데이터 넘기는 법
1. 비주얼 스튜디오의 '솔루션 탐색기' 에서 프로젝트 우클릭
2. 우클릭 메뉴에서 '속성' 클릭
3. 속성창에서 '디버그' 클릭
4. '응용 프로그램 인수'에서 데이터 입력
    <br> 예) Hello, C# is fun!
5. 저장
    <br> ctrl + s 혹은 상단 메뉴에서 저장 아이콘 클릭

### 배여읠 길이 - Length
```
    string[] args;
    int length = args.Length;
```
* 배열의 길이를 알려줌
* 함수는 아님!
    * 프로퍼티(property)
    * 나중에 배울 예정

### args의 요소 하나에 여러 단어를 넣는 법
* 문장을 큰따옴표로 감싸면 됨
    <br> 예) "Hello, C# is fun!" POCU Academy
* 첫 번째 인자 : "Hello, C# is fun!"
* 두 번째 인자 : POCU
* 세 번째 인자 : Academy

### 함수 - 함수 바디
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }
```
* 함수의 기능을 구현한 코드 블록
* 반복문과 마찬가지로 중괄호를 이용
* 함수가 **void**가 아닌 반환형을 가지고 있다면 반드시 **return** 키워드를 이용해 데이터를 반환해야 함

### 함수 - 함수명
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }
```
* 함수의 이름
* 엄밀히 말하면 함수 이름은 어떻게 짓든지 상관은 없음
    * 수학에서도 그냥 f(x)라고 하는거 보면...
* 그러나 함수가 어떤 기능을 가졌는지 알 수 있게 지으면 가독성 증가
    * 함수명이 "A"이면 함수가 무슨 기능을 하는지 파악하기 어려움
    * 함수는 블랙박스 -> 어떤 입력을 넣으면 함수 내부 구조(작동원리)를 알지 못해도 어떤 출력이 나오는지 알 수 있어야 함

<br>

함수란? 3
------
### 함수 호출
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }

    static void Mian(string[] args)
    {
        int result = Add(123, 589);
    }
```
* 반환형이 있을경우 호출하는 방법

### 함수 호출 - void 반환형
```
    static void PrintHello()
    {
        Console.WriteLine("Just hello!");
    }

    static void Mian(string[] args)
    {
        PrintHello();
    }
```
* void 는 반환값이 없기 때문에 대입같은거는 없음
* 그냥 함수로 호출함

### 함수 호출 시 인자는 변수, 상수 모두 가능
```
    static int Add(int op1, int op2)
    {
        return op1 + op2;
    }

    static void Mian(string[] args)
    {
        int result = Add(123, 589);       //상수 가능!

        int num1 = int.Parse(Console.ReadLine());
        int num2 = int.Parse(Console.ReadLine());
        int result2 = Add(num1, num2);    //변수 가능!
    }
```

### 함수 호출에서 함수 유추하기
```
    double num1 = double.Parse(Console.ReadLine());
    double result = Square(num1);
```
* Square 함수를 유추해보자

1. static은 항상 붙이기로 했음
2. 함수 호출의 결과값을 저장하는 변수의 자료형이 double이므로 double값을 반환할 가능성이 높음
3. 함수 이름은 똑같아야함
4. 매개변수를 봤는데 double형 이었음 이름까지는 추측하기 무리이다보니깐 적당히 num이라 추측
```
    static double Square(double num)
    {
        // 제곱에 관한 코드가 있을꺼고
        // 어딘가에 아래처럼 double 형을 반환할 듯
        // 함수 바디 역시 함수의 이름 등으로 추측은 가능하나 100% 정확하게 유추는 불가능
        return <double형 데이터>;
    }
```
<br>

함수란? 4
------

### 수학의 함수 vs 프로그래밍의 함수

|수학의 함수|프로그래밍의 함수|
|:--------:|:-------------:|
|y=f(x)|int y = Square(x);|

### 함수는 반드시 블랙박스여야 함
* 가독성을 위해
* 함수는 함수 호출자에 대해서 알아서는 안됨
* 호출자가 함수 내부를 알 필요가 없게 함수명을 명확하게 지어야함

### 코딩표준 : 함수 이름 짓기
* 정확하게 어떤 기능을 하는지 알려주는 단어 사용
    1. 동사로 시작할 것 -> 함수는 행동(action)에 대한거니까
    2. 제일 첫 글자는 대문자로
        * 덧셈이면: **A**dd
        * 제곱이면: **S**quare
* 여러 단어를 연결한다면 두 번째 단어부터는 첫 글자를 대문자로 
    * 파스칼 표기법(pascal case)이라고 함
    ```
        AddTwoNumbers
        PrintFullName
    ```

### 코딩표준 : 매개변수와 지역변수 이름 짓기
* 지역변수는 곧 다시 다룰 예정
    * 여태까지 본 변수가 사실 지역변수 임
* 정확하게 어떤 정보를 담는지 알려주는 단어를 사용
    1. 명사를 사용할 것
    2. 제일 첫 글자는 소문자로 시작할 것
        * 숫자면 : num(ber)
        * 점수면 : score
* 여러 단어를 연결한다면 '낙타 표기법(camel case)'를 따를 것
```
    mathScore
    studentName
```

### 선조건(Precondition)과 후조건(Postcondition)
* 함수가 무슨 일을 하는지에 대한 약속
* 선조건
    * 함수 실행 시작 전에 참으로 가정한 조건
    * 예) Divide() 함수는 분모가 0이 아니어야 한다.
    * 함수 이름이나 매개변수로 유추 가능하나, 부족하면 주석으로 추가 설명
* 후조건
    * 함수 실행 후에 보장되는 조건
    * 예) 두 정수를 더하면 정수의 결과가 나온다.
    * 보통 함수 이름과 반환형으로 유추 가능
* 선조건을 만족하지 못하면 후조건을 보장할 수 없음

### 선조건을 명시한 주석 예시
* 문서 주석(Documentation Comment)라 부름
    * 나중에 다시 다룰 예정
* 비주얼 스튜디오에서는 슬래시(/)를 세 번 입력하면 자동으로 생성

### 함수 시그니쳐가 약속하는 것
```
    static float Divide(float numerator, float denominator)
    {
        return numerator / denominator;
    }
```
1. 함수명
    * "두 수를 나눈 결과를 얻을 수 있는 함수구나"
2. 매개변수
    * "첫 번째 매개변수가 분자고 두 번째 매개변수는 분모구나"
3. 반환형
    * "부동소수점형이 반환되는구나"

<br>

함수와 범위
----
### 범위(scope)
* 앞서 구문을 설명할 때 범위라는 표현을 썼음
* 코드 블록을 감쌀 때 중괄호로 감싼다고 했음
* if문이나 반복문에서도 범위가 나왔음
    * 범위를 명백하게 보여주기 위해 중괄호 쓰라고 했음

### 프로그래밍 언어에서 범위는 중요함
* 기본적으로 어떤 범위 안에 선언된 것은 범위 밖에서 쓰지 못함
```
    static void Main(string[] args)
    {
        for (int i = 0; i < 10; ++i)
        {
            string name = "Leon";
            Console.WriteLine($"{name}{i}");
        }

        i = 200;            // 컴파일 오류
        name = "Pope";      // 컴파일 오류
    }
```

### 내포된 범위
* 상위 범위에서 선언한 변수/상수는 하위 범위에서 사용 가능
```
    static void Main(string[] args)
    {
        string name = "Leon";
        for (int i = 0; i < 10; ++i)
        {
            name = "Pope";       //OK
            Console.WriteLine($"{name}{i}");
        }
    }
```

### 함수의 범위 1
* 기본적으로 함수 안에서 선언한 모든 것은 그 함수에서만 사용 가능
    * 지역 변수(local varable)라고 부름
    ```
        static int AddNumbers(int num1, int num2)
        {
            int sum = num1 + num2 ;

            return sum;
        }
    ```

### 함수의 범위 2
* 기본적으로 함수 밖에 있는 변수/상수는 사용할 수 없음
    * 예외도 있으나 나중에 다룰 예정
    ```
        class Program
        {
            static void Square(double number)
            {
                double result = number * number;
            }
            static void Main(string[] args)
            {
                double num = double.Parse(Console.ReadLine());
                Square(num);
                Console.WriteLine($"Result: {result}"); // 컴파일 오류
            }
        }
    ```

### 함수의 범위 3
* 함수 매개변수, 반환값 모두 복사된 것
    * 값에 의한 전달(pass by value)이라고 함
    * 예외도 있는데 이건 곧 다룰 예정
    ```
    static double Square(double number)
    {
        number *= number;
        return number;
    }

    static void Main(string[] args)
    {
        double number = 5;
        double result = Square(number);
    }
    ```
    * 함수 Square를 호출할 때, 메인 함수의 변수 number에 들어 있는 값을 복사해서 함수 Square의 매개변수 number에 대입
    * 두 변수 number는 이름만 같을 뿐 소속된 곳이 다름 동명이인 이라고 생각하면 됨
