형 변환(Type Conversion), 연산자(Operator)
=============

<br>

### 형 변환 이란
* 어떤 자료형으로 선언된 변수를 다른 자료형으로 변환 하는 것


묵시적 변환(Implicit Conversion)
------
* 기본 자료형 간의 변환을 컴파일러가 '알아서' 해줌
    * 모든 기본 자료형 간의 변환이 가능한 것은 아님
* 특별한 문법이 필요하지 않음
* 작은 범위의 자료형에서 넓은 범위의 자료형으로 변환할때 일어남
```
    예시) 

        int num1 = 100000;
        long num2 = num1;

    예시)
        long a = 1;
        int b = a; // 에러 발생
```
### 묵시적 형 변환 테이블(C#)
* **자료 손실 없이** 형 변환

|From|To|
|----|----|
|sbyte|short,int,long,float,double,decimal|
|byte|short,ushort,int,uint,long,ulong,float,double,decimal|
|char|ushort,int,uint,long,ulong,float,double,decimal|
|short|int,long,float,double,decimal|
|ushort|int,uint,long,ulong,float,double,decimal|
|int|long,float,double,decimal|
|uint|long,ulong,float,double,decimal|
|long|float,double,decimal|
|ulong|float,double,decimal|
|float| double|

<br>

* **자료 손실이 있을 수 있는** 형 변환

|From|To|
|----|----|
|Int32|Single|
|UInt32|Single|
|Int64|Single,Double|
|UInt64|Singble,Double|
|Decimal|Single,Double|

<br>

### 정밀로 손실(Loss of Precision)
```
    예시)
        int num1 = 1234567890;
        float num2 = num1;
        // 아래 (int)num2는 곧 배울꺼니 여기서는 무시
        // float 형에 들어있는 값을 int 형으로 바꿈
        Console.WriteLine(num1 - (int)num2);
    
    출력창)
        -46
```
* 위의 경우 자료의 값이 달라지는 경우가 발생할 수 있음
    * int/long에서 float으로 변환
    * long에서 double로 변환


### 승격(Promotion)
* 컴파일러가 자동으로 실수형이나 부동소수형 자료의 이진 표현을 확장
* 산술 연산자나 논리 연산자가 제대로 동작하게 하거나 ALU(산술논리장치)가 좀 더 효율적으로 돌 수 있게 하려고 사용
```
    double num1 = 3.7;
    int num2 = 10;

    Console.WriteLine(num1 + num2); // 13.7출력 (결과는 double 이 나옴)
```

### 작은 형에서 큰 형으로 변환
* 예) 32비트에서 64비트 형으로 변환
* 문제가 있을까?
    * 물론 없다
    ```
        int num1 = 214783647;
        long num2 = num1;    // 가능
    ```
* 예) 64비트에서 32비트 형으로 변환
* 문제가 있을까?
    * 문제가 있음
    ```
       int num1 = 214783647;
        long num2 = num1;    // C++에서 가능, 하지만 C#에서는 컴파일 오류
    ```
    * 따라서 이런 경우에는 **명시적으로 형변환**을 해주어야 한다.
* 값이 크면 당연히 문제가 있음
    * 런타임 중에 값이 어떻게 될지 모름
    * 우린 이런 상황을 '정보의 손실'이라고 함

<br>

명시적 변환
------
### 두 double 형 수를 더 하기
    ```
        double num1 = 10.9;
        double num2 = 52.16;
        Console.WriteLine("일반 덧셈 결과:" + (num1 + num2));
        
        int result = (int)num1 + (int)num2;
        Console.WriteLine("명시적 형변환 덧셈 결과: " + result);

        결과)
        일반 덧셈 결과: 63.06
        명시적 형변환 덧셈 결과: 62
    ```
👆 명시적 형변환을 할때는 올림도 없고 반올림도 없이 무조건 버린다. 그래서 명시적 형변환 덧셈 결과는 10+52 라서 62가 나옴

