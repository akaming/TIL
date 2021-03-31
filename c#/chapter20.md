파일 입출력, 예외 처리, 파일 스트림
========

파일 입출력 기초 1
-----
### 파일이 필요한 이유
* 여태까지 만든 프로그램은 종료 시 모든 데이터가 날아갔음
* 변수는 프로그램 실행 중에 임시적으로 데이터를 저장하는 공간
* 나중에 프로그램을 다시 실행해도 원상태로 복두ㅚ려면 어딘가에 저장해야 함
* 파일은 이런 영구저장소 중 하나

### 텍스트 파일 저장하기 예
```
    // 파일 상단
    using System.IO;

    // 메인 함수 어딘가
    string[] names = {"Leon Kim", "Lulu Park", "Teemo Lee"};
    File.WriteAllLines(@"C:\CSharpExamples\13\students.txt", names);

    string[] message = "C# is the best programming\nlanguage for beginners";
    File.WriteAllText(@"C:\CSharpExamples\13\students.txt", message);
```
* 앞에 @을 쓰는 이유는 [텍스트포맷팅](https://github.com/akaming/TIL/blob/master/c%23/chapter06.md) 했을때 봤을거임
    * C:\CSharpExamples\13\students.txt 여기에서 이미 \ 이거가 들어가기 때문에 string에서 \는 이스케이프 문자로 씀 그렇기 때문에 이스케이프 문자가 아니라 그냥 string 이라는걸 알려주기 위해 앞에 @를 붙이는거임, @를 붙이기 싫으면 \\로 쓰면 됨(C:\\CSharpExamples\\13\\students.txt)

### 텍스트 파일 저장하기
```
    File.WriteAllLines(@"C:\CSharpExamples\13\students.txt", names);
    File.WriteAllLines(@"C:\CSharpExamples\13\students.txt", message;
```
* filePath에 여러 줄의 문자열을 쓰고 파일을 닫음
    ```
        File.WriteAllLines(string filePath, string[] lines);
    ```
* filePath에 한 줄의 문자열을 쓰고 파일을 닫음
    ```
        File.WriteAllText(string filePath, string text);
    ```
* 파일에 문자열을 쓰는 가장 쉬운 방법
* **이미 파일이 존재한다면 덮어씀**

### 텍스트 파일에 덧붙이기
```
    // 파일 상단
    using System.IO;

    // 메인 함수 어딘가
    string[] names = {"Leon Kim", "Lulu Park", "Teemo Lee"};
    File.AppendAllLines(@"C:\CSharpExamples\13\students.txt", names);

    string[] message = "C# is the best programming\nlanguage for beginners";
    File.AppendllText(@"C:\CSharpExamples\13\students.txt", message);
```

### 텍스트 파일 읽어오기 예
```
    string[] lines = File.ReadAllLines(@"C:\CSharpExamples\13\students.txt");
    foreach (var line in lines)
    {
        Console.WriteLine(line);
    }

    string text = File.ReadAllText(@"C:\CSharpExamples\13\students.txt");
    Console.WriteLine(text);
```

### 텍스트 파일 읽어 오기
```
    string[] lines = File.ReadAllLines(@"C:\CSharpExamples\13\students.txt");

    string text = File.ReadAllText(@"C:\CSharpExamples\13\students.txt");
```
* filePath를 열어 모든 줄의 문자열을 읽어 string[]으로 반환 후, 파일을 닫음
    ```
       string[] lines = File.ReadLines(string filePath); 
    ```
* filePath를 열어 모든 문자열을 읽어 string으로 반환 후, 파일을 닫음
    ```
        string text = File.ReadAllText(string filePath);
    ```
*  파일을 읽어오는 가장 쉬운 방법
* 전에 몬스터 CSV 데이터를 읽어와서 토큰화할 때도 이 방법을 썼음

<br>

파일 입출력 기초 2
-----
### 이진 파일 저장 및 읽기 예
```
    btye[] bytes1 = new byte[3] {12, 65, 3};
    File.WriteAllBytes(@"C:\CSharpExamples\13\binaryFile.txt", bytes1);

    byte[] bytes2 = File.ReadAllBytes(@"C:\CSharpExamples\13\binaryFile.txt");
    for (int i = 0; i < bytes2.Length; ++i)
    {
        Console.WriteLine(bytes2[i]);
    }
```
* notepad++ 나 notepad에서 확인을 하면 notepad++ 에서는 FFAETX, notepad 에서는 ♀Aᴸ 이렇게 나오는걸 확인 할 수 있다.
    * 그 이유는 이진수로 저장되었기 때문이다.

### 이진 파일 vs 텍스트 파일
* ASCII 코드에서 3과 '3'은 다르다
    * 3: ETX(텍스트의 끝)
    * 51: '3'
* 이진 파일은 ASCII 코드(숫자)를 저장
    * 텍스트를 저장한 것이 아님

### 그럼 이진 파일을 어떻게 확인하는가?
* 이진 파일이 제대로 저장되었는지 확인하려면 일반 텍스트 편집기가 아니라 16진수 편집기를 이용해야 함
    * mh-nexus(https://mh-nexus.de/en/hxd/) 헥스 에디터 또는 헥스 코드 에디터 라는 것을 사용하면 됨

### 간단한 이진 파일 저장 및 읽기
```
    File.WriteAllBytes(@"C:\CSharpExamples\13\binaryFile.txt", bytes);
    byte[] bytes = File.ReadAllBytes(@"C:\CSharpExamples\13\binaryFile.txt");
```
* 이진 파일인 filePath에 바이트 배열을 쓴 뒤, 파일을 닫음
```
    File.WriteAllBytes(string filePath, byte[] bytes);
```
* 이진 파일인 filePath로 부터 모든 바이트를 읽어 byte[]을 반환 후, 파일을 닫음
```
    byte[] bytes = File.ReadAllBtytes(string filePath);
```
* **bytep[]** 를 한 번에 저장 및 읽는 경우에 사용
* 하지만 이렇게 쓸 수 있는 경우는 제한적
* 이 외에 문자열이 아닌 값들을 이진 파일에 저장하고 싶을 때도 있음
    ```
        File.WriteInt(30);
        File.WriteFloat(floatValue);
    ```
    읽는것도 마찬가지
    ```
        int value = File.ReadInt(30);
    ```
* 이런 건 뒤에 BinaryReader와 BinaryWriter에서 보여줄 예정

<br>

파일 입출력 기초 3
-----
### 존재 하지 않는 파일을 읽으면?
* Exception(예외)이 남
    * 예전에 이런 예외가 나면 어떻게 처리하라고 했는가?
        * 예외가 날 수 있는 상황을 미리 검사하기

### 파일 존재 여부를 미리 판단하기 예
```
    string path = @"c:\unknown.txt";
    string[] lines;

    if (File.Exists(path))
    {
        lines = File.ReadAllLines(path);
    }
```

### 파일 존재 여부를 미리 판단하기
```
    string path = @"c:\unknown.txt";
    bool bFound = File.Exists(path);
```
```
    bool bFound = File.Exists(string filePath);
```
* 파일(filePath)이 있으면 true를 반환, 아니면 false를 반환
* **그러나 이것도 틀린방법 왜 일까?**

### File.Exists()가 충분치 않은 경우
```
    string path = @"c:\unknown.txt";
    string[] lines;

    if (File.Exists(path))
    {
        lines = File.ReadAllLines(path);
    }
```
* 컴퓨터가 if (File.Exists(path)) 이거를 읽고 다음 라인을 실행 할려고 할때 다른 프로그래머가 unknown.txt 을 삭제하게 되면 컴퓨터가 unknown.txt를 읽으려다 파일이 없으니 Exception을 던짐
    * 이런일이 실제로 있음
    * 이런 타이밍을 실제로 사람이 조절할수 없음

### 프로그래머가 완벽히 통제할 수 없는 예외
* 위와 같은 경우는 충분히 예측 가능한 예외적 상황
* 허나 프로그래머가 이 상황을 완벽히 방지할 수 없음
* 이런 경우에는 예외처리(exception handling)를 해줘야 함

<br>

예외(Exception) 1
-----
### 예외(exception)
* 특별한 처리를 요구하는 비정상적인 혹은 예외적인 조건
* 이것을 제대로 처리하지 않으면 정상적인 프로그램 실행 순서가 망가짐
* 선형적이었던 프로그래밍 실행 순서에 나타난 복병

### 예외적인 조건
* 충분히 예측 가능한 것
* 그러나 프로그래머가 미리 완벽히 방지할 수 없는것
* 방지는 못하나 예외적인 조건이 발생할 때 **대응하는 것은 가능**

### 사용 예: FileNotFoundException
```
    static void PrintLines(string path)
    {
        if (!File.Exists(path))
        {
            return;
        }
    
        string[] lines;
        try
        {
            lines = File.ReadAllLines(path);
        }
        catch (FileNotFoundException e)
        {
            Conosole.Error.WriteLine($"file not found: {e.Message}");
            return;
        }

        foreach (var line in lines)
        {
            // 프린트!
        }
    }
```

### try / catch
* try 블록 안에 있는 코드를 순서대로 실행하려고 시도
* 아무 문제 없이 try 블록의 마지막 줄까지 실행했으면 계속 코드 실행(catch 블록은 건너 뜀)
* 만약 예외가 발생하면 아직 실행되지 않은 try 블록 안의 모든 코드를 건너 뜀
    * 발생한 예외를 처리하는 catch 블록이 있다면 그 안에서 문제 해결
    * 없다면 그 예외는 호출자에게 던져 짐(throw)

<br>

예외 3: Exception 클래스
----
### 여러 개의 catch 블록
```
    string[] lines;
    try
    {
        lines = File.ReadAllLines(path);
    }
    catch (FileNotFoundException e)
    {
        Conosole.Error.WriteLine($"file not found: {e.Message}");
        return;
    }
    catch (ArgumentNullException e)
    {
        Conosole.Error.WriteLine($"file not argument: {e.Message}");
        return;
    }
    catch (Exception e)
    {
        Console.Error.WrtieLine($"exception: {e.Message}");
        return;
    }
```
* catch 블록은 여러 개가 있을 수도 있음
* 위에 있는 catch 블록부터 평가 함

### Exception 클래스
* 특정한 예외를 catch하고 싶다면 전용 예외 클래스를 사용함
    * 예) 
    ```
        catch (FileNotFoundException e)
        {
        }
    ```
    * **FileNotFoundException** 파일을 찾을 수 없을 때 발생하는 예외 클래스
     ```
        catch (ArgumentNullException e)
        {
        }
    ```
* 그 외 모든 예외를 **catch** 하고 싶다면 **Exception** 클래스를 사용
    * 예)
    ```
        catch(Exception e)
        {
        }
    ```
