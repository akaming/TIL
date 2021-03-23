값형 vs 참조형, 구조체, Nullable
========

값형, 참조형은 무엇인가?
-----
### 값형
* 기본 데이터형은 모두 값형(value type)이었음
    * int, float, double, decimal, byte 등
* [값형이란 무엇일까?](https://github.com/akaming/TIL/blob/master/c%23/chapter13.md) (함수배울때 잠깐 했었음)
    * 한 변수를 다른 변수에 대입하면 사본을 만드는 자료형
    ```
        int num1 = 1;
        int num2 = num1;
        num2 = 3;  // num1은 여전히 1
    ```
    * 함수 매개변수의 인자로 전달해도 마찬가지임
    ```
        public static void DoSomething(int num)
        {
            num = 3;    // 함수 밖의 num1은 여전히 1
        }
    ```
    ```
        // 메인 함수
        int num1 = 1;
        DoSomething(num1);
    ```
    * 즉, 다른 변수의 값을 변경해도 원본은 바뀌지 않음
* 원본을 바꾸고 싶다면?
    * 함수 호출인 경우 ref 매개변수
    ```
        public static void DoSomething(ref int num)
        {
            num = 3; // 함수 밖의 num1은 3
        }
    ```
    ```
        int num1 = 1;
        DoSomething (ref num1);
    ```
    * 지역 변수 대입인 경우. 값형을 쓰는 동안은 방법이 없음
    ```
        int num1 = 1;
        ref in1 num2 = num1;   //불가능
        num2 = 3;
    ```
### 값형의 종류
- 기본 데이터 형<br>
  정수형: byte, sbyte, short, ushort, int, uint, long, ulong<br>
  실수형: float, double, decimal<br>
  불리언<br>
  char형
- 구초제(Struct)
- enum(사실상 이름 붙인 정수)

### 참조형
* 그렇지 않은 경우를 본 적이 있는데?
    * 배열의 배열
    * 내부 배열을 다른 변수에 대입한 뒤 요소를 바꿨는데 원본도 바뀜
    ```
        const int CLASS_COUNT = 3;
        int[] STUDENT_COUNT_PER_CLASS = { 3, 2, 5 };

        string[][] classrooms = new string[CLASS_COUNT][];
        for (int i = 0; i < CLASS_COUNT; ++i)
        {
            classrooms[i] = new string[STUDENT_COUNT_PER_CLASS[i]];
        }      

        string[] classroom1 = classrooms[0];
        classroom1[0] = "Severus";
    ```
* 이거 배열이 참조형(reference type)이기 때문
* 참고로 C#에서 모든 데이터형은 값형 또는 참조형

### 참조형이란?
* 이코스에서 아주 자세히 설명하지 않음
* 그냥 이렇게 이해하면 빠름
    * 값을 복사하지 않고 원본을 공유하는 형태의 자료형
    * C#에서 클래스는 모두 참조형
    * **string**은 참조형이었다(클래스 라서)
    * **enum**은 값형

### 참조형의 종류
- 클래스 
- 배열
- 문자열(string)

### 참조형의 인자 전달과 ref
* 참조형을 **ref** 매개변수로 전달해도 제대로 작동
    ```
       public static void SwapFace(ref Human human1, ref Human human2) 
       {
           Face temp = human1.GetFace();
           human1.SetFace(human2.GetFace());
           human2.SetFace(temp);
       }
    ```
* 하지만 이건 참조형의 참조라 별 의미가 없는 경우가 대부분
* 오히려 쓸데없이 참조를 한번 더 해서 미미하게 성능저하 현상이 일어날수 있음

### 참조형의 인자 전달과 ref
* 이런 경우에는 의미가 있음
```
    public static void SwapHuman (ref Human human1, ref Human human2)
    {
        Human temp = human1;
        human1 = human2;
        human2 = temp;
    }
```
* 그러나 생가보다 많이 없은 일 
 👆 그냥 이런게 있다 정도만 생각하면 될듯

 ### 참조형 vs 값형의 매개변수 전달
 | |값형|참조형|
 |:---:|:----:|:----:|
 |원본 바꾸려면<br>(참조에 의한 전달*)|**ref** 키워드|그대로전달|
 |원본 변경방지<br>(값에 의한 전달*)|그대로 전달|???|

 👆 (* 모두가 동의하는 정의는 아님) 
 * ??? 여기에서 참조형은 값형으로 바꿀 방법이 없음, 이런 문제를 다른 언어에서 해결 못하는 언어들이 많음
 * 하지만 C#에서 class같은건데 값형으로만 쓸수있는 class 비슷한걸 제공함
 * 그게 바로 **구조체(structure)**

 ### 복습퀴즈 (내가 틀려서 써놓은거)
 ```
    public class Program
    {
        static void Main(string[] args)
        {
            <1>string studentName = "Paul";
            <2>uint studentAge = 25;
            <3>EStudentType studentType = EStudentType.Online;
            <4>ClassInfo classInfo = new ClassInfo();
            <5>classInfo.StudentNumbers = new int[] { 1, 2, 3, 4, 5 };

            aging(ref studentAge);
        }

        private static void aging(<6>ref uint age)
        {
            age += 1;
        }
    }

    public enum EStudentType
    {
        Online,
        Offline
    }

    public class ClassInfo
    {
        public ClassInfo()
        {
        }

        public int[] StudentNumbers { get; set; }
    }
 ```
 * <1>~<6>의 변수들이 값형인지 참조형인지
    * 정답 
        * <1> 참조형
        * <2> 값형
        * <3> 값형
        * <4> 참조형
        * <5> 참조형
        * <6> 참조형

### POCU 코드 보기
```
    // Vector.cs
    using System;

    namespace ValueTypeVsReferenceType
    {
        public class Vector
        {
            public Vector(int x, int y)
            {
                X = x;
                Y = y;
            }
            
            public int X {get; set;}
            public int Y {get; set;}
        }
    }
```
```
    //Program.cs
    using System;

    namespace ValueTypeVsReferenceType
    {
        class Program
        {
            static void Main(string[] args)
            {
                int num = 0;      
                Increment(num);          // 1) num에 Increment()를 호출하려고 시도. Increment()가 실행된 뒤에 num 값은 무엇일까

                Console.WriteLine(num);  // 1) 값은 0 , 왜냐면 int가 값형이기 때문. 값형을 함수의 인자로 전달하면 언제나 복사, 내부에 있는 복사본은 1증가 시켰을뿐 원본은 증가 시키지 않은거임

                
                int[] nums = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};  
                Increment(nums);          // 2) int와 달리 int 배열은 참조형. 그러면 Increment()를 실행 하면 nums값은 무엇일까 (new 어쩌고 이면 참조형이라고 생각하자)

                Console.WriteLine(string.Join(",", nums));   // 2) 모든 요소가 1씩 증가 했다 2, 3, 4, 5, 6, 7, 8, 9, 11 

                
                Vector vector = new Vector(0, 0); 
                Increment(vector);                   // 3) vector 개체에 Increment()를 실행해보자

                Console.WriteLine($"{vector.X} {vector.Y}");  // 3)Vector는 참조형. 따라서 vector.X and vector.Y가 1씩 증가함
            }
            
            public static void Increment(int num) // ① 정수를 증가하는 Increment()함수를 정의
            {
                num++;
            }
            
            public static void Increment(int[] nums) // ② 배열을 모두 훑으면서 배열안에 있는 모든 요소를 1씩 증가 시킴
            {
                for (int i =0; i < nums.Length; i++)
                {
                    nums[i]++;
                }
            }
            
            public static void Increment(Vector vector) // ③ 벡터의 X와 Y를 증가 시킴
            {
                vector.X++;
                vector.Y++;
            }
        }
    }
```


### 값형과 참조형 쉬운코드로 보기
* 값형
```
    int a = 100;
    int b = a;
    b += 50;
    
    Console.WritLine($"a: {a}");
    Console.WritLine($"b: {b}");
```
* 값형 출력값
```
    a: 100
    b: 150
```
<br>

* 참조형
    * 참고로 문자열형인 string은 참조형
```
    ring[] a = new string[] { "Hello", "World" };
    string[] b = a;
    b[1] = "C# is fun!";
    
    Console.WriteLine($"a: {a[1]}");
    Console.WriteLine($"b: {b[1]}");
```
* 참조형 출력값
```
    a: C# is fun!
    b: C# is fun!
```

<br>

구조체
----
### 구조체(struct)
* 사용자 정의 데이터 유형(Data Type)으로 int, double 등과 같은 기본적으로 제공되는 변수 유형이 아닌 새로운 유형, 여러가지 유형을 사용하기위해 사용자가 직접 만들어 사용
* 개념 : 기능은 없고 데이터만 있는 클래스
* 그러나 C#의 구조체는 함수도 가질 수 있음
* 여전히 개념 상의 이유로 클래스에서 가능한 것들을 못하는 경우가 있음
* 제일 중요한 점은 **구조체는 값형** 이라는것
    * 개념상 데이터만 모아 놓은 클래스기에 당연

### 생성자
```
    public int X {get; set;}
    public int Y {get; set;}

    public Vector2(int x, int y)
    {
        X = x;
        Y = y;
    }
```
```
    public <구조체 이름>(<매개변수 리스트>)
    {

    }
```
* 매개변수가 있는 생성자만 선언 가능

### 멤버 변수와 프로퍼티
* 멤버 변수와 프로퍼티 모두 선언과 동시에 초기화 할 수 없음
    ```
        public int X = 10;     //컴파일 오류 
        public int Y = {get; set; } = 10; //컴파일 오류
    ```
* 단, 상수(const)나 정적(static) 변수는 초기화 가능
    ```
        public const int MAX = 200; //OK
        public static int X = 10; // OK
    ```

### 구조체 개체 생성

```
    Vector2 v1 = new Vector2();       //모든 멤버변수가 0으로 초기화
    Vector2 v2 = new Vector2(30, 40);
```
* **new** 키워드를 사용해서 생성

### 클래스와 구조체 모두 자료형
* 클래스와 구조체 모두 자료형이기에 서로 포함 가능
```
    public class Human
    {
        public Head Head {get; set;}    // Head는 struct
        public Body Body {get; set;}    // Body는 class
    }
```
```
    public struct Human
    {
        public Head Head {get; set;}        // Head는 struct
        public Body Body {get; set;}        // Body는 class
    }
```

### 클래스 vs 구조체
* 대부분 응용 프로그램에서는 구조체를 잘 안씀
    * 개체를 전달하면서 원본을 바꾸는 것이 보통이기에
* 성능을 요하는 특정 분야에서 쓰는 경우는 있음(예: 게임)
    * 쓰레기를 만들지 않음
* 원본 대신 **언제나** 복사본을 전달하고 싶다면 구조체를 쓰기도 함

<br>

 Nullable
 ----
 ### 클래스 멤버변수의 기본값
 ```
    public class Human
    {
        public int Age {get; private set;}
        public float Height {get; private set;}
        public Head Head {get; private set;} //Head는 클래스
    }
 ```
 * **Human human = new Human();** 을 실행하고 나면 Age, Height, Head에는 어떤 값들이 들어가 있을까? 
    * 0, 또는 0에 준하는 값
    * 값형일 경우 다 0 
    * 참조형일 경우 **null**(비트 패턴이 0)

### 구조체 멤버변수의 기본값
```
    public class Human
    {
        public int Age {get; private set;}
        public float Height {get; private set;}
        public Head Head {get; private set;} //Head는 구조체
    }
 ```
 * **Human human = new Human();** 을 실행하고 나면 Age, Height, Head에는 어떤 값들이 들어가 있을까? 
    * 0, 또는 0에 준하는 값
    * 값형일 경우 다 0 
    * Head도 값형이니 Head 내부의 변수들도 다 0 -> Head가 null이 아님에 주목

### null
* 참조값의 기본값
* 데이터가 존재하지 않는다는 의미
    * 아무것도 참조하고 있지 않음
* '없다'를 컴퓨터 세게에서 이진수로 0
    * 왜? 컴퓨터는 0과 1로만 모든걸 표현
    * 아무것도 없는데 1이나 그 이상의 숫자 (10₍₂₎, 11₍₂₎, ...) 표현하기에는 애매해서

### 값형과 null
* 값형에는 null을 쓸 수 없음
    ```
        int num = null;  //컴파일 오류
    ```
* 참조형에는 0을 쓸 수 없음
    ```
        Human you = 0;   //컴파일 오류
        string message = 0;  // 컴파일 오류
    ```
* 참조형의 기본값이 **null**은 메모리에서 보면 이진수 0과 같음
* 값형의 기본값인 0은 이진수로도 0임
    * 자세한건 다른 과목에서 배움
* **null**은 의도치 않은 결괏값을 표현할 때 쓰면 참 좋음

### 값형에도 null을 쓰고 싶은 경우?
* List< T >에서 IndexOf() 함수가 원하는 요소를 못 찾으면?
    ```
        List<int> list = new List<int> {10, 20, 30, 40};
        int index = list.IndexOf(100);   // -1을 반환
    ```
    * -1보다 null을 반환하는게 더 낫지 않나?
* 하지만 int는 값형이라 null이 될수 없음
    * 구조체도 마찬가지
* 👆 하지만 그걸 가능하게 해주는게 있음 **Nullable< T >**

### Nullable< T >
* T형의 값, 또는 null을 가질 수 있는 구조체
* null도 가질 수 있는 값형을 표현할 때 씀
* 기본값은 null
* 참조형은 T가 될수 없음

### Nullable 변수 선언 및 대입
* 선언 - 기본형 (이렇게는 잘 안씀)
    ```
        Nullable<int> age;
        Nullable<float> height = 180.0f;
        Nullable<Head> head;
        Nullable<Body> body = new Body();
    ```
* 선언 - 축약형 (이거를 많이 씀)
    ```
        int? age;
        float? height = 180.0f;
        Head? head;
        Body? body = new Body();
    ```
* 대입
    ```
       age = 17;
       height = null;
       head = nw Head();
       body = null; 
    ```

### Nullable 변수가 null인지 확인
```
    if (age.HasValue)
    {
    }
```
* HasValue 라는 프로퍼티를 사용하지만 if (age == null)을 쓰는게 더 일반적임

### Nullable 변수의 값을 읽어오기
```
    if ( age != null )
    {
        Console.WriteLine(age.Value);
    }
```
* null인 경우 그대로. Value를 불러오면?
    * 예외 발생
    ```
        float? height;
        float val = height.Value;
    ```

### Nullable 변수의 값 비교하기
* 하지만 T향과 T?형을 비교할 때 단순히 == 연산자를 쓰는게 가능
    * Nullable 이 내부적으로 null 검사를 한 뒤에 비교해 줌
    ```
        👇 if ( age != null && age.Value == 3) 이렇게 쓰는걸 밑에처럼 쓸수도 있음
        int? age = null;
        if (age == 3)
        {
        }

        int? grade = 3;
        if (grade == 3)
        {
        }
    ```

### 값형에 Nullable 변수 대입하기
* Nullable을 값형에 직접 대입할 수 없음
    ```
        int? maybeAge = 3;
        int age = maybeAge;    // 컴파일 오류
    ```
* 왜냐하면 null일 경우 예외가 발생하니 실수 방지용 일듯
* 올바른 코드
    ```
       int? maybeAge = 3;
       int age = maybeAge.Value;
    ```
* Nullable과 아닌것을 섞어 쓰면 은근 복잡해짐

### 그럼 다 Nullable 을 쓰면 되지 않을까?
* 왜 List< T >의 IndexOf()는 굳이 -1을 썼을까?
    * -1은 IndexOf()의 색인으로는 유효한 값이 아님
        * 리스트의 색인은 0부터 시작하기 때문
    * uint였다면 요소를 못찾으면 uint.MaxValue를 반환하기로 약속할 수도 있음 

### Nullable 사용 시 당연히 오버헤드가 있음
* 잘못 쓰면 코드만 괜히 복잡해짐
    * null을 허용하는 코드와 null을 예상치 않는 함수 간에 데이터 교환할 때 등등
    ```
        static int Min (int num1, int num2)
        {

        }

        // 어떤 함수 안
        int? maybeAge = 3;
        if (maybeAge != null)
        {
            int age = maybeAge.Value;
            int minAge = Min(age, ADULT);    //ADULT는 상수
        }
    ```
### 정말 필요할 떄만 Nullable을 쓰자
* 예외 상황이 발생했을 때 흔히 사용하는 반환값은?
    * -1     (이렇게 많이 사용함)
    * uint.MaxValue   (이렇게 많이 사용함)
* 쓸일이 있으면 써도 되지만 생각보다는 Nullable을 쓸일이 거의 없을거임
