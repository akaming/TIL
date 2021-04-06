파일과 디렉터리, 나만의 라이브러리, 직렬화
=====

파일
-----
### 파일
* 파일 입출력에 대해서는 저번에 배움
* 이번에는 파일 내용을 바꾸는 게 아니라 파일을 복사하고 지우고 옮기는 등의 일을 다룸
* **File** 클래스를 사용
    * 정적 클래스
    * 고로 모든 멤버 함수들도 '정적 메서드'

### 왜 정적함수 인가?
* 운영체제에서 파일 시스템은 하나임
    * 파일 시스템을 개체로 보기가 애매
* 그러나 파일을 열고나면 그건 각각의 개체
    * File.Open()이 개체를 반환하는 이유였음
* 파일/디렉터리 등에서 볼 대부분의 함수는 정적함수

### File.Exists()
```
    if(File.Exists(path)) {} //(path는 문자열)
```
```
    public static bool Exists(string path);
```
* 지정된 파일이 있는지 확인
* 전에도 파일 입출력할 때 잠시 봤었음
* 파일(path)이 있으면 true를, 없으면 fasle를 반환
    * 파일 접근 권한이 없어도 false를 반환
    * path가 null이거나, 길이가 0이거나, 올바른 경로가 아니어도 false
* 특별한 예외를 던지지 않는다
    * 예외처리를 최대한 안 하려고 만든 함수

### File.Move()
```
    File.Move(source, destination); //(source, destination 모두 문자열)
```
```
    public static void Move(string sourceFileName, string destFileName);
```
* 파일을 새로운 위치로 이동
    * 파일 이름을 바꿀수도
* sourceFileName
    * 이동할 파일의 이름
* destFileName
    * 파일에 대한 새 경로 및 이름
