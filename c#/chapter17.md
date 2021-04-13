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

<br>

접근 제어자(Access Modifier) 1
----

### 문제점 1: 어? 분명히 50만원이어야 하는데
Car.cs
```
    public class Car
    {
        public int Price = 500000;
        public string Owner;
        public float Gas;
        // 다른 멤버 함수 생략
    }
```
Program.cs
```
    // 메인 함수
    Car car = new Car();
    car.Price = 0;
```

### 문제점 2: 어? 경유가 휘발유로
Car.cs
```
    public class car
    {
        public enum EGasType
        {
            Gasoline,
            Diesel,
        };

        public EGasType GasType;
        // 다른 멤버 변수 생략

        public Car(EGasType gasType)
        {
            GasType = gasType;
            //코드 생략
        }
        // 다른 멤버 함수 생략
    }
```
Program.cs
```
    //메인 함수
    Car car = new Car(Car.EGasType.Diesel);
    car.GasType = Car.EGasType.Gasoline;
```

### 뭐가 문제일까?
1. 멤버 변수의 기본값을 정해놨는데 개체 생성 후 그 값을 변경
    * 차 값이 50만원에서 0원으로..
2. 절대 변해서는 안 되는 멤버 변수를 개체 생성 후 그 값을 변경
    * 갑자기 경유차에서 휘발유차로

<br>

접근 제어자2
----
### 접근 제어자
* 어디에서 클래스의 멤버에 접근이 가능한지 정해주는 키워드
    * public 
    * protected(이 코스에서는 안다룸)
    * internal(이 코스에서는 안다룸)

### public 예제
Car.cs
```
    public class Car
    {
        👉public float Gas;

        public void Move()
        {
            👉Gas -= 0.5f;

            Console.WriteLine($"Move!\n(Gas: {Gas}L left)");
        }
        public void Honk()
        {
            Console.WriteLine("Honk~ honk~");
        }
    }
```
Program.cs
```
    // 메인함수
    Car car = new Car();
    👉car.Gas = 10.0f;
    car.Move();
```

### public
* 누구라도 접근 가능
    * 같은 클래스 내에서
    * 클래스 밖에서
* 변수, 함수 모두 **public** 가능

### private 예제
Car.cs
```
    public class Car
    {
        👉private float mGas;
        👉private float mKillometersTreavelled;

        public void FillUp(float gas)
        {
            mGas += gas;
        }
        

        public void Move()
        {
            reduceGas(0.5f);
            mKillometersTreavelled += 0.3f;

            Console.WriteLine("Move!");
            Console.WriteLine($"(Gas: {mGas}L left)");
            Console.WriteLine($"(Total move: {mKillometersTreavelled}km)");   
        }

        👉private void reduceGas(float consumedGas)
        {
            mGas -= consumedGas;
        }
    }
```
Program.cs
```
    //메인 함수
    Car car = new Car();
    car.FillUp(50.0f);
    car.Move();
```

### private
* 클래스 안에서만 접근 가능
    * 바꿔 말하면 클래스 밖에서는 접근 불가능 -> 컴파일 오류
* 변수, 함수 모두 private 가능
* 외부에서 private 변수의 값을 바꾸려면 public 함수가 필요
```
    // Car.cs
    public class Car
    {
        👉private float mGas;
        👉private void reduceGas(float gas);
    }
```
```
    // Program.cs - 메인함수
    Car car = new Car();
    car.mGas = 50.0f;   // 컴파일 오류
    car.reduceGas(0.3f); // 컴파일 오류
```

<br>

