switch 문
=============

|if/else 문이 더 좋은 경우|switch 문이 더 좋은 경우|
|------------------------|-----------------------|
|수학 성적이 100점 일 때<br>수학 성적이 90점 이상 100점 미만일 때<br>수학 성적이 80점 이상 90점 미만일 때|성적이 A일 때<br>성적이 B일 때<br>성적이 C일 때|
|> >= < <= !=|==|

### switch 문이란?
* 매치 표현식의 결과 값에 따라 실행할 구문을 선택
```
    switch(매치 표현식)
    {
        case <상수 레벨1>:
            매치 표현식의 반환값이 상수 레벨1과 일치할 때 실행 하는 구문
            break;
        case <상수 레벨2>:
            매치 표현식의 반환값이 상수 레벨2과 일치할 때 실행 하는 구문
            break;
        case <상수 레벨n>:
            매치 표현식의 반환값이 상수 레벨n과 일치할 때 실행 하는 구문
            break;
        default;
            매치 표현식의 반환값이 위의 상수 라벨과 하나도 일치하지 않을 때 실행하는 구문
            break;
    }
```
### switch 문이 어떻게 동작하는가?
```
    int menu = 2;

    switch(menu)
    {
        case 1:
            Console.WriteLine("You selected a cheese burger");
            break;
        case 2:
            Console.WriteLine("You selected a double cheese burger");
            break;
        default;
            Console.WriteLine("Please enter a correct number");
            break;
    }
```

<br>

switch 문을 탈출하라
------
* break;
    * switch 문을 빠져나갈 때 사용
* 모든 case 구문 다음에는 break 구문을 넣어야함
    * 없으면 컴파일 오류
<br>

default 구문 그리고 case에 대해 좀 더!
------
### default 구문
* 매치 표현식의 반환값과 일치하는 case 구문이 없을 경우 실행
* 때로는 이렇게 잘못된/예상하지 못한 반환값을 잡아야 할 때가 있음 -> 이 경우 어서트(assert)를 사용함 (어서트는 나중에 배움)
* default 구문의 끝에도 반든시 break 구문을 넣을 것!

### case에서 사용할 수 있는 상수형
* int **[기본]**
* long
* char // char 역시 정수형 int가 된다는건 char도 가능하다는 이야기
* bool
* string **(C# 전용)**
* 부동소수점형들은 사용 불가

### case 여러 개를 묶을 수도 있음
```
    int menu = 2;

    switch(menu)
    {
        case 1:
            Console.WriteLine("You selected a cheese burger");
            break;
        case 2:
            Console.WriteLine("You selected a double cheese burger");
            break;
        case 3:
        case 4:
            Console.WriteLine("You selected a shrimp burger");
            break;
        default;
            Console.WriteLine("Please enter a correct number");
            break;
    }
```