개체지향 프로그래밍(Object Oriented Programming) 기초
========

클래스(Class): 클래스는 왜 필요한가? 1
-----
### 1. 절차적 언어의 아쉬운 점
1. 데이터의 비 인간화
2. 데이터가 많아지면 관리가 힘들어 짐

### 절차적 언어의 아쉬운 점 - 보완책
* 데이터를 그룹으로 묶는 방법이 존재 -> 구조체(struct)라 불림
    * 이 그룹을 마치 하나의 '변수'처럼 사용
    * 생성과 동시에 그룹 안의 모든 데이터가 초기화
* 기계가 이해하는 데이터 형태는 아님. 컴파일러가 알아서 차례차례 그룹 내의 변수를 선언한다고 생각하면 됨
```
    ( C언어의 의사 코드 )
    struct Human
    {
        int age;
        float height;
    };

    // 함수 어딘가
    Human human;
    human.age = 10;
    human.height = 170.0f;
```
### 절차적 언어의 아쉬운 점 - 보완책의 한계
* 여전히 데이터와 동작이 분리 
* 어떤 구조체가 어떤 함수랑 연관 있는지 찾기 귀찮음

<br>

클래스: 클래스는 왜 필요한가? 2
------
### 왜? 함수까지 하나로 묶어야되나?
* 사람들은 세상을 물체(object)로 인지 -> 직관적
* 물체는 상태와 동작이 한 곳에. 이것을 프로래밍에서는 개체라 번역

### 사람은 여럿인데?
* 변수는 값이 변했음
* 즉, age란 변수가 있다면 나이가 15인 경우도 17인 경우도 표현가능
```
    int age = 15;
    // 코드 생략
    age = 17;
    // 코드 생략
```
* 두 age를 가지고 싶다면? -> int 형 데이터를 2개 만듦
```
    int age1 = 15;
    int age2 = 17;
```
* 사람이 여럿일 때도 마찬가지
* 사람 데이터를 여러개 만들어야 함

### 사람을 나타내는 자료형 vs 사람 데이터
```
    int age = 15;

    // int 는 정수를 나타내는 자료형
    // 15 는 정수형 데이터(값)
```
* **int**는 정수를 담는 자료형, **age** 변수에 넣는 15는 정수형 데이터<br>
사람도 마찬가지로 자료형과 데이터가 필요!
```
    <사람을 나타내는 자료형> human = <데이터>;
```
<br>

클래스
-----
### 클래스(class)
* 사람은 내부적으로 여러 데이터를 가지니 그것들을 제대로 정의하는 자료형을 만들어야 함
```
    여러 데이터들 
    이름 : Leon
    성별 : Male
    나이 : 24
```
* 이렇게 커스텀하게 만드는 자료형을 클랙스(class) 라고 함
* 게임에서 전사, 마법사, 성직자와 같은 직업군이라 생각하면 편함
* 게임에서 이런 직업군에 따라 결정되는 스탯과 스킬들이 있음

### 클래스 예

Car.cs 파일
```
    public class Car
    {
        public int Price;
        public float Gas;
        public string Owner;

        public int GetPrice()
        {
            return Price;
        }

        public string GetOwner()
        {
            return Owner;
        }

        public void SetOwner(string owner)
        {
            Owner = owner;
        }

        public float GetGas()
        {
            return Gas;
        }

        public void Fillup(float gas)
        {
            Gas += gas;
        }

        public void Move()
        {
            Gas -= 0.5f;
        }

        public void Honk()
        {
            Console.WriteLine("Honk~ Honk~");
        }
    }
```
Program.cs
```
    // 메인 함수
    Car car = new Car();
    car.Owner = "Teemo Kim";
```

### 클래스 만들기
Car.cs
```
    public class Car
    {
        public int Price;
        public float Gas;
        public string Owner;
    }
```
* **Car**형
* 이미 있는 자료형이 아님 
* 우리가 '직접' 만든 새로운 자료형
* public 은 지금은 신경 안썯 됨
* 멤버변수(member variables)
    * **클래스 안**에서 선언한 변수
    * **클래스 안**에서 자유롭게 사용 가능
    * 클래스의 구성원인 변수

