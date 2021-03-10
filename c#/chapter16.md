문자열 빌더, decimal형, 컬렉션
========

문자열 빌더(String Builder)
----
### 문자열 합치기는 느릴 수도 있다고 했음
```
    Console.WriteLine("Hello Pope!\n" + "Give me" + "2" + "dollars!");
```
```
    // message는 string형, result는 int 형
    for (int i = 1; i <= 100; ++ i>)
    {
        ++result;
        message = message + result + "";
    }
```
* 위에 처럼 만들면 임시로 만들고 버리는 문자열이 너무 많기 때문

### 가비지 수집기 (garbage collector, GC)
* 새로 만들어진 문자열들은 언젠가 지워져야 함
* C# 에서는 그걸 가비지 수집기 라는 시스템이 자동으로 해줌
* 다만, 쓰레기 문자열이 넘쳐나면 GC의 성능 저하가 올 수 있음

### 그러면 해결 방법은?
* 임시 문자열의 수를 줄이면 됨
* 하지만 문자열 합치기는 매우 매우 자주하는 연산임
* 따라서 이걸 최적화하기 위한 라이브러리가 존재

### StringBuilder 라이브러리
* StringBuilder 클래스 임
* 문자열을 효율적으로 만들어주는 라이브러리
* 대략적인 동작방법
    * 긴 문자열을 담을 수 있는 충분한 공간을 미리 확보
    * 추가되는 문자열들로 그 공간을 차례대로 채워 나감
    * 모든 것이 준비되면 최종적으로 문자열을 만들어서 반환

### 사용 예제
```
    using System;
    using System.Text;

    namespace StringBuilderExample
    {
        class program
        {
            static void Main(string[] args)
            {
                StringBuilder builder = new StringBuilder(4096);
                builder.AppendLine("Hello Pope!");
                builder.Append("Give me");
                builder.Append(2);
                builder.AppendLine("dollars!");

                string greetings = builder.ToString();
                Console.WriteLine(greetings);
            }
        }
    }
```

### StringBuilder 생성하기
```
    // 파일 제일 위에서 라이브러리 추가
    using System.Text;

    // 함수 안에서
    StringBuilder builder = new.StringBuilder(4096);
```
```
    StringBuilder <변수명> = new Stringbuilder(in maxCharCount);
```
* 총용량이 maxCharCount인 StringBuilder 생성
    * 예전에 **string**은 내부적으로 **char**[]과 다르지 않다 했죠?
    * 따라서 이렇게 큰 **char**[]을 미리 확보해 놓는다고 생각해도 무방

### 문자열 추가하기
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Hello Pope!");
    builder.Append("Give me");
```
문자열과 줄바꿈을 추가
```
    AppendLine(string text);
```
문자열 추가
```
    Append(string text);
```
* **StringBuilder**의 내부 문자열에 문자열을 추가
* 여러가지 오버로드 함수들이 있음 (직접 찾아볼 것)

### 문자열 아닌것도 합칠수도 있음
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Score: " + 10);
    builder.Append(3.14f);
```
* 기존의 문자열 합치기(+ 연산자) 처럼 **StringBuilder** 역시 다양한 자료형을 문자열에 합칠 수 있음

<br>

문자열 빌더 2
----
### 배열의 총용량과 현재 사용중인 길이 얻기
```
    Console.WriteLine($"Capcity: {builder.Capacity}, Lenght: {builder.Length}");
```
내부 배열의 총용량
```
    builder.Capacity; // builder는 StringBuilder
```
```
    builder.Length; // builder는 StringBuilder
```
* 각각 내부 배열의 총용량과 길이 값을 가지고 있음
* 함수 아님

### 추가 공간 확보
```
    StringBuilder builder = new StringBuilder(25);
    builder.AppendLine("Hello Pope!");
    builder.Append("Give me");
    builder.EnsureCapacity(1024);
```
```
    EnsureCapcity(int newCapacity);
```
* **StringBuilder**의 내부 배열의 총용량을 늘리는 함수

### StringBuilder - 최종 문자열 얻어 오기
```
    StringBuilder builder = new StringBuilder(4096);
    // 문자열 추가하는 코드 생략
    string greetings = builder.ToString();
```
```
    ToString();
```
* 완성한 최종 문자열을 반환
* 현재 내부 배열의 사용중인 길이만큼만 반환
* 오버로드한 함수가 있음(직접 찾아볼 것)

### 그렇다면 임시 문자열은 몇 개?
```
    Console.WriteLine("Hello Pope!\n" + "Give me" + "2" "dollars!");
```
* + 연산자를 이용한 문자열 합치기 : 2개