프로퍼티(Property) 1
----
### 문제점 1 : 연료량을 알 수가 없음
Car.cs
```
    class Car
    {
        private float mGas;

        public void FillUp(float gas)
        {
            mGas += gas;
        }
    }
```
Program.cs
```
    static void Main(string[] grgs)
    {
        Car myCar = new Car(Car.EGasType.Diesel);
        myCar.Owner = "Leon Kim";
        myCar.FillUp(50.0f);
        myCar.Move();
        myCar.Honk();

        float remainingFuel = myCar.mGas;
        Conosle.WriltLine($"remaining fuel: {remainingFuel}L");
    }
```
### 문제점 2 : 판매가 변경 시 조건을 걸기 어려움
Car.cs
```
    class Car
    {
        private int mPrice = 500000;

        public Car(EGasType gasType, int price)
        {
            mGasType = gasType;

            if(price >= 500000)
            {
                mPrice = price;
            }
        }
    }
```

Program.cs
```
    static voud Mian(string[] args)
    {
        Car myCar = new Car(Car.EGasType.Diesel, 1000000);
        myCar.Owner = "Leon Kim";
        myCar.FillUp(50.0f);
        myCar.Move();
        myCar.Honk();

        int newPrice;
        int.TryParse(Conosle.ReadLine(), out newPrice;
        if (newPrice >= 500000)
        {
            myCar.mPrice = newPrice;   // 컴파일 오류남
        }
    }
```

### 뭐가 문제일까
* 연료량을 읽을 수가 없음
    * 왜? Gas는 pricate 이라 클래스 밖에서 접근 불가
    * 그럼 다시 public 으로? -> 안됨. 그럼 또 다른 문제가 생김
* 모든 차의 가격을 바꿀 수 있게 하고 싶음
    * 근데 내가 정한 최저가는 지키고 싶음
    * 그냥 public 으로 하면 최저가보다 낮은 가격이 들어올수 있음

이 문제를 해결할 방법은 **getter/setter 함수**

### getter 와 setter 함수 예
Car.cs
```
    class Car 
    {
        private int mPrice = 500000;
        private float mGas;

        public Car(EGasType gasType, int price)
        {
            mGasType = gasType;
            SetPrice(price);
        }

        public void SetPrice(int price)
        {
            if(price >= 500000)
            {
                mPrice = price;
            }
        }
        public int GetPrice()
        {
            return mPrice;
        }
        
        public float GetGas)()
        {
            return mGas;
        }
    }
```
Program.cs
```
    // 메인 함수
    Car myCar = new Car(Car.EGasType.Diesel, 1000000);
    int newPrice;
    int.TryParse(Console.ReadLine(), out newPrice);
    myCar.SetPrice(newPrice);

    float remainingFuel = myCar.GetGas();
    Console.WriteLine($"Remaining fuel: {remainingFuel}L");
```

### getter와 setter 함수
* 멤버 변수를 직접 접근하지 않고 함수를 이용해서 접근
* setter 함수
    ```
    public void SetPrcie(int price)
    {
      if (price >= 500000)
      {
          mPrice = price;
      }  
    }
    ```
* setter 함수가 아님
    ```
        public void FillUp(float gas)
        {
            mGas += gas;
        }
    ```
* getter 함수
    ```
        public float GetGas()
        {
            reutrn mGas;
        }
    ```
* getter 함수가 아님
    ```
        public float GetGas()
        {
            return ++mGas;
        }
    ```
<br>

프로퍼티 2
----
* 어차피 변수 접근하는 건데 뭐 이렇게 다 함수여 하는건가..
    * 좀더 나은 방법이 없나? -> 있음 그게 프로퍼티

### 프로퍼티 예
Car.cs
```
    class Car
    {
        private int mPrice = 500000;

        public int Price
        {
            get
            {
                return mPrice;
            }
            set
            {
                if(value >= 500000)
                {
                    mPrice = value;
                }
            }
        }

        public Car (EGasType gasType, int price)
        {
            mGasType = gasType;
            Price = price;
        }
    }
```
Program.cs
```
    //메인 함수
    Car myCar = new Car(Car.EGasType.Diesel, 1000000);
    Console.WritceLine($"Car price: {myCar.Price}won");

    myCar.Price = 20000;
    Console.WriteLine($"Car price: {myCar.price}won");
```

