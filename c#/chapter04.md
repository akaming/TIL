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