* 개별적인 예외를 처리하지 않고 처음부터 모든 예외를 처리하기 위해 **Exception**클래스를 쓰는 경우도 있음
    * 예)
    ```
        try
        {
            lines = File.ReadAllLines(path);
        }
        catch (Exception e)
        {
            Console.Error.WriteLine($"exception: {e.Message}");
            return;
        }
    ```
* **Exception** 클래스에 존재하는 모든 프로퍼티와 함수는 다른 예외 클래스에서도 사용가능

### 발생한 예외의 내용을 알고 싶다
```
    // try 블록 생략
    catch (FileNotFoundException e)
    {
        Conosle.Error.WriteLine($"file not found: {e.Message}");
        return;
    }
    catch (Exception e)
    {
        Console.Error.WriteLine($"exception: {e.Message}");
        return;
    }
```
```
    string Message;
```
* 멤버 변수
* 현재 발생한 예외가 왜 발생했는지를 설명

### 발생한 예외와 관련된 함수 호출의 정보
``` 
    catch (ArgumentNullException e)
    {
        Console.Error.WriteLine($"e.StackTrace");
        return;
    }
    catch (Exception e)
    {
        Console.Error.WriteLine($"e.StackTrace");
        return;
    }
```
```
    string StackTrace;
```
* 현재 발생한 예외의 호출 스택(call stack)을 보여줌
    * 호출 스택: 현재 실행중인 함수의 호출 정보를 기록한 자료 구조
    * 비주얼 스튜디오에서 디버깅할 때 볼 수 있음