<br>

```
    StringBuilder builder = new StringBuilder(4096);   // 임시 문자열 총용량 : 4096
    builder.AppendLine("Hello Pope!");
    builder.Append("Give me");
    builder.Append(2);
    builder.AppendLine("dollars!");
    string greetings = builder.ToString();
    Console.WriteLine(greeting);
```
* StringBuilder를 이용한 문자열 합치기 : 1개

### 처음 확보해 둔 공간을 다 쓰면?
* 아무 문제 없음
* 전에 배열의 배열에서 학생을 추가 했듯이 StringBuilder가 자동적으로 내부공간을 늘린 뒤 모든 데이터를 복사
* 복사를 안 할수록 좋으므로 처음부터 충분한 공간을 확보하자(2의승수로 많이 잡음)
* 그래서 보통 new StringBuilder(256), new StringBuilder(512), new StringBuilder(1024), new StringBuilder(2408), new StringBuilder(4096) 이렇게 많이 씀 

<br>

문자열 빌더의 기타 함수
----
### StringBuilder 의 기타 함수
* Insert()
* Replace()
* Remove()
* Clear()

### Insert()
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Hello Pope!");
    builder.Insert(6, "and bye");
```
```
    Insert(int index, string text);
```
* **StringBuilder**의 내부 배열 중간(**int** index)에 새로운 문자열(**sting** text)을 삽입
* 여러 가지 오버로드 함수들이 있음(직접 찾아볼것)
    * Append()와 마찬가지로 다양한 매개변수 형도 지원

### Replace()
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Hello Pope!");
    builder.Replace('p', 'b');
    builder.Replace('P', 'B', 3, 3);
```
```
    Replace(char old, char new);
```
* 모든 old를 new로 바꿈
<br>

```
    Replace(char old, char new, int start, int count);
```
* start 번째부터 start + count 번째 사이에 있는 모든 old를 new로 바꿈
* 여러가지 오버로드 함수들이 있음(직접 찾아볼 것)

### Remove()
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Hello Pope!");
    builder.Remove(8, 2);
```
```
    Remove(int start, int length);
```
* start 번 째 부터 length 개만큼의 문자를 지움

### Clear()
```
    StringBuilder builder = new StringBuilder(4096);
    builder.AppendLine("Hello Pope!");
    builder.Clear();
```
```
    Clear();
```
* 임시 문자열을 제거하는 함수
* 이 함수를 호출 후, 길이를 확인 하면 0
```
    builder.Clear();
    Console.WriteLine(builder.Length);    // 0이 출력
```

### StringBuilder vs 문자열 합치기?
* 합칠 문자열이 몇개 없다면 **StringBuilder** 쓸 이유가 크게 없음
    * 쓰는게 귀찮기도 함
* 대여섯 개 합치면 그때부터 **StringBuilder**를 고려
* 수십 개면 당연히 써야 함

<br>

decimal형 1
----
### 부동소수점형의 정밀도 문제 
* 지수에 따라 소수점이 둥둥~ 떠다니는 자료형
    * 예: 0.05 = 5.0 x 10⁻² = 0.5 x 10⁻¹
* 비트 수는 정해져 있는데 너무 표현할 숫자가 많음
    * 0 부터 0.000000000000000000000001씩 더해서 1까지 가는 과정을 모두 정확하게 출력할 수 있을까
        * 불가능. 이미지 32개의 비트수만으로 표현할 수 있는 수의 개수를 넘어감
        * 1을 출력하기 전에 많은 수들이 정확하지 않게 출력될 것 임
    * 정수에 이런 문제가 없는 이유는 사실상 "열거형"이기 때문
    * 따라서 부동소수점에서는 근접한 두 수는 같은 값이 될 수도 있음
* **부동소수점형은 근사값이지 정확한 값이 아니다**

### 은행에서 쓰기 적합할까?
* 정밀도 문제 때문에 돈이 왔다 갔다 하는 곳에서 쓰기 부적합

### 그런데도 부동소수점 형을 쓰는 이유는?
* CPU에서 자체적으로 지원하는 유일한 실수형 -> 계산이 빠름
* 다른곳에서 쓰기엔 크게 문제 없음
    * 예: 게임에서 총 끝에서 나는 연기 효과를 보여주는데 1mm 틀리다고 문제 될건 없다

### 해결책1: 정수로 변환해서 쓰기
* 미 달러가 같은 경우, 금액에 100을 곱해서 연산
    * 예: $10.10 + $0.01 = $10.11 -> 1010 + 1 = 1011
* 화면에 보여줄 때는 100으로 나누고 반올림해서 보여줌
* 더하기, 빼기에만 올바른 방법
    * 두 달러 값을 곱할 일은 없을 듯?
* 정수가 표현할 수 있는 범위까지만 표현 가능
    * 32비트 정수에서는 문제 (0 ~ 4,294,967,295)
    * 64비트 정수에서는 크게 문제가 아님 (0 ~ 9,223,372,036,854,775,807)
    * 단, 소수점 9자리까지 계산해야 한다면?

### 해결책2: 문자열로 표현하기
1. 문자열은 무한의 길이를 가지니 숫자가 아닌 문자열로 저장
    * 예: "10.01" 더하기 "0.01"
2. 그리고 두 숫자를 계산할 때 문자열에서 각 자리의 문자를 숫자로 바꾼뒤 한 자리 씩 계산
    * 단점 이라 하면은 👇
    * 받아 올림, 받아 내림 할때 귀찮아짐
    * + 연산자 잘못 쓰면 -> 예) "10.01" + "0.01" -> "10.010.01"

decimal형 2
----
### 해결책3: decimal 자료형
|표현 범위|정밀도|
|:------:|:-----:|
|±1.0 x 10⁻²⁸ ~ ±7.9228 x 10²⁸|28~29|
* CPU(기계) 자체에서 지원하는 형은 아님
* 금융권에서 돈 계산에 쓰기에 적합
* 일부 언어들도 비슷한 해결책이 있음
    * Java의 경우 BigDecimal

### decimal 자료형 사용하기
```
    decimal num1 = 10.123456789123456789m; // Ok
    decimal num2 = 10.123456789123456789; // 컴파일 오류
    decimal num3 = 10m; // Ok
    decimal num4 = 10; // Ok
