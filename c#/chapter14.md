열거형(enum) 및 어서트(assert)
========

열거형
-----
### 추억의 머드게임
```
    static void Main(string[] args)
    {
        const int NORTH = 1;
        const int SOUTH = 2;
        const int EAST = 3;
        const int WEST = 4;

        int direction;
        int x = 0;
        int y = 0;
    }
```
```
    while(true)
    {
        Console.WriteLine($"your location: ({x}, {y})");
        Conosle.WriteLine("What do you want go? (N:1, S:2, E:3, W:4)");
        direction = int.Parse(Console.ReadLine());
        switch (direction)
        {
            case NORTH;
                y += 1;
                break;
            case SOUTH;
                y += 1;
                break;
            case EAST;
                y += 1;
                break;
            case WEST;
                y += 1;
                break;
            default;
                Console.WriteLine($"You enter wrong direction!: {direction}");
                break;
        }
    }
```
* 이렇게 쓰면은 코드는 돌지만 나중에 다른 개발자가 모르고 case WEST; 밑에다
```
    case 5;
        y *= 10;
        x *= 20;
        break;
```
라는 코드를 추가 하게 되면 문제가 발생할수 있고 int형이면 switch문이 무조건 동작 하기 때문에 실수로 잘못 코드를 넣는순간 컴퓨터 입장에서는 int형 이름 있는 상수나 int형 이름없는 상수나 결국 int형 상수 라고 인식을 해서 코드가 잘못된지 모른다. 그렇기 때문에 이런 오류를 잡기 위해서는 **열거형**을 이용하면 됨

### 열거형(Enumerated Type)
* 정수형 상수의 집합
* 각 원소마다 고유의 이름을 가짐
* 집합 역시 고유의 이름을 가짐
* enum은 변수로 사용 가능

### 열거형을 이용해 수정한 프로그램
```
    enum EDirection
    {
        North,
        South,
        East,
        West
    };

    static void Main(string[] args)
    {
        EDirection direction;
        int x = 0;
        int y = 0;
    }
```
```
    while(true)
    {
        Console.WriteLine($"your location: ({x}, {y})");
        Conosle.WriteLine("What do you want go? (N:0, S:1, E:2, W:3)");
        direction = (EDirection)int.Parse(Console.ReadLine());
        switch (direction)
        {
            case EDirection.North;
                y += 1;
                break;
            case EDirection.South;
                y += 1;
                break;
            case EDirection.East;
                y += 1;
                break;
            case EDirection.West;
                y += 1;
                break;
            default;
                Console.WriteLine($"You enter wrong direction!: {direction}");
                break;
        }
    }
```

<br>

열거형 2
-----
### 열거형 정의(기본형)
```
class Program
{
    enum EDirection
    {
        North,    // 0
        South,    // 1
        East,     // 2
        West      // 3
    }
}
```
```
    enum <이름>
    {
        <원소1>,
        <원소2>,
        ...,
        <원소n>
    }
```
* 정의는 함수 밖에서 함
* 첫 번째 원소의 기본값은 0
* 아무 값도 대입해주지 않으면 원소의 값은 1씩 증가

### 열거형 정의(원소 값 직접 정의)
```
    enum EDirection
    {
        North = 5,    
        South = 10,    
        East = 15,     
        West = East + 10
    }
```
```
     enum EDirection
    {
        North = 5,    
        South,   // 6    
        East,    // 7
        West     // 8
    }
```
* 각 원소에 원하는 값을 대입 가능
    * 상수
    * 혹은 계산식

### 열거형은 부동소수점 안됨
```
class Program
{
    enum EDirection
    {
        North = 5.5,   // 이렇게 쓸경우 오류
        South,
        East,
        West
    };

    static void Main(string[] args)
    {

    }
}
```

### 열거형 변수 정의
```
enum EDirection
{
    North,
    South,
    East,
    West
};

// 메인 함수
EDirection direction; // EDirection.North
```
```
    enum EDirection
    {
        North = -2,
        South,
        East,
        West
    }
```
* 대입 없이 변수를 정의만 하먄 **값이 0인 원소가 기본**으로 들어감

### 열거형 변수 정의 및 대입
```
enum EDirection
{
    North,
    South,
    East,
    West
};
```
```
enum ESex
{
    Female,
    Male
}
```
```
// 메인 함수
EDirection direction1;
EDirection direction2 = EDirection.East;
```
```
<열거형 이름><변수명> = <열거형 이름>.<열거형 원소>;
```
* 열거형 변수에는 해당 열거형의 원소만 대입 가능
```
    EDirection direction1 = EDirection.East; //OK
    EDirection direction1 = ESex.Male; // 컴파일 오류
    EDirection direction1 = 1; // 컴파일 오류
```

### EDirection에 없는 값을 case에 넣으면?
```
    enum EDirection
    {
        North,
        South,
        East,
        West
    };

    static void Main(string[] args)
    {
        EDirection direction;
        int x = 0;
        int y = 0;
    }
```
```
    while(true)
    {
        Console.WriteLine($"your location: ({x}, {y})");
        Conosle.WriteLine("What do you want go? (N:0, S:1, E:2, W:3)");
        direction = (EDirection)int.Parse(Console.ReadLine());
        switch (direction)
        {
            case EDirection.North;
                y += 1;
                break;
            case EDirection.South;
                y += 1;
                break;
            case EDirection.East;
                y += 1;
                break;
            case EDirection.West;
                y += 1;
                break;
            case 10;
                x *= 10;
                break;
            default;
                Console.WriteLine($"You enter wrong direction!: {direction}");
                break;
        }
    }
```
* 에러가 뜬다
    * 열거형으로 안했을경우에는 에러가 안떠서 오류를 잡기 힘들었는데 열거형으로 하였기 때문에 오류를 쉽게 잡을 수 있다.

<br>

열거형 3
-----
### enum을 쓰면 좋은 점
* 코드가 읽기 좋아짐
* 다른 값이 들어가면 컴파일 오류 발생 -> 문제 발생 여지를 사전예방
* 함수 매개변수로 쓰이면 함수가 요구하는 인자형을 빨리 알 수 있음 -> 함수에 잘못된 값이 넘어가는 걸 예방