배열의 배열, 문자열 분할
========

배열의 배열이 왜 필요한가?
-----
### 2D 배열을 이용한 학생 명부
```
    static void Main(string[] args)
    {
        const int CLASS_COUNT = 3;
        const int STUDENT_COUNT = 5;

        string[,] classrooms = new string[CLASS_COUNT, STUDENT_COUNT]
        {
            {"Saverus", "Drao", "Bellatrix", "", ""},
            {"Cedric", "Hannah", "", "", ""},
            {"Hermione", "Herry", "Leville", "Parvati", "Ron"}
        };

        for (int i = 0; i < CLASS_COUNT; ++i)
        {
            Console.WriteLine($"Class{i + 1} Info*******************");
            for (int j = 0; j < STUDENT_COUNT; ++j)
            {
                Console.WriteLine($"Student{j + 1} name: {class[i, j]}");
            }
            Console.WriteLine("**********************");
        }
    }
```

### 2D 배열의 문제
* 직사각형 혀ㅑㅇ태의 데이터만 지원 가능
* 하지만 각 행마다 열 수가 달라져야 한다면?
    * 모든 반의 학생 수가 동일하지 않음
* 1D 배열에서는 없는 문제
    * 행이 한 개 뿐이니 원하는 열의 개수를 적용 가능
* 해결책은 **배열의 배열**

<br>


바깥 배열 만들기
-----

### 배열의 배열

* 바깥 배열(다른 배열을 포함하는 배열)
    * 1D 배열
    * 각 요소의 형은 다시 1D 배열(안쪽 배열)
* 안쪽 배열
    * 1D 배열
    * 각 요소의 형은 실제 자료형

### 바깥 배열을 만드는 법

```
    <자료형>[][] <변수명> = new <자료형>[<바깥 배열 원소 개수>][];
```
```
    string[][] classrooms = new string[3][];
```
1. 배열의 배열을 만듬
2. 바깥배열의 각 원소를 문자열 배열(string[])을 받음
3. 문자열 배열을 원소로 가지는 배열의 이름은 Classrooms
4. classrooms은 3개짜리 1D배열
5. 아까 말한대로 각 원소를 문자열 배열(string[])을 가질거임

### 바깥 배열의 원소에 접근하기

```
    <자료형>[] <변수명> = <배열의 배열 이름>[<바깥배열 색인>]
```
```
    string[][] classrooms = new string[3][]; //반드시 필요
    int classInex = 0; // 1반
    string[] studentNames = classrooms[classIndex]; // 1반에 접근
```

안쪽 배열 만들기
-----
### 1반의 학생 정보를 담은 배열의 길이를 출력
```
    static void Main(string[] args)
    {
        string[][] classrooms = new string[3][];

        int classInex = 0;
        string[] studentNames = classrooms[classInedx];

        Console.WriteLine(studentNames.Length);
    }
```
* 이거를 돌리면 "0" 이 나올거 같지만 "0" 이 안나오고 null 이 나옴
* 아무것도 없는것은 **null** 이라고 함
* CLASS-COUNT 수만큼의 문자열 배열을 담은 공간을 만드는게 전부 (문자열 배열을 담은 공간을 만들고 안에는 텅텅 비어있기 때문에 null이 나옴)

### 안쪽 배열 만들기
```
    const int CLASS_COUNT = 3;
    string [][] classrooms = new string[CLASS_COUNT][];

    for (int i = 0; i < CLASS_COUNT; ++i)
    {
        classrooms[i] = new string[STUDENT_COUNT_PER_CLASS[i]];
    }
```
```
    <바깥 배열 이름>[<색인>] = new <자료형>[<안쪽 배열 원소 개수>];
```

<br>

안쪽 배열에 접근하기
----

### 1반의 학생 정보를 담은 배열의 길이 출력
```
    static void Main(string[] args)
    {
        const int CLASS_COUNT = 3;
        int[] STUDENT_COUNT_PER_CLASS = {3, 2, 5};
        string[][] classrooms = new string[CLASS_COUNT][];

        for (int i = 0; i < CLASS_COUNT; ++i)
        {
            classrooms[i] = new string[STUDENT_COUNT_PER_CLASSSTUDENT_COUNT_PER_CLASS[i]]; // 안쪽 배열을 만들었으므로
        }

        int classInex = 0; // 1반
        string[] studentNames = classrooms[classInedx];  // studentNames는 더이상 null이 아님!

        Console.WriteLine(studentNames.Length);
    }
```

### 안쪽 배열의 원소에 접근하는 방법
```
    // 바깥 배열과 안쪽 배열을 만드는 코드 생략. string classrooms[3][]
    int classIndex = 0;    //1반
    int studentIndex = 0;  // 첫 번째 학생

    // 방법 1
    classrooms [classIndex][studentIndex] = "Severus";

    // 방법 2 (더 좋음)
    string[] studentNames = classrooms[classIndex];
    studentNames[studentIndex] = "Severus";
```
* 방법 1
    * <바깥 배열 이름>[<바깥 배열 색인>][<안쪽 배열 색인>] = 값 대입;