```
* 접미사 'm' 사용
    * 정수일 때는 안 붙여도 됨 (묵시적 변환 허용, 단 그 반대는 안됨)
    * 부동소수점일 때는 **반드시** 붙여야 함 (명시적 변환만 허용)

### decimal 형과 다른 자료형 간의 변환
```
    decimal num1 = 10.1234567891234567899m; 
    decimal num2 = 10.123456789123456789m; 
    decimal num3 = 100;

    float num4 = num1;         // 컴파일 오류
    float num5 = (float)num1;  // ok
    num2 = num5;               // 컴파일 오류 
    num2 = (decimal)num5;      // ok 

    int num6 = num3;           // 컴파일 오류
    int num7 = (int)num3;      // ok
    num3 = num7;               // ok
```

<br>

컬렉션: 컬렉션(Collection)이란?
-----
### 컬렉션(Collection) 이란?
* 동일한 형의 여러 자료를 저장하는 공간
* 자료 구조 (data strucure)의 일부
* 다른 언어에서는 컨테이너(container)라고도 부름

### 배열 vs 컬렉션
|배열|컬렉션|
|:---:|:---:|
|자료 구조|자료 구조|
|요소의 수를 바꿀 수 없음|요소의 수를 바꿀 수 있음|
|유용한 함수 제공 안함|유용한 함수를 기본적으로 제공|

### 컬렉션 종류
* 단순한 컬렉션 : 길이가 바뀔 수 있는 배열
* 복잡한 컬렉션 : 자유로운 길이 + 다양한 접근 방법

### 컬렉션 종류 - 컬렉션 결정 시 고려할 사항
* 다음과 같은 요인에 따라 사용할 컬렉션 결정
    * 어떤 컬렉션을 이용하느냐에 따라 메모리 사용량, 성능이 달라지니 잘 고려 후 결정해야 함 -> 이 과목에서는 배우지 않는 내용
1. 색인(index)의 종류
    * 정형화된 색인
        * 0,1,2,3,4... (배열에 본 그 방식)
    * 임의의 key 값: 어떤 자료형이든 가능하나 정형화된 색인은 아닌 것
        * "사과","이름","달리다"와 같은 문자열
2. 데이터 접근 패턴
    * 처음부터 끝까지 컬렉션 데이터를 순회할 것인가?
    * 컬렉션의 중간에 데이터를 자주 넣고 빼는가?

### 컬렉션 종류 - 이 코스에서 다룰 컬렉션
* 실제로 가장 많이 쓰는 컬렉션
1. List
2. Dictionary
3. HasgSet

### 그 박의 컬렉션
* 이런것도 있음
    1. Stack
    2. Queue
    3. LinkeList(C언어에서 많이 다룸)
* 알고리듬 과목을 비롯한 기타 과목에서 더 자세히 배움

<br>

컬렉션: 리스트(List) 1
----

### 리스트(list)
* 배열과 거의 비슷함
* 색인 (0부터 n)을 통해 데이터에 접근
* 그러나 배열의 길이(담을 수 있는 최대 요소 수)를 언제든 바꿀 수 있음

### 리스트 생성
```
    List<int> scores = new List<int>();
    List<string> names = new List<string>();