### Open
```
    static void WriteByte(string path, byte b)
    {
        FileStream fs = null;
        try
        {
            fs = File.Open(path, FileMode.Open);
            fs.WriteByte(b);
        }
        catch (IOException e)
        {
            Console.Error.WriteLine($"{e.Message}");
            return;
        }
    }

    // 메인 함수 안
    string path = "USB에 있는 파일 경로";
    WriteByte(path, 67);
    WriteByte(path, 67);
```
* 이 코드를 예외를 발생 시킨다.

### 예외가 발생한 이유
* **WriteAllLines()** 이나 **WriteAllText()**과 다르게 Open()함수를 이용해 연 파일은 반드시 닫는 함수를 호출헤야 함
    * 이 함수는 뒤에서 더 자세히 다룰 예정
* 즉, 예외가 발생했든 안 했든 한 번 열린 파일은 반드시 닫아야 함

<br>

예외 4: Exception 클래스
----
### 그러면 닫으면 되는거 아닌가?
```
    static void WriteByte(string path, byte b)
    {
        FileStream fs = null;
        try
        {
            fs = File.Open(path, FileMode.Open);
            fs.WriteByte(b);
            fs.Close();
        }
        catch (IOException e)
        {
            Console.Error.WriteLine($"{e.Message}");
            fs.Close();
            return;
        }
    }

    // 메인 함수 안
    string path = "USB에 있는 파일 경로";
    WriteByte(path, 67);
    WriteByte(path, 67);
```
* 괜찮은거 같지만 아니다.