### 프로퍼티(property)
* 변수와 메서드가 모두 함께 있는 형태
* 프로퍼티는 변수가 아님
* 컴파일러가 알아서 getter와 setter 함수를 만들어준다고 생각하면 될 듯
* 멤버 변수를 외부에 노출하지 않고 데이터를 변경할 수 있게 해줌
* getter/setter 함수처럼 추가적인 논리 코드도 넣을 수 있음

### getter/setter 함수 vs 프로퍼티1
getter/setter 함수
```
    private string mOwner;

    public string GetOwner()
    {
        return mOwner;
    }

    public void SetOwner(string owner)
    {
        mOwner = owner;
    }
```
프로퍼티
```
    private string mOwner;

    public string Owner
    {
        get
        {
            return mOwner;
        }
        set
        {
            mOwner = value;
        }
    }
```
### getter/setter 함수 vs 프로퍼티2
getter/setter 함수
```
    private int mPrice;

    public string GetPrice()
    {
        return mPrice;
    }

    public void SetPrice(int price)
    {
        if(price >= 500000)
        {
            mPrice = price;
        }
    }
```
프로퍼티
```
    private int mPrice = 500000;

    public int Price
    {
        get
        {
            return mPrice;
        }
        set
        {
            if (value >= 500000)
            {
                mPrice = value;
            }
        }
    }
```

### 자동으로 구현된(auto-implemented) 프로퍼티
```
    public string Owner{ get; set; }
    public float Gas { get; private set; } = 10.0f;
    public EGasType GasType { get; private set;}
```
```
    <접근 제어자> <자료형> <프로퍼티명> { (<접근 제어자>) get; (<접근 제어자>) set; } ( = <데이터>;)
```
* 멤버 변수에 단수히 데이터를 대입하거나 반환만 할 때 사용
    * setter 에서 특별한 연산을 해줄 때는 여전히 수동 프로퍼티를 사용해야 함
* 컴파일러가 컴파일 시에 익명의 멤버 변수를 만들어 줌
* **get**과 **set**에도 접근 제어자를 붙여줄 수 있음(선택)
    * **private**이 붙으면 클래스 밖에서 사용할 수 없음
* 초기화도 가능 (선택)


<br>

코딩 표준(Coding Standard)
-----
### 코딩 표준 : 멤버 작성 순서
1. public 멤버 변수 / 프로퍼티
2. private 멤버 변수
3. 생성자
4. public 멤버 함수
5. private 멤버 함수
    * 단, 프로퍼티과 대응하는 private 멤버 변수는 프로퍼티 바로 위에 적음

### 코딩 표준 : 프로퍼티를 사용할수 있으면 프로퍼티를 써라
* setter/getter 함수보다는 프로퍼티를 사용
```
    ❌
    private string mOwner;

    public string GetOwner()
    {
        return mOwner;
    }
    public void SetOwner(string owner)
    {
        mOwner = owner;
    }
```
```
    ⭕️
    public string Owner { get; set; }
```

### 코딩 표준 : 멤버 변수/프로퍼티 이름 짓기
* public 멤버 변수/프로퍼티
    * 파스칼 표기법을 따른다
    ```
        public float GasType { get; private set; }
    ```
* private 멤버 변수
    * 맨 앞에 'm'을 붙인다
    * 낙타 표기법을 따른다
    ```
        private float mKillometersTravelled;
    ```
* 함수의 매개변수, 지역분수
    * 낙타 표기법을 따른다
    ```
        public Car(EGasType gesType, int price)
    ```

### 코딩 표준 : 멤버 함수 이름 짓기
* public 함수
    * 파스칼 표기법을 따른다
    ```
        public void Honk()
        {
            Console.WriteLine("Honk~ honk~");
        }
    ```