* 다양한 예외가 발생할 수 있음
    * IOException
        * 목적지에 같은 이름의 파일이 이미 있는경우
        * sourceFileName을 찾을 수 없는 경우
    * DirectoryNotFoundException 
        * sourceFileName나 destFileName의 경로가 유효하지 않을 경우
    * 그 외의 [예외](https://docs.microsoft.com/ko-kr/dotnet/api/system.io.file.move?view=net-5.0)는 직접 찾아볼 것

### is 키워드
```
    if(e is DirectoryNotFoundException) {}
```
```
    <expr> is <type>
```
* < expr >이 < type 형으로 변환 가능하면 true를 반환, 아니면 false를 반환
* 여기서 expr 은 일부 형식의 인스턴스로 평가되는 식
* type 은 expr 의 결과가 변환될 형식의 이름
* 런타임에 형 호환성(type compatibility)을 평가함
* 개체 인스턴스가 특정 자료형인지 확인할 때 사용

### File.Copy()
```
    // 방법 1
    File.Copy(source, destination);         // 목적지에 같은 이름의 파일이 있으면 예외 발생
    // 방법 2
    File.Copy(source, destination, true);   // 목적지에 같은 이름의 파일이 있으면 덮어씀
    File.Copy(source, destination, false);  // 목적지에 같은 이름의 파일이 있으면 예외 발생
```
* sourceFileName에서 destFileName으로 파일을 복사하는 함수
```
    public static void Copy(string sourceFileName, string dsetFileName);
```
* sourceFileName에서 destFileName으로 파일을 복사하되, 덮어쓰기 여부를 선택할 수 있는 함수
```
    public static void Copy(string sourceFileName, string destFileName, bool overwrite);
```
* 파일을 다른 곳에 복사하는 함수. 파일 이름도 바꿀 수도 있음
* 와일드카드(wildcard)문자(*,?)는 지원 안함
* File.Move()와 정말 비슷함. 복사한 뒤 원본을 지우냐 마냐의 차이일 뿐
    * 단, os에서 File,Move()가 훨씬 빠른 연산임
    * 예외도 File.Move()에서 나온것과 같음

<br>

디렉터리(Directory)
-----
### 디렉터리
* 디렉터리는 폴더
* 파일처럼 디렉터리도 만들거나 지울 수 있음
* 디렉터리 안에 들어있는 것들의 목록도 구할 수 있음
* 디렉터리에 무엇이 들어았나?
    * 파일
    * 또 다른 하위 디렉터리들 (예전에 재귀 함수 배울때 잠시 언급했었음)

### Directory.Exists()
```
    bool bDirecotry = Directory.Exists(path);    //(path는 문자열)
```
```
    public static bool Exists(string path);
```
* 디렉터리의 존재유무
* 주어진 경로(path)가 디렉터리이면 true를, 아니면 false를 반환하는 함수
* 역시 별다른 예외를 던지지 않는다
    * File.Exists()와 마찬가지

### Directory.Move()
```
    Directory.Move(source, destination);    //(soruce, destination는 문자열)
```
```
    public static void Move(string sourceDirName, string destDirName);
```
* 파일 또는 디렉터리와 그 내용을 새 위치로 이동
* sourceDirName
    * 이동할 파일 또는 디렉터리의 경로
* destDirName
    * sourceDirName의 새 위치에 대한 경로

### Directory.CreatDirectory()
```
    Directory.CreatDirectory(path);     //(path는 문자열)
```
```
    public static DirectoryInfo CreatDirectory(string path);
```
* 지정된 경로에 디렉터리를 만듦
* 모든 중간 폴더까지 만듦
    * 예: C:\POCU 폴더가 비어 있는 상황에서 C:\POCU\1\2\3 이란 폴더를 만들려고 C:\POCU\1,C:\POCU\1\2,C:\POCU\1\2\3 디렉터리를 다 만듦
* 이미 존재하는 디렉터리를 만들려고 하면?
    * 아무런 일도 일어나지 않음

### Directory.Delete()
```
    Directory.Delete(path);
    Directory.Delete(path, fasle);
    Directory.Delete(path, true);
```
* 빈 디렉터리(path)를 지우는 함수
```
    public static void Delete(string path);
```
* recursive가 true면 디렉터리(path)와 그 하위 모든것을 지우는 함수
```
    public static void Delete(string path, bool recursive);
```
* 지정한 디렉터리와 선택적으로 하위 디렉터리를 삭제
* Delete(String)
    * 지정된 경로에서 빈 디렉터리를 삭제
* Delete(String, Boolean)
    * 지정된 디렉터리와 해당 디렉터리의 하위 디렉터리 및 파일을 삭제

### [Directory.GetDirectories()](https://docs.microsoft.com/ko-kr/dotnet/api/system.io.directory.getdirectories?view=net-5.0)
```
    var directories = Directory.GetDirectories(path);
```
```
    public static string[] GetDirectories(string path);
```
* 디렉터리(path)안에 있는 모든 하위 디렉터리들의 절대 경로를 문자열 배열로 반환하는 함수
    * 단 하위 디렉터리 안의 디렉터리는 포함 안함
* 여기서는 두 개의 오버로딩 함수만 소개
    * 다른 오버로딩 함수는 직접 찾아볼 것

<br>

```
    var directories2 = Directory.GetDirectories(path, "p*");
```
```
    public static string[] GetDirectories(string path, string searchPattern);
```
* 디렉터리(path) 안에서 검색 패턴(seartchPattern)에 맞는 모든 하위 디렉터리의 절대 경로를 문자열 배열로 반환하는 함수
* 검색 패턴(searchPattenrn)
    * 와일드카드(wildcard) 문자를 일반 문자와 조합 가능. 단, 정규식(regular expression)은 지원 안함
* 지원하는 와일드카드 문자

|*|?|
|:--:|:--:|
|0개 이상의 문자열로 치환<br>**ap*** :ap**ple**, ap**plication**, ap**ply** <br>**h*r**: h**e**r, h**eeeeee**r|1개의 문자로 치환<br>**ap?**: ap**p**,ap**a**<br>**h?r**:h**e**r,h**a**r|

### Directory.GetFiles()
```
    var files1 = Directory.GetFiles(path);
    var files2 = Directory.GetFiles(path, "s*");
```
* 디렉터리(path)안에 있는 모든 파일의절대 경로를 문자열 배열로 반환하는 함수
``` 
    public static string[] GetFiles(string path);
```
* 디렉터리(path)안에서 검색 패턴(searchPattern)에 맞는 모든 파일의 절대 경로를 문자열 배열로 반환하는 함수
```
    public static string[] GetFiles(string path, string searchPattern);
```
* 지정된 조건을 충족하는 파일 이름을 반환
* 여기서는 세 개의 오버로딩 함수만 소개
    * 남은 오버로딩 함수는 직접 찾아볼 것

<br>

```
    var fiels = Directory.GetFiles(path, "*", SearchOption.AllDirectories);
```
```
    public static string[] GetFiles(string path, string seartchPattern, SearchOption searchOption);
```
* 디렉터리 안에서 검색 패턴(searchPattern)과 검색조건(searchOption)에 맞는 모든 파일의 절대 경로를 문자열 배열로 반환
* 검색조건(SearchOption): enum 형
    * TopDirectoryOnly: 현재 디렉터리에서만 검색
    * AllDirectories: 현재 디렉터리 하위에 있는 모든 디렉터리들을 검색

<br>

### Directory.Copy()
* Directory.Copy()은 없음
* for문을 돌려가며 해야함
* 재귀함수로 만드릭도 좋을듯

<br>

경로(Path) 1
-----
### 경로(Path)
* 프로그래밍을 하다 보면 다음의 일들을 자주 함
    * 경로를 합침
    * 경로 중에 마지막 폴더 이름만 가져오기 또는 바꾸기
    * 경로 중에 파일 확장자 바꾸기
    * 경로 중에 파일 이름만 가져오기
    * 경로 중간에 있는 폴더 이름 바꾸기
* 생각보다 실수가 많이 있을 수 있는 부분 이럴때 쉽게 사용할 수 있는 유틸리티 클래스가 System.IO.Path 가 있음

### 용어정리
* 디렉터리 경로
    * c:\POCU\COMP1500
* 파일 경로
    * c:\POCU\COMP1500\some.txt
* 절대 경로(absoulte path) 혹은 전체경로(full path)
    * c:\POCU\COMP1500\some.txt
* 상대경로(relative path)
    * ..\COMP1500\some.txt
* 확장자
    * txt
* 디렉터리 이름
    * COMP1500

### 문제점 1: 운영체제마다 경로 구분자가 다름
* 윈도우 : c:\POCU\COMP1500\Test
* 리눅스 : /home/POCU/COMP1500/Test

### Path.DirectorySeparatorChar
```
    string fullPath = rootPath + Path.DirectorySeparatorChar + relpath;
```
```
    public static readonly char DirectorySeparatorChar;
```
* 운영체제에 올바른 경로 식별자를 제공하는 프로퍼티
```
    string rootPath = "C:\\POCU";
    string relpath = "COMP1500";
    //fullPath = "C:\\POCU\\COMP1500"
    string fullPath = rootPath + Path.DirectorySeparatorChar + relpath;
```

### 문제점 2: 경로를 합칠 때 구문 문자 중복/누락
```
    string dir1 = "C:\\POCU";
    string dir2 = "C:\\POCU\\";
    stirng relPath = "COMP1500";
```
```
    string path1 = dir1 + relPath;   // "C:\\POCUCOMP1500"
    string path2 = dir2 + relPath;   // "C:\\POCU\\COMP1500"

    string path3 = dir1 + Path.DirectorySeparatorChar + relPath;  // "C:\\POCU\\COMP1500"
    string path4 = dir2 + Path.DirectorySeparatorChar + relPath;  // "C:\\POCU\\\\COMP1500"
```
* C:\\POCUCOMP1500 이렇게나 C:\\POCU\\\\COMP1500 이렇게 나옴(잘못된거)

### Path.Combine()
```
    // 방법1
    string dir1 = "C:\\POCU";
    string relPath = "COMP1500";
    string path1 = Path.Combine(dir1, relPath);   // "C:\\POCU\\COMP1500"

    // 방법2
    string[] paths = { "C:\\POCU", "COMP1500", "201905" };  //"C:\\POCU\\COMP1500\\201905"
    string path2 = Path.Combine(paths);
```
```
    public static string Combine(string path1, string path2);
    public static string Combine(params string[] paths);
```
* 매개변수로 들어온 문자열들을 합쳐서 하나의 경로로 만들어 줌
* 다른 오버로드 함수는 스스로 찾아볼 것

### 문제점 3: 파일 또는 폴더 이름만 가져오기 불편
```
    string fullPath = @"c:\POCU\COMP1500\README.txt"; 
    // 👆 위에 파일 이름만 가져올려면 👇처럼 해야되는 귀찮음이 있음
    int index = fullPath.LastIndexOf(Path.DirectorySepartorChar);
    string fileName = fullPath.Substring(indx + 1);   //"README.txt"

    // 확장자만 떼고 파일명만 가져오고 싶으면 👇처럼 해야됨 (이것도 귀찮음)
    int index2 = fileName1.LastIndexOf('.');  //6
    string fileName2 = fullPath.Substring(index1 + 1, index2);   //"README"
```

### GetFileName() / GetFileNameWithoutExtension()
```
    string fullPath = @"c:\POCU\COMP1500\README.txt";
    string fileName = Path.GetFileName(fullPath);  // "README.txt"
    string fileNameWithoutExtension = Path.GetFileNameWithoutExtension(fullPath);    // "README"
```
```
    public static string GetFileName(string path);
    public static string GetFileNameWithoutExtension(string path);
```
* 경로에서 파일 이름을 추출하는 함수


### GetDirectoryName()
```
    string fullPath = @"c:\POCU\COMP1500\README.txt";
    string directoryName = Path.GetDirectoryName(fullPath);   // "c:\POCU\COMP1500"
```
```
    public static string GetDirectoryName(string path);
```
* 경로에서 디렉터리만 추출하는 함수

### 문제점 4: 확장자 관리도 마찬가지 문제 
```
    string fullPath = @"c:\POCU\COMP1500\README.txt";
    int index = fullPath.LastInedxOf('.');
    string extension = fullPath.substring(inex + 1);
    fullPath = fullPath.Replace(extension, "json");  // "c:\\POCU\\COMP1500\\README.json"
```

### GetExtension() / ChangeExtension()
```
    string fullPath = @"c:\POCU\COMP1500\README.txt";
    string extension = Path.GetExtension(fullPath);     // "txt"
    fullPath = Path.ChangeExtension(fullPath, "json");  // "c:\\POCU\\COMP1500\\README.json"
```
* 경로(path)에서 확장자를 얻어오는 함수
```
    public static string GetExtension(string path);
```
* 경로(path)에서 확장자를 바꾸는 함수
```
    public static string ChangExtension(string path, string extension);
```

### 문제점 5 : 절대 경로 구하기
```
    // 두 문자열을 이용해서 절대 경로를 구하시오
    string path1 = "c:\\POCU\\COMP1500\\";
    string path2 = "..\\COMP3200";
    
    원하는 결과: "c:\\POCU\\COMP3200"
```
* 이거를 프로그램으로 작성할려면 머리가 아프고 귀찮음

### Path.GetFullPath()
```
    string path1 = "..\\COMP3200";
    string path2 = "c:\\POCU\\COMP1500..\\COMP3200";   // 많이쓰는경우

    // "C:\\CSharpExamples\\14\\PathExample\\bin\\Debug\\COMP3200"
    string fullPath1 = Path.GetFullPath(path1);
    string fullPath2 = Path.GetFullPath(path2);   // "C:\\POCU\\COMP3200"
```
* 경로(path)의 절대 경로를 반환하는 함수

### 문제점 6: 상대 경로 구하기
```
    // 현재 위치에서 path의 상대 경로를 구하시오
    현재위치: "c:\\POCU\\COMP3200\\201905\\Final";
    string path = "c:\\POCU\\COMP1500\\201905\\Midterm";
```

### Path.GetRelativePath()
```
    string path1 = "c:\\POCU\\COMP3200\\201905\\Final" ;
    string path2 = "c:\\POCU\\COMP1500\\201905\\Midterm";

    // "..\\..\\..\\COMP1500\\201905\\Midterm"
    string fullPath = Path.GetRelativePath(path1, path2);
```
```
    public static string GetRelativePath(string relativeTo, string path);
```
* 한 경로(relativeTo)에서 다른 경로(path)까지의 상대 경로를 반환하는 함수
* relativeTo
    * 결과 경로의 기준이 되는 소스 경로, 이 경로는 항상 디렉터리로 간주
* path
    * 대상 경로


<br>

나만의 라이브러리(Library) 만들기 1
-----