```
```
    List<T> 변수명 = new List<T>();
```
* <T>
    * 어떤 자료형을 담을지 표현함
    * 제네릭(generic) 프로그래밍의 일부
    * C++ 에선 템플릿 프로그래밍이라도 함
    * 여기서는 자세히는 다루지 않음
* 리스트를 생성하는 코드
* 리스트의 길이는 0

### 리스트 생 성 - 총용량도 함께
```
    List<int> scores = new List<int>(3);
    List<string> names = new List<string>(6);
```
```
    List<T> 변수명 = new List<T>(int capacity);
```
* 총용량이 capacity인 리스트를 생성하는 코드
* 또 다른 오버로드 함수 있음(직접 찾아볼 것)

### 리스트에 데이터 삽입하기
```
    List<int> scores = new List<int>(3);

    scores.Add(10);
    scores.Add(30);
```
```
    List<string> scores = new List<string>(5);

    names.Add("Bobe");
    names.Add("Kope");
```
```
    Add(T data);
```
* 자료형 **T**(타입)의 데이터를 리스트에 넣기

### 리스트에 데이터 여러 개 삽입하기
```
    int[] dummy = {10, 20};

    List<int> scores = new List<int>(3);
    scores.AddRange(dummy);
```
```
    List<string> names = new List<string>(5);
    
    names.Add("Bobe");
    names.Add("Kope");

    List<string> naems = new List<string>();
    names1.AddRange(names);
```
```
    AddRange(IEnumerable<T> collection);

    // 여기 IEnumerable 알 필요 없음 이 과목에서는 안배우지만 대충 설명 하자면 IEnumerable가 배열도 List도 표현 가능하다고만 알아두기
```
* 여러개의 데이터를 리스트에 넣기
    * IEnumerable<T>이 뭔지는 몰라도 됨
    * 배열([])이나 List<T>가 매개변수가 되는것만 기억

<br>

컬렉션: 리스트 2
----
### 이 데이터가 리스트에 있나요?
```
    List<int> scores = new List<int>(3);      // {10, 30} 이 았다고 가정
    bool bResult1 = scores.Contains(40);      // false
    bool bResult2 = scores.Contains(30);      // true

    List<string> scores = new List<string>(5);      // {"Bobe","Kope"} 이 았다고 가정
    bool bResult1 = scores.Contains("bobe");        // false (대소문자 구분)
    bool bResult2 = scores.Contains("Bobe");        // true
```
```
    bool bResult = list.Contains(T data);    // list 는 List<T>
```
* 해당 데이터가 있으면 참, 아니면 거짓을 반환

### 이 데어티가 리스트의 "어디에" 있나요?
```
    List<int> scores = new List<int>(3);      // {30, 30} 이 았다고 가정
    int index1 = scores.IndexOf(40);      // -1
    int index2 = scores.IndexOf(30);      // 0

    List<string> scores = new List<string>(5);      // {"Bobe","Kope"} 이 았다고 가정
    bool index1 = scores.IndexOf("bobe");        // -1 (대소문자 구분)
    bool index2 = scores.IndexOf("Bobe");        // 0
```
```
    int index = list.indexOf(T data);    // list 는 List<T>
```
* 해당 데이터가 '**처음**'으로 나타난 위치의 색인을 반환
* 없다면 -1을 반환
* 다양한 오버로드 함수가 있음(직접 찾아볼 것)

### 이 데어티가 리스트의 "어디에" 있나요? (2)
```
    List<int> scores = new List<int>(3);      // {30, 30} 이 았다고 가정
    int index1 = scores.LastIndexOf(40);      // -1
    int index2 = scores.LastIndexOf(30);      // 1

    List<string> scores = new List<string>(5);      // {"Bobe","Kope"} 이 았다고 가정
    bool index1 = scores.LastIndexOf("bobe");        // -1 (대소문자 구분)
    bool index2 = scores.LastIndexOf("Bobe");        // 0
```
```
    int index = list.LastindexOf(T data);    // list 는 List<T>