* private 함수
    * 낙타 표기법을 따른다
    ```
        private void reduceGas(float consumedGas)
        {
            Gas -= consumedGas;
        }
    ```

<br>

partial 클래스
----
* C# 전용
* 클래스를 물리적으로만 분리(여러 파일로 쪼갬)

### partial 클래스가 된 Human 클래스 (예를 들어 엄청 긴 Human 클래스가 있다고 생각해보자)

* Human.Head.cs
    * public void TurnHeadToRight() {}
* Human.Hand.cs
    * public void FoldArm() {}
* Human.Body.cs
    * public void BendBody() {}
* Human.Leg.cs
    * public void Crouch() {}

<br>
Program.cs
```
    Human mySelf = new Human ("Ada Lee", 35);
    mySelf.TurnHeadToRight();
    mySelf.FoldArm();
    mySelf.BendBody();
    mySelf.Crouch();
```

### 코딩 표준 : partial 클래스의 파일명
* <클래스명>.<설명>.cs
* 각 단어의 첫 글자는 대문자로
    * 예) Human.Head.cs

<br>

정적 클래스(Static Class)
----
### static
* 클래스, 멤버 변수, 멤버 함수에 사용 가능
    ``` 
        public static class Math           //Ok
        public static int Count = 0;       //Ok
        static void Main(string[] args)    //Ok
        public static const int MAX = 100; //컴파일 오류
        public const int MAX = 100;        //Ok
    ```
    * 단, 상수는 묵시적으로 **static** 이다
### 정적 멤버 변수 예
Cat.cs
```
    public class Cat
    {
        public string Name { get; set; }
        public float Age { get; set; }
        public 👉static int Count = 0;

        public Cat(string name, int age)
        {
            Name = name;
            Age = age;

            ++Count;
        }
    }
```
<br>

Program.cs
```
    static void Main(string[] args)
    {
        Cat myCat1 = new Cat("Lulu", 300);
        Cat myCat2 = new Cat("Amumu", 20000);
        Cat myCat3 = new Cat("Teemo", 27);

        Console.WriteLine($"Total Cat: {👉Cat.Count}");
    }
```
Total Cat: 3

### 정적 멤버 변수
* 갸체에 속하지 않고 클래스형에 속함
* 따라서 모든 개체가 하나의 정적 멤버 변수를 공유
* 멤버 함수에서 접근 가능
* **public** 이면 개체가 없어도 외부에서 접근 가능
    * 정적 함 볼때 자세히 

### 정적 멤버 함수 예
Cat.cs
```
    class Cat
    {
        private 👉static int mCount = 0;

        public 👉static void AddCat()
        {
            ++mCount;
        }

        public 👉static int GetCatCount()
        {
            return mCount;
        }
    }
```

<br>

Program.cs
```
    static void Main(string[] args)
    {
        Cat myCat1 = new Cat("Lulu", 300);
        👉Cat.AddCat();

        Cat myCat2 = new Cat("Amumu", 20000);
        👉Cat.AddCat();

        Cat myCat3 = new Cat("Teemo", 27);
        👉Cat.AddCat();

        Console.WriteLine($"I'm with {👉Cat.GetCatCount()}");
    }
```
Total Cat: 3

### 정적 멤버 함수
* 개체에 속하지 않고 클래스에 속함
* 정적 멤버 함수는 비정적 멤버 변수에 접근하지 못함

### 정적 클래스 예
Cat.cs
```
    public static class SimpleMath
    {
        public const double PI = 3.1415926535897931;

        public static int Max(int val1, int val2)
        {
            return ( val1 < val2 ) ? val2 : val1;
        }

        public static int Min( int val1, int val2 )
        {
            return ( val1 > val2 ) ? val2 : val1;
        }
    }
```

<br>

Program.cs
```
    //메인 함수
    int result = SimpleMath.Min(10, 30);
    double circumference = 2 * SimpleMath.PI * 20;

    Console.WriteLine($"Min(10, 30): {result}");
    Console.WriteLine($"Circumference(20): {circumference}");
```