### 명시적 형변환
* 소괄호(())를 이용하여 변하고자 하는 자료형을 보여줌
```
    long num1 = 9223372036854775807;
    int num2 = (int)num1; // -1

    double num3 = 10.9;
    int num4 = (int)num3; // 10
```
* 모든 자료형들이 변환되는 것은 아님
```
    long num1 = 9223372036854775807;
    bool bBool = (bool)num1; // 컴파일 오류
```
* 주의 해야할 점
    * 명시적 형변환을 할 때에는 overflow가 일어나는지 주의

<br>

코드보기: 다양한 형 변환
------

```
    char char1 = 'a';

    int int1 = char1; // 묵시적 변환. char 형은 int로 자동변환 가능 / char형은 16비트형 이며 정수랑 다르지 않음 그렇기 때문에 묵시적 변환이 일어남
    Console.WriteLine("int1: " + int1); // 아스키 코드를 보면 'a'는 97 이기 때문에 int1은 97

    long long1 = char1; // char는 long이 될 수도 있음. 역시 묵시적으로
    Console.WriteLine("long1: " + long1); //long1의 값도 97

    ulong ulong1 = char1;
    Console.WriteLine("ulong1: " + ulong1);  // 묵시적으로 변환 가능 하기 때문에 답은 97

    float float1 = char1;
    Console.WriteLine("float: " + float1); // 묵시적으로 변환 가능 하기 때문에 답은 97

    double double1 = char1;
    Console.WriteLine("double1: " + double1); // 묵시적으로 변환 가능 하기 때문에 답은 97
```
<br>

* 부호 있는 64비트 정수의 최댓값을 long2에 대입해보자
```
    long long2 = long.MaxValue;
    int long2ToInt = (int)long2; // long은 묵시적으로 int로 변환 불가능 하기 때문에 명시적으로 변환

    Console.WriteLine("long2: " + long2); // long2의 값은 9223372036854775807
    Console.WriteLine("long2ToInt: " + long2ToInt);  // long2ToInt의 값은 -1 이다 왜냐하면 최상위 비트만 0이고 나머지 비트는 다 1. int는 32비트. long은 64비트. 따라서 int로 변환(cast)하는 순간 왼쪽의 32비트는 다 0이 된다. 그 결과 이진수로 11111111111111111111111111111111이 되고, 이는 -1 이다
```
<br>

* float 또한 int로 바꾸려면 명시적 변환이 필요
```
    float float2 = 3.14159f;
    int float2ToInt = (int)float2;

    Console.WriteLine("float2: " + float2);   // 값은 3.14159
    Console.WriteLine("float2ToInt: " + float2ToInt);   // 정수는 소수점을 가질수 없기 때문에 값은 3이다.
```
<br>

* 부호있는 정수를 부호없는 정수로 변환해보자
```
    int int2 = -1;
    uint int2ToUInt = (uint)int2;

    Console.WriteLine("int2ToUInt: " + int2ToUInt); // 최대값인 4,294,967,295가 나옴 즉, 정수끼리의 변환을 할때는 바이너리를 그대로 가져다가 그 바이너리를 따른 형태로 해석을 하는 그런 방식으로 돌기 때문에 바이너리로 int2 는 11111111111111111111111111111111 이었으므로 이것을 unsigned int로 표현하면은 최대값이 나온다.
```

<br>

산술 연산자
------
* 하나 이상의 피연사자를 가짐

### + 연산자
* 두 피연산자(operand)를 더하기
```
    int number1 = 10;
    int number2 = 30;
    int result = number1 + number2;
```
### - 연산자
* 두 피연사자를 빼기
    * 연산의 결과가 음수일 경우 조심해야 한다
    * 부호 없는 피연사자끼리 빼서 음수가 나온다면?
```
    int number1 = 10;
    int number2 = 30;

    int result1 = number1 - number2;      // -20
    uint result2 = (uint)number1 - (uint)number2;      //4294967276
```
* 4294967276 나온 이유는 uint는 음수를 표현할수 없기 때문에 그게 0으로 갔다가 다음에 가장 큰수로 올라가서 underflow 되고 -20 만큼 작아진 숫자가 나타나기 때문에 4294967276 나온거임