* 방법 2
    * <안쪽 배열 자료형> <변수명> = <바깥 배열 이름>[<바깥 배열 색인>]; <br>
    <변수명>[<안쪽 배열 색인>] = 값 대입;

### 1반 첫 번째 학생의 이름 넣기
```
    static void Main(string[] args)
    {
        const int CLASS_COUNT = 3;
        int[] STUDENT_COUNT_PER_CLASS = {3, 2, 5};
        string[][] classrooms = new string[CLASS_COUNT][];

        for (int i = 0; i < CLASS_COUNT; ++i)
        {
            classrooms[i] = new string[STUDENT_COUNT_PER_CLASSSTUDENT_COUNT_PER_CLASS[i]];
        }

        int classInex = 0; // 1반
        int studentIndex = 0; // 첫 번째 학생

        string[] studentNames = classrooms[classIndex];
        studentNames[studentIndex] = "Severus";

        Console.WriteLine($"Class - 1 Student 1: {classrooms[classIndex][studentIndex]}");
    }
```
* 일단은 new로 만든것은 복사가 아니라 원본이 바뀐다고 기억하면 된다. 즉 new로 만든 건 기본적으로 그 자체가 **잠조형 데이터** 

<br>

안쪽 배열을 늘릴 수 있을까?
----

### 안쪽 배열을 늘릴 수 있을까?
```
    string[][] classrooms = new string[CLASS_COUNT][];

    classrooms[0] = new string[3];
    classrooms[1] = new string[2];
    classrooms[2] = new string[5];
```
* 안쪽 배열은 여전히 1D 배열 -> 추가 인원을 받지 못함
    * 배열의 크기가 2에서 3으로 늘 수 없다는 의미
* 방법은 오직 하나 뿐!
    1. 크기가 3짜리의 배열을 새로 만든 후,
    2. for문을 이용해 기존의 배열 데이터를 새 배열로 복사하고,
    3. 새 배열ㅇㄹ 바깥 배열에 대입

### for 문으로 배열 복사하기
```
    string[][] classrooms = new string[CLASS_COUNT][];

    // 학생들 이름을 넣는 코드는 생략
    string[] classrooms2 = classrooms[1];

    string[] newClassroom2 = new string[Classroom2.Length + 1];
    for (int i = 0; i < classroom2.Length; ++i)
    {
        newClassroom2[i] = classroom2[i];
    }

    newClassroom2[newClassroom2.Length - 1] = "Leanne";

    classrooms[1] = newClassroom2;
```

### Arrary.Copy()를 사용한 복사
```
    string[][] classrooms = new string[CLASS_COUNT][];

    // 학생들 이름을 넣는 코드는 생략
    string[] classrooms2 = classrooms[1];

    string[] newClassroom2 = new string[Classroom2.Length + 1];
    Array.Copy(classroom2, newClassroom2, classroom2.Length);

    newClassroom2[newClassroom2.Length - 1] = "Leanne";

    classrooms[1] = newClassroom2;
```

### Array.Copy()
```
    string[][] classrooms = new string[3][];
    string[] sourceArray = classrooms[1];   // classrooms[1]의 원소 개수 10개 가정
    string[] destinationArray = new string[2];
    Array.Copy(sourceArray, destination)
```

<br>

문자열 분할을 언제 할까요?
-----
### 게임 몬스터 데이터 읽어 오기
* 게임을 만든다고 생각해 보자
* 몬스터의 데이터의 이름, HP, MP를 텍스트 파일에서 읽어올거임
* 어떤 정형화된 형식을 만들어야 프로그램으로 읽을 수 있음
* 그럼 어떤 형식으로 저장 해야되는가?

### 몬스터 데이터 형식 1: 키와 값
* Key가 어떤 용도의 데이터 인지를 알려줌
    * 파일 안에서 순서가 바뀌어도 상관없음
* 한 몬스터의 데이터만 저장 가능
* 여러 몬스터 데이터를 저장해야 한다면?
* 옵션 1: 몬스터 하나당 파일 하나
    * 파일이 너무 많아질지도 모름
* 옵션 2: 한 파일에 배열 같은 형태로 집어 넣음
    * XML 또는 JSON 파일이 이런 걸 잘 지원
    * JSON을 이용하는 방법은 나중에

### 몬스터 데이터 형식 2: 표
* 표는 정형화된 다수의 데이터를 한 곳에 저장하기 용이
* 열 색인으로 셋 중 어떤 용도의 데이터인지 결정 됨
* 순서를 바꿀 수 없음
    * 큰 문제는 아닌 경우가 보통
    * 정형화가 더 될수록 컴퓨터가 데이터 처리하기 쉬움
* 실제 게임업계에서 많이 쓰는 형태
* 엑셀파일을 이용하는 경우가 흔함
* 엑셀파일은 텍스트 파일이 아님
* 하지만 csv(comma-separated values)파일로 저장 가능
    * 각 값은 쉼표(comma)로 분리
    * 쉼표를 구분문자(delimiter)라고 함
    * 다른 구분문자를 쓰는 것도 가능
    * 텍스트 파일