### 개체 만들기
Program.cs
```
    Car car = new Car();
```
```
    <클래스 이름> 변수명 = new <클래스 이름> ();
```
* 새로운 **<클래스 이름>** 형의 데이터를 만든다
* 클래스로 정의된 형에 맞는 구체적인 데이터를 개체(object) 라고 함
* C# 에서는 **new**를 통해서만 만들 수 있음

### 개체의 멤버에 접근하기
Program.cs
```
    car.Owner = "Teemo Kim";
    car.Owner = "Teemo Kim";
    car.Price = 20000;
    car.Gas = 60.0f;
```
* 여기서 동작을 추가 해야함
    * 동작이란 '움직이다','멈추다' 와 같은 동사, 즉 함수!

### 클래스 만들기
Car.cs
```
    public class Car
    {
        public float Gas;
        // 다른 멤버 변수 생략

         public void Move()
        {
            Gas -= 0.5f;
        }

        public void Honk()
        {
            Console.WriteLine("Honk~ Honk~");
        }
    }
```
* public 은 지금은 신경 안써도 됨
* **메서드(method)**
    * 멤버 함수라고 함
    * 개체의 행위들
    * **클래스 안**에서 선언한 함수
    * **클래스 안**에서 자유롭게 사용 가능
    * 같은 클래스의 멤버 변수에 접근 가능

<br>

생성자(Constructor) 1
-----
### 좀 더 안전한 OOP
* 지금까지의 내용은?
    1. 사람이 세상을 바라보는 방법과 왜 OOP가 좋은가를 설명
    2. 그리고 그걸 어떻게 코드로 구현하는지에 대한 설명

### 생성자(constructor)
```
    public class car
    {
        public Car(int price)
        {
            Price = price;
        }
    }
```
```
    public <클래스명>(<매개변수 리스트>)
    {

    }
```
* 생성자 개체를 생성할(**new**)때 반드시 호출 되는 함수
* 함수명으로 클래스명을 씀
* 반환형을 아예 적지 않음
* 생성에 필요한 매개변수를 강제할 수 있음
* 생성자가 여럿이어도 됨

<br>

생성자2
----
* 모든 개체가 '동일한 값'을 가져야 하는 경우가 있을 수 있음
* 그렇기 때문에 실수가 있을수 있음

### 생성자 안에서 상수를 바로 대입하는 예제
Car.cs
```
    public class Car
    {
        public int Price;
        // 다른 멤버 변수 생략

        public Car()
        {
            Prcie = 500000;
        }
        // 다른 멤버 함수 생략
    }
```

Program.cs
```
    // 메인 함수
    Car car1 = new Car();
    Car car2 = new Car();
    Car car3 = new Car();
```

### 위에 보다 더 나은 방법
Car.cs
```
    public class Car
    {
       public int Price = 500000;
       // 다른 멤버 변수 생략
       // 다른 멤버 변수 생략
    }
```

Program.cs
```
    // 메인 함수
    Car car1 = new Car();
    Car car2 = new Car();
    Car car3 = new Car();
```

### 또 다른 경우 - 연료를 비우자
Car.cs
```
    public class Car
    {
       public int Price = 500000;
       public float Gas = 0.0f;
       // 다른 멤버 변수 생략
       // 다른 멤버 변수 생략
    }
```
Program.cs
```
    // 메인 함수
    Car car1 = new Car();
    Car car2 = new Car();
    Car car3 = new Car();
```
* 위에서 public float Gas = 0.0f; 이렇게 썼지만 0을 대입 안해도 됨
기본값이 이미 0 이기 때문

### 참조형의 경우는 기본값이 무엇인가?
* 참조형의 기본값은 **null**

### 멤버 변수로 다른 클래스형을 가질 수 있음
Car.cs
```
    public class Car
    {
       public int Price = 500000;
       public string Owner;
       public float Gas = 0.0f;

       public Car(string owner)
       {
           Owner = owner;
       }
       // 다른 멤버 함수 생략
    }
```
* 사실 string도 클래스 이다
* 고로 Owner 는 **개체**

### 멤버 변수의 기본값
* 기본값은 0 이다
* 단, 참조형은 0에 준하는 **null**
* 멤버 변수 일 때만 초기화 생략 가능
    * 지역 변수는 컴파일러 오류 
    