```
* 해당 데이터가 '**마지막**'으로 나타난 위치의 색인을 반환
* 없다면 -1을 반환
* 다양한 오버로드 함수가 있음 (직접 찾아볼것)

### 리스트 중간에 데이터 넣기
```
    List<int> scores = new List<int>(3);    // {30, 40}
    scores.Insert(2, 10);

    List<string> names = new List<string>(5);    // {"Bobe", "Kope"}
    names.Insert(1, "Pope");
```
```
    Insert(int index, T data);
```
* 리스트의 index 번째에 data를 넣기

### 리스트의 총용량과 길이
```
    List<int> scores = new List<int>(3);                       // {30, 40}
    Console.WriteLine($"{scores.Capacity}, {scores.Count}");   // "3, 2"

    List<string> names = new List<string>(3);                       // {"Bobe", "Kope", "Pope"}
    Console.WriteLine($"{names.Capacity}, {names.Count}");   // "5, 3"
```
```
    int capacity = list.Capacity; // list는 List<T>
    int count = list.Count; // list는 List<T>
```
* **List<T>**의 현재 총용량(capacity)과 사용량(Count)을 알려줌
    * 모두 함수 아님

### 잘못된 색인을 넣으면?
```
    List<int> scores = new List<int>(3);    // {30, 30}
    scores.Insert(10,10);
```
* 위의 예시처럼 넣으면 "예외가 처리되지 않음"" 이라고 오류를 줌

### 리스트에서 요소 삭제하기
```
    List<int> scores = new List<int>(3);  // {30, 40}
    bool bSuccess1 = scores.Remove(10);   // 참
    bool bSuccess2 = scores.Remove(100);  // 거짓

    List<string> names = new List<string>(5);  // {"Bobe", "Kope", "Pope"}
    bool bSuccess1 = names.Remove("Bobe");   // 참
    bool bSuccess2 = names.Remove("Tobe");  // 거짓
```
```
    bool bSuccess = list.Remove(T data);    // list는 List<T>
```
* 리스트에 data가 있으면 지우고 참을 반환, 없으면 거짓을 반환

### 리스트의 요소에 접근하기 - []
```
    List<int> scores = new List<int>(3);  // {10, 30}
    scores[2] = 100; // 프로그램 실행하면 예외 발생
    int myScore = scores[0];  //myScore: 10
    scores[0] = 100; // {100, 30}
```
<br>

값 얻어오기
```
    T data = list[index];    //list는 List<T>, index는 정수형
```
<br>

값 대입하기
```
    list.[index] = <T형 데이터>;   //list는 List<T>, index는 정수형
```
* 리스트의 index번째 요소에 접근

### 리스트에 순차적으로 접근하기
```
    List<string> names = new List<string>(5);     //{"Bobe", "Kope", "Pope"}

    for (int i = 0; i < names.Count; ++i)
    {
        Console.WriteLine($"Name: {names[i]}");
    }
```
* 반복문을 이용해서 접근 가능

### 리스트에서 배열로 변환하기
```
    List<string> names = new List<string>(5);
    names.Add("Bobe");
    names.Add("Kope");
    names.Add("Pope");

    string[] nameArray = names.ToArray();
```
```
    T[] array = list.ToArray();   // list는 List<T>
```
* **List<T>**에서 순수한 배열 **T**[]로 변환 하는 함수
    * **List<int>**는 **int**[]로, **List<float>** **float[]**로...

### List<T>의 모든 요소를 지우기
```
    List<string> names = new List<string>(5);     //{ "Bobe", "Kope", "Pope" }

    names.Clear();
```
```
    list.Clear();   // list는 List<T>
```
* **List<T>**의 요소를 모두 지우는 함수 (용량은 안 변함)

### 언제 사용하면 좋을까?
* 배열 사용하는 곳에는 다 사용하기 좋음 (업계에서는 많이 사용함)

<br>

컬렉션: 딕셔너리(Dictionary) 1
----
### 딕셔너리(Dictionary)
* List<T>와 다른 점은 색인이 0~n 사이의 수가 아니라 임의의 데이터형
    * 이 임의의 데이터 형을 키(key)라고 함
    * 실제 저장되는 값은 값(value)라고 함
* 실제로 우리가 사용하는 사전과 비슷함

### 딕셔너리
* 배열에서 색인이 동일하면 같은 위치를 가리켰듯이 키가 동일하면 같은 값을 가르킴.
* 따라서  내부 데이터 저장은 배열처럼 연속된 메모리에 할 수 없다 -> 당연히 배열이 더 효율적
* 다른 언어에서는 딕셔너리 대십 (map)라고 함 (그래서 맵핑 하다라고 함)

### Dictionary<TKey, TValue> 생성
```
    Dictionary<int, string> students = new Dictionary<int, string>();
    Dictionary<int, int> scores = new Dictionary<int, int>();
