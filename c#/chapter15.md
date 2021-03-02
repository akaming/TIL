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