### 몬스터 CSV 데이터를 읽는 법
1. 한 줄을 읽는다.
    a. 다음 쉼표까지 문자열을 읽어 문자열 목록에 추가
    b. 읽어올 위치를 쉼표 다음으로 옮긴다.
    c. 아직도 읽어올 문자열이 있다면 a 로 돌아간다
    d. 읽어 온 데이터를 몬스터에 정보로 설정한다.
2. 아직 읽어올 줄이 있다면 1로 돌아간다.

<br>

토큰 읽어오기, 문자열 분할 팁
----
### 토큰을 읽어 오는 법
* 토큰: 연속된 데이터에서 쪼갤 수 있는 가장 작은 다위
* 별도의 for문이 필요
* string의 indexOf(), Substring() 등의 함수 또는 첨자 연산자([])를 이용해서 구현 가능

### IndexOf()
```
    string message = "C# is very very fun!!";
    int index = message.IndexOf('v');   // 6을 반환
```
* char의 위치를 찾아서 색인을 반환 하는 함수    
    * 문자가 문자열에 여러 번 나타나면 가장 처음에 나타난 곳의 색인 반환
    * 찾는 문자가 문자열에 없다면 -1을 반환
* 다양한 버전의 IndexOf()함수가 존재함

### Substring()
```
    string nameMessage = "name: PopeMon";
    string name = nameMessage.Substring(6);    // "PopeMon" 반환
```
```
    <문자열 변수 이름>.Substring(<색인>);
```
* 지정된 문자 위치(<색인>)에서부터의 문자열을 반환하는 함수
* 마찬가지로 다양한 버전의 Substring() 함수가 존재함

### 첨자 연산자([])
```
    string HPMessage = "HP: 100";
    char ch = HPMessage[4];   // '1'
```
```
    <문자열 변수 이름>[<색인>];
```
* <색인> 위치에 있는 문자 하나를 반환

### 토큰을 읽어오 오는법
* 그러나 이 정도까지 정형화된 데이터를 쉽게 읽어오는 함수가 존재
* 그게 바로 문자열 토크나이저(tokenizer)

### 문자열 토크나이저 - Split()
```
    string text = "PopeMon, 1, 10000";
    string[] tokens = text.Split(',');   // {"PopeMon", "1", "10000"}
```
```
    <문자열 변수 이름>.Split(char);
```
* char 는 문자열을 쪼갤때 사용할 구분 문자
* 원본 문자열은 변경 없이 그대로 유지
* 쪼갠 문자열을 문자열 배열로 반환
* 여러 버전의 Split() 함수가 존재함

### 여러 개의 구분 문자가 문자열에 있는경우
```
    string text = "PopeMon,1:10000";

    char[] delimiters = {',',':'};
    string[] tokens = text.Split(delimiters);   // {"PopeMon", "1", "10000"}
```
```
    <문자열 변수 이름>.Split(char[]);
```
* 문자열 배열(char[])에 여러 개의 구분 문자를 대입

### 구분 문자 사이가 비어있다면?
* 문자열(text)를 쪼개면 빈 문자열이 나옴
```
    string text = "PopeMon,1,10000: ,10,10000:LopeMon,100,100";

    char[] delimiters = {',', ':'};
    string[] tokens = text.Split(delimiters);
    // {"PopeMon", "1", "10000", "", "10", "1000", "LopeMon", "100", "100"}
```

### 구분 문자 사이가 비어있다면? - 해결법
* **StringSplitOptions.RemoveEmptyEntries**를 사용
```
    string text = "PopeMon,1,10000: ,10,10000:LopeMon,100,100";

    char[] delimiters = {',', ':'};
    string[] tokens = text.Split(delimiters, StringSplitOption.RemoveEmpyEntries);
    // {"PopeMon", "1", "10000", "", "10", "1000", "LopeMon", "100", "100"}
```

### 불필요한 공백 지우기
```
    string firstName = "          Leon";
    string lastName = "Kim            ";
    string trimmedFirstNmae = firstName.Trim();   // "Leon"
    string trimmedLastName = lastName.Trim();    // "Kim"
```
```
    <문자열 변수 이름>.Trim();
```
* 문자열 앞뒤로 있는 공백을 없앤 후 문자열을 반환
* 원본 문자열은 변경 없이 그대로 유지

### 불필요한 공백 지우기 - TrimStart()
```
    string firstName = "   Leon";
    string lastName = "Kim    ";

    string trimmedFirstName = firstName.TrimStart();   // "Leon"
    string trimmedLastName = lastName.TrimStart();     // "Kim   "
```
```
    <문자열 변수 이름>.TrimStart();
```
* 문자열 시작에서 공백을 모두 제거 후 문자열을 반환
* 원본 문자열은 변경 없이 그대로 유지

### 불필요한 공백 지우기 - TrimEnd()
```
    string firstName = "    Leon";
    string lastName = "Kim    ";

    string trimmedFirstName = firstName.TrimEnd();   // "   Leon"
    string trimmedLastName = lastName.TrimEnd();     // "Kim"
```
```
    <문자열 변수 이름>.TrimEnd();
```
* 문자열 뒤에서 공백을 모두 제거 후 문자열을 반환
* 원본 문자열은 변경 없이 그대로 유지