```
* **<TKey>**
    * 어떤 자료형의키를 담을지 표현함
    * <T>와 마찬가지로 여기서는 자세히 다루지 않음 -> 그냥 쓰세요
* **<TValue>**
    * 어떤 자료형의 값을 담을지 표현함
    * <T>와 마찬가지로 여기서는 자세히 다루지 않음 -> 그냥 쓰세요

### 딕셔너리에 데이터 추가하기
```
     Dictionary<string, string> students = new Dictionary<string, string>();
     students.Add("A10000000", "Teemo");    // (학번, 학생 이름)
     students.Add("A10000001", "Leon");
```
* 키와 매핑되는 값을 딕셔너리에 추가

### 이미 들어 있는 키로 새로운 데이터를 추가하면 어떻게 될까?
```
     Dictionary<string, string> students = new Dictionary<string, string>();
     students.Add("A10000000", "Teemo");    // (학번, 학생 이름)
     students.Add("A10000001", "Leon");
     students.Add("A10000000", "Lulu");
```
* 예외처리가 되지 않음 이 뜸

<br>

컬렉션: 딕셔너리 2
----
### 중복된 키를 확인 후 추가
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    bool bSuccess1 = students.TryAdd("A10000000", "Lulu");   // 거짓
    bool bSuccess2 = students.TryAdd("A10000002", "Lulu");   // 참
```
```
    bool bSuccess = dic.TryAdd(Tkey key, TValue value); //dic은 dictionary<TKey, TValue>
```
* 딕셔너리 안에 key가 키로 없으면 새로운 값을 넣고 참을 반환
* 딕셔너리 안에 key가 키로 이미 있으면 거짓을 반환

### 딕셔너리의 모든 요소 삭제하기
```
    Dictionary<string, string> students = new Dictionary<string, string>();
   // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

   students.Claer(); 
```
```
    dic.Clear();    //dic은 dictionary<TKey, TValue>
```
*  딕셔너리의 모든 요소를 삭제

### 딕셔너리 안에 키가 있는지 확인하기
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    bool bSuccess1 = students.ContainsKey("A10000000");   // 참
    bool bSuccess2 = students.ContainsKey("Leon");   // 거짓
```
```
    bool bContain = dic.ContainsKey(Tkey key);    //dic은 dictionary<TKey, TValue>
```
* 딕셔너리 안에 Key가 있으면 참, 없으면 거짓으로 반환

### 딕셔너리 안에 값이 있는지 확인하기
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    bool bSuccess1 = students.ContainsValue("A10000000");   // 거짓
    bool bSuccess2 = students.ContainsValue("Teemo");   // 참
```
```
    bool bContain = dic.ContainsValue(TValue value);    //dic은 dictionary<TKey, TValue>
```
* 딕셔너리 안에 value가 값으로 있으면 참, 없으면 거짓으로 반환

### 딕셔너리 안에 있는 요소를 삭제
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    bool bSuccess1 = students.Remove("A10000000");   // 참
    bool bSuccess2 = students.Remove("Teemo");   // 거짓
```
```
    bool bRemoved = dic.Remove(Tkey key);    //dic은 dictionary<TKey, TValue>
```
* 딕셔너리 안에 key가 키로 있으면 요소를 삭제 후 참, 없으면 거짓을 반환

### 딕셔너리에서 키와 매핑된 값을 가져오기
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    string value;
    bool bFound = students.TryGetValue("A10000000", out value); 
    // bFound: 참, value: "Teemo"
```
```
    bool bFound = dic.TryGetValue(Tkey key, out TValue value);    //dic은 dictionary<TKey, TValue>
```
* 딕셔너리 안에 key가 키로 있으면 값을 **out** 매개변수에 대입하고 참을 반환
* 딕셔너리 안에 ke가 키로 없으면 거짓을 반환
* 업계에서 위의 이런 방법으로는 잘 사용하지 않음

### 또 다른 요소 추가/접근법 - []
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // {("A10000000", "Teemo"), ("A10000001", "Leon" )}

    students["A10000000"] = "Lulu";
    // string student = students["A10000002"];    // throws an exception
    students["A10000002"] = "Teemo";
```
```
    dic[key] = value;    //dic은 dictionary<TKey, TValue>
