#1 FLEXBOX
=============
* flexbox는 복수의 자식 요소인 flex item과 상위 부모 요소인 flex container로 구성됨
* flexbox를 만드는 방법은 간단
    * 정렬하려는 요소의 부모 요소에 다음과 같이 dispaly: flex 속성을 선언 
    * display: flex 속성이 적용된 요소는 flex container가 됨
    * flex container의 자식 요소는 flex item이 됨
    * flex contaner와 flex item은 부모 요소와 자식 요소를 한 세트로 사용하는 ui 와 il를 생각하면 됨
```
    .wrapper {
        display: flex;
    }
```

### 부모 속성(contaner)
#### flex-direction
* 플랙스 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향,역방향)을 지정
```
    /* 한 줄의 글을 작성하는 방향대로 */
    flex-direction: row;

    /* <row>처럼, 대신 역방향 */
    flex-direction: row-reverse;

    /* 글 여러 줄이 쌓이는 방향대로 */
    flex-direction: column;

    /* <column>처럼, 대신 역방향 */
    flex-direction: column-reverse;

    /* 전역 값 */
    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;
```


#### flex-wrap
* flex-item 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성
* 만약 영역 내에서 벗어나지 못하게 설정한다면, 동시에 요소의 방향 축을 결정할 수 있음
```
    /* 기본 설정값으로 flex-contaier 부모요소 영역을 벗어나더라도 flex-item 요소들을 한줄에 배치 */
    flex-wrap: nowrap;
    
    /* flex-item 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치, nowrap 속성과 마찬가지로 요소가 배치되는 시작점은 flex-direction에 의해 결정, 일반적으로 위에서 아래로 쌓이는 순서*/
    flex-wrap: wrap;
   
    /* wrap 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기준이 반대로 배치 */
    flex-wrap: wrap-reverse;
```

#### justify-content
* 플렉스 요소의 수평 방향 정렬 방식을 설정
```
    /* 기본 설정으로, 플렉스 요소는 플렉스 컨테이너의 앞쪽에서부터 배치됨 */
    justify-content: flex-start;

    /* 플렉스 요소는 플렉스 컨테이너의 뒤쪽에서부터 배치 */
    justify-content: flex-end;

    /* 플렉스 요소는 플렉스 컨테이너의 가운데에서부터 배치 */
    justify-content: center;

    /* 플렉스 요소는 요소들 사이에만 여유 공간을 두고 뱇; */
    justify-content: space-between;

    /* 플렉스 요소는 앞 뒤. 그리고 요소들 사이에도 모우 여유 공간을 두고 배치 */
    justify-content: space-around;

```

#### align-items
* 플렉스 요소의 수직 방향 정렬 방식을 설정
```
    /* 기본 설정으로, 플렉스 요소의 높이가 플렉스 컨테이너의 높이와 같게 변경된 뒤 연이어 배치 */
    align-items: stretch;
    align-items: flex-start; 
```


#### align-content