### * 연산자
* 두 피연산자를 곱하기
```
    int number1 = 10;
    int number2 = 30;
    int result = number1 * number2;
```
* 왜 x부호를 안쓸까?
    * 그냥 키보드에 없음
    * 알파벳 X를 쓸수없기 때문

### / 연산자 (나누기 연산자)
* 두 피연산자를 나누기
    * 정수형의 피연산자의 경우 결과가 제대로 나오지 않을 수 있음
```
    int number1 = 10;
    int number2 = 30;
    int result1 = number1 / number2;        // 0
    double result2 = number1/ number2;          
```
* 10 나누기 30은 0.3333..이 나오지만 int로 표현하면은 0 이기 때문에 result1은 0 이다.
* result2 에서는  number1/ number2 이미 int로 계산을 하기 때문에 int인 0을 double에 대입해도 0이 되기 때문에 답은 0 이다. 만약에 double로 원한다면 명시적 형변환이 필요
* 그래서 아래 👇처럼 명시적 형변환으로 바꿈
```
    int number1 = 10;
    int number2 = 30;
    int result1 = number1 / number2;     
    double result2 = number1/ number2;  
    double result3 = (double)number1/ (double)number2;
```
*  double result3 = (double)number1/ (double)number2; 여기서 정수 나누기 double이면은 double 나오기 때문에 컴파일러가 알아서 double로 해줌 그래서 둘중에 하나는 (double)을 생략해도 된다. 그렇기 때문에 쓸때는 아래처럼 쓴다.
```
    double result3 = number1/ (double)number2;
```

### % 연산자 (나머지 연산자)
* / 연산자가 나눗셈의 몫을 구함
* % 연산자는 나눗셈의 나머지를 구함
```
    int number1 = 15;
    int number2 = 30;
    int result = number1 % number2;     //15

    int number3 = 5;
    int number4 = 2;
    int result2 = number3 % number4;    // 1
```

<br>

**증가/감소 연산자** (중요!)
------
###  ++ 연산자
* 피연산자 하나의 값을 1증가
* 연산기호를 변수의 앞이나 뒤에 붙일 수 있음
```
    int num1 = 10;

    num1++;
    ++num1;
```
### 전위(prefix), 후위(postfix)
|전위 증가 연산자|후위 증가 연산자|
|---|---|
|int num = 10; <br> int result1 = **++num**;   //11 <br> int result2 = num;   //11|int num = 10; <br> int result1 = **num++**;   //10 <br> int result2 = num;   //11|
👇

|전위 증가 연산자|후위 증가 연산자|
|---|---|
|int num = 10; <br> **num = num + 1;**<br>int result1 = ++num;   //11 <br> int result2 = num;   //11|int num = 10; <br> int result1 = num++;   //10 <br> **num = num + 1;**<br> int result2 = num;   //11|

### ++ 연산제 예제
```
    int num = 10;
    char ch = 'b';

    ++num;  //11;
    ++ch;   //'c';
```

### -- 연산자
* 피연산자의 값을 1감소
```
    int num = 10;
    char ch = 'b';

    num--; // 9
    ch--;  // a
```
### 부동소수점형은 안되나?
* 모두가 만족할 수 있는 하나의 규칙이 나오기 굉장히 어렵기 때문에 부동소수점형은 되긴 하지만 실무에서 거의 안씀

### 코드보기: 증감 연산자
* 이해가 안감...ㅠㅠㅠㅠ 확인해서 다시 쓰기....
```
    int num1 = 0;
    int num2 = 10;
    int result3 = num1-- + num1-- - --num2;
    
    Console.WriteLine("num1: " + num1);
    Console.WriteLine("num2: " + num2);
    Console.WriteLine("result3: " + result3);

    답 )
    num1: -2
    num2: 9
    result3: -10
```
```
    int num1 = 0;
    int num2 = 10;
    int result4 = num2++ * num1++ - --num2;
    
    Console.WriteLine("num1: " + num1);
    Console.WriteLine("num2: " + num2);
    Console.WriteLine("result4: " + result4);

    답)
    num1: 1
    num2: 10
    result4: -10
```