```
* 키가 이미 있다면, 연결된 값을 변경
* 키가 없다면, 키와 값을 새로운 원소로 추가
* 업계에서는 이 방법으로 많이 사용

### 언제 사용하면 좋을까?
* 배열처럼 0,1,2,3,... 이렇게 순서대로 저장하기 힘든 경우
    * 학번처럼 숫자가 커서 배열 색인으로 쓰기 힘들 떄
* 데이터 저장 공간이 크고, 배열 중간에 데이터를 삽입 및 삭제를 자주 해야할 경우 

<br>

컬렉션: 해시셋(hashset)
-----

### 해시셋(hashset)
* 딕셔너리와 매우 비슷
* 사실 리스트와 딕셔너리를 쓰는 경우가 거의 90%
* 나머지는 정말 특별할 때만 씀
* 해시셋은 딕셔너리랑 너무 비슷해서 쉬우니 보여주는 것(...)
* 차이점은 해시셋은 키만 있음
    * 값만 있다고 표현할 수도...(관점의 차이)


### HashSet<T> 생성
```
    HashSet<int> studentIDs = new HashSet<int>();
    HashSet<string> studentNames = new HashSet<string>();
```
```
    HashSet<T> 변수명 = new HashSet <T>();
```
* <T>
    * 저장할 키의 자료형을 나타냄
    * 여기서는 자세히 다루지 않음 -> 그냥 써라

### 해시셋에 요소 추가하기
```
    HashSet<int> studentIDs = new HashSet<int>();
    bool bSuccess1 = studentIDs.Add(201900002);   //참
    bool bSuccess1 = studentIDs.Add(201900001);   //참
    bool bSuccess1 = studentIDs.Add(201900002);   //거짓
```
```
    bool bSuccess = hs.Add(T data);     //hs는 HashSet<T>
```
* 해시셋에 없는 키면 새 요소로 추가한 후 참을 반환
* 해시셋에 있는 키면 거짓을 반환

### 이 요소가 해시셋에 있나?
```
    HashSet<int> studentIDs = new HashSet<int>();    //{201900002, 201900001}
    bool bContain1 = studentIDs.Contains(0);           // 거짓
    bool bContain2 = studentIDs.Contains(201900001);   // 참
```
```
    bool bContain = hs.Contains(T data);     //hs는 HashSet<T>
```
* 해시셋에 있는 키면 참을 반환
* 해시셋에 없는 키면 거짓을 반환

### 해시셋의 요소 삭제하기
```
    HashSet<int> studentIDs = new HashSet<int>();    //{201900002, 201900001}
    bool bRemove1 = studentIDs.Remove(0);           // 거짓
    bool bRemove2 = studentIDs.Remove(201900001);   // 참
```
```
    bool bRemoved = hs.Remove(T data);     //hs는 HashSet<T>
```
* 해시셋에 있는 키면 요소를 삭제한 후 참을 반환
* 해시셋에 없는 키면 거짓을 반환

### 해시셋의 모든 요소 삭제하기
```
    HashSet<int> studentIDs = new HashSet<int>();    //{201900002, 201900001}
    studentIDs.Clear();
```
```
    hs.Clear();     //hs는 HashSet<T>
```
* 해시셋에 있는 모든 요소를 삭제

### 해시셋의 요소 가져오기
```
    HashSet<int> studentIDs = new HashSet<int>();    //{201900002, 201900001}
    int id;
    bool bSuccess = studentIDs.TryGetValue(201900001, out id);
    // bSuccess: 참, id: 201900001
```
```
    bool bSuccess = hs.TryGetValue(T key, out T key);     //hs는 HashSet<T>
```
* 해시셋에 키가 있으면 그 키에 연결된 요소를 out 매개변수에 대입하고 참을 반환
* 해시셋에 키가 없으면 거짓을 반환

### 언제 사용하면 좋을까?
* 중복 데이터를 제거할 때
    * 수학의 집합
    * 똑같은 데이터를 Add()하면 아무일도 일어나지 않으므로

<bt>

컬렉션과 같이 쓰면 유용한 것들: foreach
-----
### 컬렉션의 순차적 요소 탐색

리스트
```
    List<string> names = new List<string>(5);     //{"Bobe", "Kope", "Pope"}

    for ( int i = 0; i < names.Count; ++i)
    {
        Console.WriteLine($"Name: {names[i]}");
    }
```
* 딕셔너리
    * // 순수하게 딕셔너리가 지원하는 함수로는 불가능
* 해시셋
    * // 순수하게 해시셋이 지원하는 함수로는 불가능

### 리스트와 foreach 문
```
    List<string> names = new List<string>(4096);     //{"Bobe", "Kope", "Pope"}
    foreach (string name in names)
    {
        Console.WriteLine(name);
    }
```
```
    foreach( T 변수명 in list)    // list는 List<T>
