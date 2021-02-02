반복문
=============

반복문의 필요성
----
* 배열을 쓰는것만으로는 중복 코드를 해결할 수 없음

### 반복문
* 총 세 개의 반복문이 있음
    * for 문
    * while 문
    * do...while 문
* 세 개 모두 호환이 됨
* 하지만 각각의 반복문을 배우고 나면 언제 어떤 반복문을 쓸 지 합리적으로 판단 가능

<br>

for 반복문
----

|기본형|실생활|
|----|-----|
|for(초기화 코드; 반복 조건식; 증감문)<br>{<br>반복할 코드<br>}|for(1부터; 30까지; 하나씩 증가)<br>{<br>팔굽혀펴기<br>}|

* 특정 코드를 **정해진 횟수**만큼 **반복**하는 구문

### for 문을 어떻게 읽어야 할까?
```
    예시)

    int[] ages = new int[3];

    for (int i = 0; i < 3; i++)
    {
        ages[i] = int.Parse(Console.ReadLine());
    }
```
1. **초기화 코드**(int i = 0)는 **딱 한 번** 실행
    * 정수형 변수 i를 0으로 초기화
2. **반복 조건식**(i < 3)은 반복문을 계속 실행할지 판단. 조건식이 참일 동안 중괄호 사이의 코드를 실행
    * i가 3보다 작은지 판단(**반복 조건식**)
    * 참이면, ages[i]에 키보드 입력을 받음(**반복할 코드** ages[i] = int.Parse(Console.ReadLine());)
3. 반복할 코드를 실행 후 **증감문**(i++)을 실행
    * i를 1만큼 증가

<br>

while 반복문
----

|기본형|실생활|
|----|-----|
|while(조건식)<br>{<br>조건을 만족할 동안 반복할 코드<br>}|while(다이아몬드 티어가 될 때까지){<br>랭크 게임을 한다<br>}|

* 특정한 조건을 만족하는 동안 코드를 반복
    * 반복할 횟수가 꼭 있지는 않음
    * 원한다면 무한 반복(infinite loop)도 가능

### while 문을 어떻게 읽어야 할까?
```
    int[] ages = new int[3];
    int count = 0;

    while (count < 3)
    {
        ages[count] = int.Parse(Console.ReadLine());

        ++count;
    }
```
1. **조건식**(count < 3)을 확인
    * 조건식이 참이면 **반복할 코드**(ages[count] = int.Parse(Console.ReadLine());

        ++count;)를 실행
2. 다시 1번으로 돌아가 반복

### 무한히 도는 while 문
* while 문은 조건이 만족하는 동안 돈다고 했음
* 그럼 while 문의 조건이 항상 참이면 무한히 돌겠지?
    ```
        while (true)
        {
            // 멋진 코드가 여기에!
        }
    ```
* 한동안 나쁜 습관이라고 불렸던 방법 (break 까먹으면 코드가 무한루프를 돌기 때문에 )
* 하지만 한참을 써보니깐 while(true)를 안쓰고 쓸려면 이상항 코드가 되기 때문에 while (true) 을 쓰게 되었음

<br>

do-while 문
----
* while 문과 거의 유사함
* do 구문의 중괄호 코드 블럭을 **반드시 한 번은 실행**
* 하드웨어 가면은 이거랑 비슷
```
    do
    {
        // 최소 한 번은 반드시 실행되는 코드
        // 한 번 실행 후에는 조건식이 참일 때만 실행
    } while(조건식);
```

### do-while 문을 어떻게 읽어야 할까?
```
    int[] eges = new int[3];
    int count = 0;

    do
    {
        ages[count] = int.Parse(Console.ReadLine());

        ++count;
    } while (count < 3);
```
1. **반복할 코드** (ages[count] = int.Parse(Console.ReadLine());

        ++count;)를 먼저 실행
2. **조건식**(count < 3)이 참이면 반복할 코드를 실행
3. 다시 **2번**으로 돌아가 **반복**

<br>

for 문 vs while 문
-----
* for 문이 더 좋을 때
    * 반복문이 시작하는 시점에 범위가 정해져 있을 때
    * 배열의 모든 요소를 훑을 때
* while 문이 더 좋을 때
    * 반복문을 종료하는 시점이 반복문 실행 도중에 결정될 때

<br>

while 문 vs do-while 문
-----

|while 문|do-while 문|
|--------|----------|
|while (조건식)<br>{<br>//코드 블럭<br>}|do<br>{<br>//코드 블럭<br>} while (조건식);|

* while 문
    * 코드 블럭이 한 번도 실행 안 될 수 있음
* do-while 문
    * 코드 블럭이 무조건 한 번은 실행 됨
* do-while 문을 자주 쓰지는 않음
* 대신 이렇게 자주 함
```
    while (true)
    {
        if (조건식)
        {
            break;
        }
    }
```