### 정적 클래스
* 정적 맴버만 가질 수 있음
    * 정적 멤버 변수
    * 정적 멤버 함수
* **new**로 개체를 생성할 수 없음
* 반드시 멤버 함수에 **static**을 붙여야 함
    * 안 붙이면 컴파일 오류 발생 -> 실수 방지를 위해서
* 개체를 생성하지 않고 정적 클래스 내의 함수를 사용 가능
* 주로 유틸리티 클래스를 만들 때 사용
    * Math 클래스 : 최솟값, 최댓값, Sin값, Cos값, Tan값, 소수점 버림, 반올림 등등

### 왜 정적 변수, 함수를 사용하나?
* 전역적으로 공통되게 쓰고 싶은 값이 있을 때 사용
    * 예) 원주율
* 프로그램 전체에서 개채에 종속도지 않은 기능이 필요할 때 사용
    * 예) 두 정수 중 최솟값(Min()), 최대값(Max()) 구하기
* 한 클래스에 속한 모든 개체가 공통적으로 가지고 있는 데이터에 사용
    * 예) 고양이의 학명은 어떤 고양이든 다 똑같음
* 개체를 구성하는 데 필수는 아니지만 그 개체와 연관 있는 데이터에 사용
    * 예) 고양이의 수는 고양이를 만드는데 필수는 아님. 관리 차원에서 필요
* 정적 클래스는 이런 의도를 만들어진 정적 변수/함수를 모아두는 그릇

<br>

확장 메서드(Extension Method)
----
### 확장 메서드 만드는 법
1. 정적 클래스를 만든다
    ```
        public static class StringExtension
        {
        }
    ```
2. 확장 메서드를 작성한다. 반드시 정적 함수여야 함!
    ```
        public static class StringExtension
        {
            public 👉static int GetCount()
            {
            }
        }
    ```
    * 확장 메서드의 첫 번째 인자는 함수에 넣고자 했던 클래스 이름을 적는다
    ```
        public static class StringExtension
        {
            public static int GetCount(👉string message, char[] separators)
            {
            }
        }
    ```
    *  첫 번째 인자 앞에는 반드시 **this**를 붙인다
     ```
        public static class StringExtension
        {
            public static int GetCount(👉this string message, char[] separators)
            {
            }
        }
    ```

### 확장(extension) 메서드
* 클래스에 함수를 추가하지 못할 때 사용
    * 해당 클래스의 소스 코드가 없을때 (다른 사람의 라이브러리 사용할 때)
        * 나중에 이 부분은 다룰 예정
    * 추가 하려는 함수가 클래스에 필수적이지 않을 때
        * 앞서 예제에 나온 문자열의 단어 수가 같은것
        * 뒤에서 곧 다룰 Linq 라이브러리의 ToArray()같은 함수들
* 보통 정적 메서드를 이용해서 해결
* C#에서는 확장 메서드를 사용

### 코딩 표준 : 확장 메서드임을 강조
* 확장 메서드를 담는 클래스 이름 Extension 을 접미사로 붙인다.
    ```
        public static class <확장을 원하는 클래스>Extenstion
    ```
* 확장 메서드는 다른 파일에
    * 아예 클래스가 다르니
    * 커스텀 데이터형마다 파일 하나 만드는게 보통

### 베스트 프랙티스 : 확장 메서드
* 기본형의 확장 메서드를 만들 땐 조심
    * 특히 비즈니스 로직을 넣어야 한다면 no
    ```
        CourseCode courseCode = something.ToCourseCode();
    ```
    * 차라리 정적 메서드를 만들 것
    ```
        CourseCode courseCode = CourseCode.Parse(something);
    ```
* 클래스형의 확장 메서드는 괜찮음
    * 클래스 자체가 이미 비즈니스 로직을 대표