```
* foreach문 안의 T는 리스트 선언할 때 사용한 자료형
* 변수명은 foreach 문 범위에서만 사용됨

### 딕셔너리와 foreach 문
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // { ("A10000000", "Teemo"), ("A10000001", "Leon") }
    foreach (KeyValuePair<string, string> score in students)
    {
        Conosle.WriteLine($"Key: {score.Key}, Value: {score.Value}");
    }
```
```
    foreach (KeyValuePair<TKey, TValue> 변수명 in dic)   // dic 은 Dictionnary<TKey, TValue>
```
* KeyValuePair<TKey, TValue>의 TKey와 TValue는 각각 딕셔너리를 선언할 때 사용한 키와 값의 자료형
* 변수명은 foreach 문 범위에서만 사용됨

### 해시셋과 foreach 문
```
    HashSet<int> studentIDs = new HashSet<int>();    //{201900002, 201900001}

    foreach (int studentID in studentIDs)
    {
        Console.WriteLine(studentID);
    }
```
* foreach 문 안의 T는 해시셋 선언할 때 사용한 자료형
* 변수명은 foreach 문 범위에서만 사용됨

### 배열([])도 foreach 문 가능
```
    float[] scores = { 30.5f, 41.0f, 53.2f, 66.6f, 70.9f };
    foreach (float score in scores)
    {
        Console.WriteLine(score);
    }
```
```
    foreach ( T 변수명 In arr ) // arr는 T[]
    {
    }
```

### foreach 문의 한계
1. 방문 하는 요소의 값을 바꿀 수 없음
    ```
        List<int> scores = new List<int>(4096);     //{ 10, 20 , 30}

        foreach ( int score in scores)
        {
            score += 10;    // 컴파일 오류
        }
    ```

2. 현재 방문 중인 요소의 색인을 알 방법이 없음
    * 알려면 별도의 변수를 foreach 문 밖에서 선언 후 사용해야 함
    ```
        List<string> scores = new List<string>(4096);    //{"Pope", "Kope", "Bobe"}

        int index = 0;
        foreach ( string name in names )
        {
            ++index;
            console.WriteLine(name);
        }
    ```

3. 컬렉션이나 배열을 거꾸로 탐색할 수 없음
    ```
        List<string> scores = new List<string>(4096);    //{"Pope", "Kope", "Bobe"}

        foreach ( string name in names )
        {
            console.WriteLine(name);
        }
    ```
    왼쪽에서 오른쪽으로만 탐색 가능 함<br>
    오른쪽에서 왼쪽으로는 탐색 불가능

<br>

컬렉션과 같이 쓰면 유용한 것들: var
-----

### 딕셔너리 foreach 문의 문제점
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // { ("A10000000", "Teemo" ), ( "A10000001", "Leon" ) }

    foreach (KeyValuePair<string, string> score in students)
    {
        Conosle.WriteLine($ "Key: {score.Key}, Value: {score.Value} " )
    }
```
* KeyValuePair<TKey, TValue> 너무 길다

### var 키워드를 적용한 딕셔너리 foreach 문
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // { ("A10000000", "Teemo" ), ( "A10000001", "Leon" ) }

    foreach (var score in students)
    {
        Conosle.WriteLine($ "Key: {score.Key}, Value: {score.Value} " )
    }
```

### var 키워드
* 묵시적 자료형
    * 컴파일러가 알아서 자료형을 추론해줌
* 지역변수에만 사용 가능
* C++에서는 auto라고 표현
* 긴 자료형을 짧게 줄여줌 -> 편함
* 반드시 선언과 동시에 대입을 해야함
    * 안하면 컴파일 오류
    ```
        var num = 10;
        var message = "Hello World!";
        var error;    //컴파일 오류
    ```

### 코딩 표준 : 자료형이 뭔지 바로 알 수 있을 때만..
* 대입 하는 값을 통해 명백하게 자료형을 알 수 있을 때만 사용
```
    var num = 10;                       // int 라는걸 알수있음
    var message = "Hello World!";       // string 이라는걸 알수있음
    var weight = GetWeight();           // GetWeigh() 함수를 봐야함. 명백하지 않음 
```
* foreach 문에서 사용하는건 거의 언제나 좋음!
```
    Dictionary<string, string> students = new Dictionary<string, string>();
    // { ("A10000000", "Teemo" ), ( "A10000001", "Leon" ) }

    // 원래는 KeyValuePair<string, string> 
    foreach (var score in students)
    {
        Conosle.WriteLine($ "Key: {score.Key}, Value: {score.Value} " )
    }
```