<br>

예외 5: Exception 클래스
----
### catch 블록에 없는 다른 예외가 발생한다면?
```
    static void WriteByte(string path, byte b)
    {
        FileStream fs = null;
        try
        {
            fs = File.Open(path, FileMode.Open);
            fs.WriteByte(b);
            fs.Close();
        }
        catch (IOException e)
        {
            Console.Error.WriteLine($"{e.Message}");
            fs.Close();
            return;
        }
    }

    // 메인 함수 안
    string path = "USB에 있는 파일 경로";
    WriteByte(path, 67);
    WriteByte(path, 67);
```
* try문안에 있는 fs.WriteByte(b); 이 시점에서 파일의 속성이 읽기 전용으로 바뀜 👉 UnauthorizedAccessException 예외 발생
* 그래서 그 뒤에 fs.Close(); 예외 발생으로 실행이 안됨
* catch 블록이 없기에 이 예외는 호출자에게 감
* 또 한번 들어갈 경우 다시 exception이 날수밖에 없음 왜냐면 안닫았기 때문에
* 이런 문제를 해결하기 위해서는 👇를 보자!

<br>

예외 6: finally 블록
-----
### catch 블록에 없는 다른 예외가 발생한다면?
* **finally**를 사용하면 됨

### finally 블록
* 예외 발생하든 안 하든 언제나 최종적으로 실행되는 코드 블록
* catch되지 않은 예외가 있어도 실행된다.
* 보통 시스템 리소스들을 해제(release)해줄 때 많이 씀
    * 시스템 리소스들은 GC가 치워주지 못함
    * 직접 해제해주지 않으면 메모리 누수라는 문제가 남
    * 파일 핸들이 열려 있기도 하고..

### 수정된 코드 다시보기
```
    static void WriteByte(string path, byte b)
    {
        FileStream fs = null;
        try
        {
            fs = File.Open(path, FileMode.Open);
            fs.WriteByte(b);
        }
        catch (IOException e)
        {
            Console.Error.WriteLine($"{e.Message}");
            return;
        }
        finally
        {
            if (fs != null)
            {
                fs.Close();
            }
        }
    }

    // 메인 함수 안
    string path = "USB에 있는 파일 경로";
    WriteByte(path, 67);
    WriteByte(path, 67);
```
*  fs.WriteByte(b); 이 시점에 파일의 속성이 읽기 전용으로 바뀜 👉 UnauthorizedAccessException 예외 발생
* catch 블록이 없기에 이 예외는 호출자에게 감 
* 그리고 또한번 들어왔을때는 그 파일이 있다면 제대로 실행이 된다
* 그래서 exception이 있던 없던간에 반드시 호출되는 시스템 리소스들은 finally 안에 있어야 함

<br>

예외 7: 커스텀 예외
----

