파트2 시작, 다시 만난 함수
=====

파트2 소개
----

### 앞으로 배울 내용
* 근대 언어들에 추가된 기능
* C# 만의 기능
* 배우면 기억할 점
    * 이 기능들은 컴퓨터가 이해하는 기능이 아님
    * 다른 엔지니어가 만들어 준 기능

<br>

함수 오버로딩1
----
### 굳이 함수 이름이 이래야 할까?
```
    static float AverageFromInts(int[] scores)          // 함수 바디 생략
    static float AverageFromFloats(float[] floats)      // 함수 바디 생략
```
* **FromInts, FromFloats**이 없어도 이미 매개변수 형에서 유추 가능
* 같은 형이 아니면 호출 자체가 불가능
* 동일한 이름을 사용할 수 있을까?
```
    static float Average(int[] scores)          // 함수 바디 생략
    static float Average(float[] floats)      // 함수 바디 생략
```
* 👆 위에 처럼 사용할수 있음 이거를 **함수 오버로딩** 이라 함

### 함수 오버로딩 예시
```
    static void Print (int score)
    {
        Console.WriteLine($"Your scroe is {score}.");
    }
    static void Print (string name)
    {
        Console.WriteLine($"Your name is {name}.");
    }
    static void Print(float gpa, string name)
    {
        Console.WriteLine($"Hello, {name}!\nYour GPA is {gpa}.");
    }

    static void Main(string[] grgs)
    {
        Print(10);
        Print("Lulu");
        Print(89.9f, "Teemo");
    }
```
### 함수 오버로딩
* 동일한 이름을 가진 함수 구현을 허용하는 기능
* 단, 매개변수 목록이 달라야 함
* 함수의 이름 + 매개변수가 함수의 시그내처 라고 했던것 기억
* 반환형은 상관없음
    * void A; int A; 이렇게 하면 안됨

### 함수 오버로딩
* 매개변수 목록을 제외하고는 모든게 동일
* 반환형은 상관 없음

<br>

함수 오버로딩2
----
```
    static void Print(int score)                //ok
    static void Print(string name)              //ok
    static void Print(float gpa, string name)   //ok
    static int Print(int score)                 //컴파일 오류
    tatic int Print(float gpa)                  //ok
``` 

### 모든걸 함수 오버로딩으로?
* 잘못된 함수 호출이 일어날 수 있음
    ```
        static string[] GetStudents(float height)    // 함수 바디 생략
        static string[] GetStudents(int age)        // 함수 바디 생략

        // 메인 함수
        int height = 175;
        GetStudents(height);        // GetStudents(int age)가 호출. 175세 장수
        GetStudents(175);           // GetStudents(int age)가 호출. 175세 장수
    ```
* 동일한 매개변수 함수가 없다면, 승격(promotion) / 묵시적 형변환을 통해 일치하는 함수를 찾는다.
    ```
        static string[] GetStudents(float height)       // 함수 바디 생략

        // 메인 함수
        int age = 17;
        GetStudents(age);       //GetStudents(float height)가 호출. 17cm 단신
        GetStudents(17);        //GetStudents(float height)가 호출. 17cm 단신
    ```
* 따라서 이런 경우 오버로딩을 안 쓰는게 나음
    ```
        static string[] GetStudentsByHeight(float height);       // 함수 바디 생략
        static string[] GetStudentsByHeight(int age);           // 함수 바디 생략

        // 메인 함수
        int height = 180;
        GetStudentsByHeight(height);        //ok (int가 float으로)
        GetStudentsByHeight(17.0f);         //ok (float이니까)
        GetStudentsByHeight(17);            //ok (int니까)
        GetStudentsByHeight(170.3f);        // 컴파일 오류 (float 에서 int는 불가)
    ```
### 코딩 표준: 함수 오버로딩
1. 매개변수의 수가 다른 경우 → 오버로딩
2. 승격/ 묵시적 변환을 해도 상관없는 경우 → 오버로딩
    ```
        static double Sqrt(double num)  // 함수 바디 생략
        static int Sqrt(int num)        // 함수 바디 생략

        // 메인 함수
        Sqrt(10.0f);    // double형을 호출해도 그닥 문제는 없음
    ```
    * 실제 C#의 Math 라이브러리도 float 보단 double을 더 많이 지원함
        * float 지원 함수: Abs(), Clamp(), Max(), Sign()
        * float 미지원: Ceiling(), Cos(), Floor(), Log(), Pow(), Round() 등등
3. 매개변수가 아예 승격이 불가능한 경우 → 오버로딩
    * 예 : string ⟷ int 혹은 string[] ⟷ int[]
    ```
        static string[] GetStudents(string name)   // 함수 바디 생략
        static string[] GetStudents(int age)      // 함수 바디 생략
    ```
4. 그런게 아니라면 함수 오버로딩보다는 다른 이름을 쓸 것

<br>

기본값 인자
---
### 약간만 차이나는 함수들
```
    static string GetFullAddress(string street, string city);
    static string GetFullAddress(string street, string city, string state);
```
* 두 코드의 차이는 string state 뿐
* 이처럼 함수 간 중복된 매개변수가 많을 경우 어떻게 해야 할까?
    * 계속 함수를 오버로딩한다?
    * 만약에 '도시' 개념이 없는 나라를 고려해야 한다면?
    ```
        static string GetFullAddress(string street); 
    ```
    👆 위의 코드를 추가 한다면?
* 이런 경우 어떻게 해야 할까?

