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