### C#에서 자체 제공하는 예외 클래스
* [System.Exception](https://docs.microsoft.com/ko-kr/dotnet/api/system.exception?view=net-5.0)
* 다음은 C#에서 특정 연산을 하면 발생하는 일반적인 예외
    * [System.ArrayTypeMismatchException](https://docs.microsoft.com/ko-kr/dotnet/api/system.arraytypemismatchexception?view=net-5.0)
    * [System.DivideByZeroException](https://docs.microsoft.com/ko-kr/dotnet/api/system.dividebyzeroexception?view=net-5.0)
    * [System.IndexOutOfRangeException](https://docs.microsoft.com/ko-kr/dotnet/api/system.indexoutofrangeexception?view=net-5.0)
    * [System.InvalidCastException](https://docs.microsoft.com/ko-kr/dotnet/api/system.invalidcastexception?view=net-5.0)
    * [System.NullReferenceException](https://docs.microsoft.com/ko-kr/dotnet/api/system.nullreferenceexception?view=net-5.0)
    * [System.OutOfMemoryException](https://docs.microsoft.com/ko-kr/dotnet/api/system.outofmemoryexception?view=net-5.0)
    * [System.OverflowException](https://docs.microsoft.com/ko-kr/dotnet/api/system.overflowexception?view=net-5.0)
    * [System.StackOverflowException](https://docs.microsoft.com/ko-kr/dotnet/api/system.stackoverflowexception?view=net-5.0)
    * [System.TypeInitializationException](https://docs.microsoft.com/ko-kr/dotnet/api/system.typeinitializationexception?view=net-5.0)

### 커스텀 예외 클래스 만들기
1. 새로운 cs 파일을 만든다.
    * 예) NegativePriceException.cs
2. 클래스 옆에 " : Exception" 을 추가한다.
    * System.Exeption을 상송한다는 의미. 상속이 뭔지는 지금은 몰라도 됨
3. 생성자를 만든다.
    * 매개 변수는 string message
    * 생성자 선언 바로 밑에 " : base(message)"를 추가한다.
        → 상속과 관련된 코드. 지금은 그냥 메시지를 저장하기 위해 쓴다고만 기억
```
    // NegativePriceException.cs
    public class NegativePriceException : Exception
    {
        public NegativePriceException (string message)
            : base(message)
        {

        }
    }
```

### 예외를 던지는(throw) 방법
* **throw** 키워드를 사용해 커스텀 예외 개체를 던짐

### 커스텀 예외를 catch 블록에서 잡는법
```
    try
    {
    }
    catch (NegativePriceException e) // 커스텀 예외
    {
    }
```
* 시스템 예외를 잡을 때와 동일 함

<br>

예외 9: 올바른 예외처리 방법
----
### 예외처리는 훌륭한가?
* 예외처리 개념이 소개된건 매우 오래전
* 열심히 써본 건 지난 20년 정도
    * java의 성장
    * 프로그램의 안정성을 높여준다는 정말 믿고 싶던 약속
* 그러나 여전히 똑같은 불만과 피드백
    * 이유가 뭐든 간에 이건 사람이 쉽게 이해 못한다는 뜻
    * 따라서 실수도 많이 저지를 수밖에
* 예외가 실제 프로그램의 안정성을 높였다는 통계 및 연구결과 없음
* 오히려 그 반대 연구결과가 존재

### 예외상황과 프로그램 안전성
* 논문: Exceptional Situations and Program Reliability
    * Weimer, W; Necula, G.C. ACM Transactions on Programming Languages and Systems
    * 5백만 줄 이상의 java 코드를 분석한 결과 1300개의 예외처리 결함을 발견
    * **예외처리의 가장 큰 문제점**: 프로그래머가 쉽게 예측하기 어려운 코드실행 순서가 숨어있다
* 이건 처음부터 예외처리의 무분별한 사용을 경계하라고 훌륭한 소프트웨어 엔지니어들이 해왔던 말
* 한 20년간 다수결에 밀려 무시 받음
* 구체적으로 예외처리의 어떤 면에 이런 문제가 있는지는 다른 과목에서 배움
* 여기서는 그냥 올바르게 예외를 처리하는 베스트 프랙티스를 볼것임
    * 이것은 본 강상의 개인적인 의견
    * 반대하는 사람도 꽤 있음
    * 그러나 최소한 이 방법을 따르면 코드가 깔끔해지고 유지보수가 쉬워질 것

### 예외처리와 선조건
* 모든 예외 상황에 예외를 던지란 말을 하는 사람도 있음
* 하지만 많은 경우는 함수의 선조건에 의해 처리 가능
    * 잘못된 입력값을 절대 함수에 전달하지 말 것
    * 잘못된 입력값이 전달되는 코드를 작성했다면 Assert(로 개발 중에 잡을 것
    * 혹사라도 못 잡으면 배포(release)버전 실행 중에는 오작동 가능

### 함수의 선조건에 의해 처리 안되는 경우
* 프로그래머가 함수에 어떤 입력값이 들어올지 컨트롤할 수 없을 때
    1. 유저가 프로그램 실행 중에 직접 입력하는 값
    2. 외부에서 유입되는 데이터 (예: 웹 요청)
    3. 소스코드가 없는 외부 라이브러리를 이용하는 경우
    4. 내 코드가 라이브러리로 판매되는 경우

### 입력값 검증(input validation)
* 유저 입력을 그대로 내부 함수에 전달하지 말것
* 그 전에 유저 입력값이 유효한지 검증
    1. TryParse() 와 같은 함수 사용
    2. 유효하지 않다면 곧바로 유저에게 오류메시지를 보여줄 것
    3. 유효한 경우에만 내부함수로 전달
    ```
       double num1;
       if (!double.TryParse(Console.ReadLine(), out num1))
       {
           Console.WriteLine("Please enter integer only!");
       } 
       // num2는 동일해서 생략
       double result = Divide(num1, num2);
    ```
* 입력값의 완벽한 유효성 판단이 어려운 경우 내부 함수가 확인 후 bool 또는 오류코드 반환
    * 좋은 예 : TrySomething() 함수
    ```
        static bool TryOrder(int id)
        {
            if(/* DB에서 id가 존재하는지 확인 */)
            {
                return false;
            }

            return true;
        }
    ```
* 외부에서 들어오는 데이터에도 마찬가지

### 예외 vs 오류코드
* 다른 사람이 내 라이브러리를 잘못 호출할 때 예외를 던지는 것은 괜찮음
* 그 대신 오류코드 또는 오류 개체를 반환하는 것도 가능
    * bool TrySomething(out int result) 함수
    * EError TrySomething(out int result) 함수
    * Result< int > DoSomething() 함수
        * Result에는 int 결과 오류코드를 나타내는 열거형이 들어가 있음

### 예외는 경계에서 바로 처리한다
* 앞의 입력값 검증도 이 원칙을 따르는 것
* 다른 라이브러리를 호출할 때 예외가 나올 경우
    * 이 예외를 처리 안 하고 호출자에게 넘기면 과연 제대로 처리할까?
    * 호출자 자신이 처리해야 하는건 아닐까?
    * 제대로 처리할수나 있을까?

### 경계에서 처리한 코드
```
    bool TryPrint(string path)
    {
        if (!File.Exists(path))
        {
            return fasle;
        }

        string[] lines;

        try
        {
            lines = File.ReadAllLines(path);
        }
        cathc (Exception e)
        {
            Console.Error.WriteLine(e.Message);
            return false;
        }

        foreach (var line in lines)
        {
            Console.WriteLine(line);
        }

        return true;
```

<br>

파일 스트림 1
----
### 기존 파일 입출력 방법의 문제
```
    string[] lines = File.ReadAllLines(@"C:\CSharpExamples\13\students.txt");
    byte[] bytes = File.ReadAllBytes(@"C:\CSharpExamples\13\binaryFile.txt");
```
* 파일 컨텐츠를 전부 다 메 모리로 읽어온다
* 파일 용량이 엄청 크면? (예: 10GB)
    * 메모리에 부담
    * 한 번에 조금씩 읽어서 처리하는게 더 나음
    * 이 파일의 일부분만 읽고 싶으면 그 읽을 위치로 점프한 뒤 그 부분만 읽는게 좋음
* 이런걸 할 수 있는 게 파일 스트림

### 스트림(stream) 이란?
* 데이터의 입력이나 출력을 줄줄이 순서대로 한다고 해서
* 예: 네트워크 패킷
    * 한번에 오지 않고 주르륵 온다
* 예: 웹브라우저에서 이미지 뜰 때 한 번에 뜨지 않고 줄줄이 뜨는 경우
* 파일도 그렇게 볼 수 있다(파일 스트림)
* 메모리에 저장된 데이터도 그렇게 볼 수 있음(메모리 스트림)
* 스트림에 따라 원하는 위치로 읽기 쓰기 위치를 건너뛸 수도 있음

### 파일 스트림 읽기 예
```
    static void ReadByte(string path)
    {
        FileStream fs = File.Open(path, FileMode.Open);

        for (int i = 0; i < fs.Length; ++i)
        {
            int value = fs.ReadByte();
            Console.Write($"{value}");
        }
        
        fs.Close();
    }

    static void Main (string[] args)
    {
        string path = @"C:\CSharpExamples\13\students.txt";
        ReadByte(path);
    }
```

### File.Open()
```
    FileStream fs = File.Open(path, FileMode.Open);
```
```
    FileStream fs = File.Open(string path, FileMode mode);
```
* File.Open()은 파일 모드에 따라 파일을 연 뒤 FileStream을 반환

### FileStream 프로퍼티
```
    FileStream fs = File.Open(path, FileMode.Open);

    if(fs.CanRead) {}
    if(fs.CanWrite) {}
    if(fs.CanSeek) {}
```
```
    public bool CanSeek {get;}
    public bool CanWrite {get;}
    public bool CanRead {get;}
```
* CanRead
    * 스트림이 읽기를 지원하면 true를, 아니면 false를 반환
* CanWrite
    * 스트림이 쓰기를 지원하면 true를, 아니면 false를 반환
* CanSeek
    * 스트림이 탐색을 지원하면 true를, 아니면 false를 반환

### ReadByte()
```
    FileStream fs = File.Open(path, FileMode.Open);
    for (int i = 0; i < fs.Length; ++i)
    {
        int value = fs.ReadByte();
        Console.WriteLine($"{value}");
    }
```
```
    public int ReadByte();
```
* 파일로부터 한 바이트씩 읽어오는 함수
* 파일을 끝까지 다 읽으면 -1을 반환
    * 그래서 byte가 아니라 int가 반환형
* 파일을 모두 읽으려면 반복문을 돌려야함

### Read()
```
    FileStream fs = File.Open(path, FileMode.Open);

    byte[] values = new byte[fs.Length];
    int n = fs.Read(values, 3, 5);
```
```
    public int Read(byte[] array, int offset, int count);
```
* 스트림에서 count 만큼의 바이트를 읽어와서 array[offset]부터 array[offset + count - 1]에 집어넣는 함수

### ReadByte() / Read() 문제점
* 바이트 또는 바이트 배열만 읽을 수 있음
* 즉, 텍스트 파이롣, 이진 파일도 모두 바이트로 보임
* 텍스트 파일일 때는 string으로 저장하거나 읽어 오고 싶고 이진 파일 일때는 long으로 쓰고 싶은데 바이트로 읽어오면 하나하나 변환 하란 이야기 인가?
    * 좀 뒤에 해결법이 나옴

<br>

파일 스트림 2
----
### WriteByte()
```
    FileStream = File.Open(path, FileMode.OpenOrCreate);

    fs.WrtieByte(0x73);
```
```
    public void WriteByte(byte value);
```
* 파일에 한 바이트씩 쓰는 함수

### Write()
```
    FileStream fs = File.Open(path, FileMode.OpenCreate);

    btype[] bytes = new byte[] {73, 32, 108, 111, 118, 101, 32, 67, 35, 32};
    fs.Write(bytes, 0, 4);
```
```
    public void Write(byte[] array, int offset, int count);
```
* 스트림에 array[offset]부터 array[offset + count - 1]의 내용을 쓰는 함수

### Seek()
```
    FileStream fs = File.Open(path, FileMode.OpenOrCreate);

    byte[] bytes = new byte[] {73, 32, 108, 111, 118, 101, 32, 67, 35, 32};
    fs.Write(bytes, 0, 4); // {73, 32, 108, 111, 32, 75, 105, 109, 13, 10};
    fs.Seek(0, seekOrigin.Begin);
    fs.Write(bytes, 0, bytes.Length); // {73, 32, 108, 111, 118, 101, 32, 67, 35, 32};
```
```
    public long Seek(long offset, SeekOrigin origin);
```
* 현재 스트림의 위치를 origin + offset 으로 이동시키는 함수
* SeekOrigin
    * Begin : 스트림의 제일 처음 위치
    * Current : 스트림의 현재 위치
    * End : 스트림의 제일 마지막 위치

### Close()
```
    FileStream fs = File.Open(path, FileMode.OpenCreate);

    fs.Write(bytes, 0, 4);
    
    fs.Close();
```
```
    public void Close();
```
* 현재 열려 있는 스트림을 닫는 함수

### Close() 호출을 까먹으면?
* 언젠가는 GC가 지울 때 대신 Close()을 호출해 줌
    * 하지만 그게 언제 될지 모름
* 그전까지는 파일이여 열려있는 거기에 다른 코드가 다시 열려고 하면 오류가 날수도 있음
    * 하지만 까먹기 너무 쉬움
* 이것을 해결 하기 위해 **using 문**을 쓰면 해결 가능

<br>

파일 스트림 3
----
### using 문 예
```
    static voud Write(string path, byte[] bytes)
    {
        using (FileStream fs = File.Open(path, FileMode.Append))
        {
            fs.Write(bytes, 0, bytes.Length);
        }
    }

    static void Main (string[] args)
    {
        string path = @"C:\CSharpExamples\13\sample.txt";
        btye[] bytes = new byte[] {73, 32, 108, 111, 118, 101, 32, 67, 35, 32};
        Write(path, bytes);
        Write(path, bytes);
    }
```
### using 문
* 라이브러리를 사용하는 using과 다름 (동명이인)
    * using System; ← 이거 아님
    * using (FileStream fs = File.Open(path, FileMode.Append))
    * 내 코드에 FileStream을 치고 커서 올린 다음에 F12키를 누르고 Dispose 라는 함수가 있음, Dispose가 있는 경우는 using을 쓸수있음
* 시스템 리소스를 사용하는 클래스들은 Dispose()란 함수를 구현하는 경우가 있음
* 이떄 using 문을 사용하면 그 블록이 끝나는 데서 알아서 Dispose()를 호출 해줌, 이건 다시 Close()를 호출 해줌
* 아래의 조건이 하나라도 만족하면 무조건 using 문을 다시 사용하자
    1. 클래스 헤더에 IDisposable이란 게 보임
    2. 멤버 함수로 Dispose()가 있음
* 이해가 안된다면 "이 블록 안에서만 FileStream fs를 사용할테니 끝나면 알아서 지워줘" 라고 이해하면 될 듯

### 문자열을 텍스트에 쓰기
```
    string path = @"C:\CSharpExamples\13\diary.txt";
    string message = "C# is so fun!";

    using (var witer = new StreamWriter(File.Open(path, FileMode.OpenOrCreate)))
    {
        Writer.Write(message);
        Writer.WriteLine(message);
        Writer.WriteLine(message);
    }
```

### StreamWriter
* 텍스트를 스트림에 쉽게 저장할 수 있게 해주는 클래스
* 개체 생성하기
    ```
        var writer = new StreamWriter(File.Open(path, FileMode.OpenOrCreate));
    ```
    ```
        var <변수명> = new StreamWriter(Stream stream);
    ```
    * File.Open()은 반환 값으로 FileSteam 개체를 줌
        * 이 개체는 Stream 개체라 볼 수 있음(지금은 자세히 몰라도 됨)

### StreamWriter - 텍스트 쓰기
```
    writer.Write(message);
    writer.WriteLine(message);
```
```
    public void Write(string value);
    public void WrtieLine(string value);
```
* 파일에 텍스트를 쓰는 함수들
    * Console.WriteXXX(); 과 비슷

### 파일에서 텍스트 읽기
```
    string path = @"C:\CSharpExamples\13\diary.txt";
    using (var reader = new StreamReader(File.Open(path, FileMode.Open)))
    {
        string text = reader.ReadToEnd();
        Console.WriteLine(text);
    }
```

### StreamReader
* 스트림에서 텍스트를 쉽게 읽어올 수 있는 클래스
* 개체 생성하기
    ```
        var reader = new StreamReader(File.Open(path, FileMode.Open));
    ```
    ```
        var <변수명> = new StreamReader(Stream stream);
    ```
    * File.Open()은 반환 값으로 FileStream 개체를 줌
        * 이 개체는 Stream 개체라 볼 수 있음(지금은 자세히 몰라도 됨)

### StreamReader - 텍스트 읽기
```
    string line = reader.ReadLine();   // 한 줄 읽기
    string text = reader.ReadToEnd();  // 모든 텍스트 읽기
```
``` 
    public string ReadLine();
    public override string ReadToEnd();
```
* 파일에서 텍스트를 읽는 함수들
    * Console.ReadLine();과 비슷

### 이진 파일 쓰기
```
    string path =  @"C:\CSharpExamples\13\binaryFile.txt";
    using (var writer = new BinaryWriter(File.Open(path, FileMode.OpenOrCreate)))
    {
        writer.Write((short)30);
        writer.Write(1u);
        Writer.Write(3.14);
        Writer.Write("Hi");
    }
```

### BinaryWriter
* 테이터를 이진 스트림에 쉽게 쓸 수 있게 해주는 클래스
* 개체 생성하기
    ```
        var writer = new BinaryWriter(File.Open(path, FileMode.OpenOrCreate));
    ```
    ```
        var <변수명> = new BinaryWriter(Stream stream);
    ```
    * File.Open()은 반환 값으로 FileStream 개체를 줌
        * 이 개체는 Stream 개체라 볼 수 있음(지금은 자세히 몰라도 됨)

### BinaryWriter - 이진 데이터 쓰기
```
    writer.Write(3.14);
    writer.Write("Hi");
```
* 이진 스트림에 이진 데이터 쓰기
    * 수 많은 Write() 오버로드 함수가 있음

### 이진 파일 읽기
```
    string path =  @"C:\CSharpExamples\13\binaryFile.txt";
    using (var reader = new BinaryReader(File.Open(path, FileMode.Open)))
    {
        short shortVal = reader.ReadInt16();
        uint uintVal = reader.ReadUInt32();
        double doubleVal = reader.ReadDouble();
        string stringVal = reader.ReadString();

        Console.WriteLine($"{shortVal} {uintVal} {doubleVal} {stringVal}");
    }
```

### BinaryReader
* 이진 스트림을 쉽게 읽어올 수 있는 클래스
* 개체 생성하기
    ```
        var reader = new BinaryReader(File.Open(path, FileMode.Open));
    ```
    ```
        var <변수명> = new BinaryReader(Stream stream);
    ```
    * File.Open()은 반환값으로 FileStream 개체를 줌
        * 이 개체는 Stream 개체라 볼 수 있음(지금은 자세히 몰라도 됨)