### 기본값 인자(default parameter)
```
    static string GetFullAddress(string street, string city, string state = "")

    static float GetHP(int level, int mapID, int difficulty = 0)

    // 메인 함수
    GetFullAddress("123 Main street", "Big City", "Big state");   //ok
    GetFullAddress("456 Jido-daero", "Seul");   //ok

    GetHP(1, 1234, 10);   //ok
    GetHP(1, 1234);       //ok
    GetHP(1, 1234, 0);    //ok
```
* 매개변수 선얼할 때 미리 기본값을 정해둘 수 있음
* 하나 이상 가능
```
    // 컴파일 오류
    static string GetHP(int level, int mapID, int difficulty = 0, string name);

    // OK
    static float GetHP(int level, int mapID, string name, int difficulty = 0);
```
* 매개변수 목록 중간에 기본값 인자가 아닌것이 오면 안됨
* 옵셔널매개변수는 늘 마지막에 있어야 함

### 기본값 인자의 문제점 1
* 나중에 누군가 기본값 인자를 중간에 추가할 때 이상한 일이 일어날수도 있음
```
    static float GetHP(int level, int mapID, int difficulty = 0)
```
👇 // HP의 소수점을 제어하는 기능을 넣을려고 함
```
    static float GetHP(int level, int mapID, int decimalPoint = 1, int difficulty = 0)
```
* 원래 의도: 몬스터 레벨(10), 몬스터가 있는 맵(2456), 게임 난이도(2)
* 코드 변경 후 : 몬스터 레벨(10), 몬스터가 있는 맵(2456), 게임 난이도(0), HP를 소수점 둘째(2) 자리에서 반올림

### 기본값 인자의 문제점 2
* 기본값 인자가 도중에 변경될 경우, 기존에 사용중인 코드에서 문제가 발생할 수 있음
```
    static float GetHP(int level, int mapID, int difficulty = 0)
```
👇 // 난이도의 기본값을 1로 바꿔야겠당 1이 보통이다
```
    static float GetHP(int level, int mapID, int difficulty = 1)
```
* 난이도를 한 단계 올렸는데도 몬스터들의 채력이 안오름
* 
    ```
       GetHP(10, 2456); 
    ```
    ```
        GetHP(10, 2456, 1);
    ```

### 코딩 표준: 기본 인자값
* 새 기본 매개변수는 언제나 뒤에 둘것
    * 즉, 중간에 끼우지 말것
* 기본값은 언제나 0으로 할것
    * 0이 아니면 기본 매개변수로 하지 말것
* 함수 오버로딩 대신 실제 함수 이름을 제대로 쓰는게 좋을때도 있다는것을 기억할 것
* 매개변수 직접 넣어주기

<br>

out 매개변수
----
### 나누기 함수
```
    static bool TryDivide(float numerator, float denominator, ref float result)
    {
        if (denominator == 0.0f)
        {
            return false;
        }
        result = numerator / denominator;

        return true;
    }

    static void Main(string[] args)
    {
        float result = 0.0f;
        bool bSuccess1 = TryDivide(10.0f, 0.0f, ref result1);
        float result2 = 0.0f;
        bool bSuccress2 = TryDivide(10,0f, 5.0f, ref result2);
    }
```
### TryDivide()의 아쉬운점
* ref 매개변수로 쓸 변수는 반드시 초기화 해야 함
    ```
        float result = 0.0f;
        TryDivide(10.0f, 0.f, ref result);
    ```
* 그냥 result는 출력값인데 왜 0으로 초기화를 해야되는건가?
* 더 좋은 방법이 없을까?
* 있다! 그게 바로 **out 매개변수**

### out 매개변수를 쓴 나누기 함수
```
    static bool TryDivide(float numerator, float denominator, out float result)
    {
        if (denominator == 0.0f)
        {
            result = 0.0f;
            return false;
        }
        result = numerator / denominator;

        return true;
    }

    static void Main(string[] args)
    {
        float result;
        bool bSuccess1 = TryDivide(10.0f, 0.0f, ref result1);
        float result2;
        bool bSuccress2 = TryDivide(10,0f, 5.0f, ref result2);
    }
```

### out 매개변수
* 함수 안에서 대입 안 하면 컴파일 오류
```
    // 컴파일 오류
    static bool TryAdd(float num1, float num2, out float result)
    {
        return false;
    }
```
```
    // ok
    static bool TryAdd(float num1, flaot num2, out float result)
    {
        result = 0.0f;
        return = false;
    }
```
* if/else if문에서 대입 안 한곳 있어도 오류
```
    // 컴파일 오류
    static bool TryDivide(float numerator, float denomiator, out float result)
    {
        if (denominator == 0.0f)
        {
            return fasle;
        }
        // 뒷 코드 생략
    }
```
```
    // OK
    static bool TryDivide(float numerator, float denomiator, out float result)
    {
        if (denominator == 0.0f)
        {
            result = 0.0f;
            return fasle;
        }
        // 뒷 코드 생략
    }
```

### 키보드 입력 기억하는가?
```
    int num = int.Parse(Console.ReadLine());
```
* 문제점: 숫자 이외의 값을 넣으면 예외 발생
* 해결법: TryParse()
```
    int num;
    bool bSuccess = int.TryParse(Console.ReadLine(), out num);
    // bSuccess의 값에 따라 코드 작성
```
* TryParse()는 예외 처리(exception handling)없이 예외 상황을 처리할 수 있는 매우 좋은 방법
* 함수가 반환형을 두 개를 가질 수 있다면 이 문제가 없을지도
