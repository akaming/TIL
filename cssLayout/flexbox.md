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
* display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content
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
   
    /* 플렉스 컨테이너 위쪽에 배치 */
    align-items: flex-start; 
   
    /* 플렉스 컨테이너의 아래쪽에 배치 */
    align-items: flex-end;
   
    /* 플렉스 컨테이너의 가운데 배치 */ 
    align-items: center; 
   
    /* 플렉스 컨테이너의 기준선(baseline)에 배치 */
    align-items: baseline; 
```


#### align-content
* flex-wrap 속성의 동작을 변
*  align-items 속성과 비슷한 동작을 하지만, 플렉스 요소를 정렬하는 대신에 플렉스 라인을 정렬
```
    /* 기본 설정으로, 플렉스 라인의 높이가 남는 공간을 전부 차지 */
    align-content: stretch;

    /* 플렉스 컨테이너의 앞쪽에 뭉치게 됨 */
    align-content: flexx-start;

    /* 플렉스 컨테이너의 뒤쪽에 뭉치게 됨 */
    align-content: flex-end;

    /*플렉스 컨테이너의 가운데에 뭉치게 됨*/
    align-content: center;

    /*플렉스 컨테이너에 고르게 분포됨*/
    align-content: sapce-between;
    
    /*플렉스 컨테이너에 고르게 분포됨. 단, 양쪽 끝에 약간의 공간을 남겨둠*/
    align-content: space-around;
```
<br>

### 자식 속성(item)
* order, flex-grow, flex-shrink, flex-basis, flex, align-self
#### flex

#### flex-grow
* 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성
* flex-grow에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되며 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 됨
* 기본값은 0
* flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을 flex-grow 에 지정된 숫자의 비율로 나누어 가진다고 생각하면 됨
* 보통 flex-grow를 사용할땐, flex-shrink, flex-basis 속성을 함께 사용
```
    /* 1:2:1의 비율로 세팅할 경우 */
    .item:nth-child(1) { flex-grow: 1; }
    .item:nth-child(2) { flex-grow: 2; }
    .item:nth-child(3) { flex-grow: 1; }
```
#### flex-shrink
* flex-grow와 쌍을 이루는 속성
* 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정
* 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아짐
* 기본값은 1
* flex-shrink를 0으로 세팅하면 크기가 flex-basis 보다 작아지지 않기 때문에 고정폭의 컬럼을 쉽게 만들 수 있음
```
    예시) 

    .container {
        display: flex;
    }
    .item:nth-child(1) {
        flex-shrink: 0;
        width: 100px;
    }
    .item:nth-child(2) {
        flex-grow: 1;
    }
```
* 👆 위의 예시처럼 브라우저창을 줄여도 flex-shrink: 0; 을 써서 컨테이너가 아무리 작아져도 첫번째 아이템은 줄어들지 않고 폭이 100px로 유지됨
#### flex-basis
* Flex 아이템의 기본 크기를 설정
* flex-direction이 row일 때는 너비, column일 때는 높이
* 값으로는 우리가 width, height 등에 사용하는 각종 단위의 수가 들어갈 수 있음
* 기본값 auto
```
    예시) 

    .item {
        flex-basis: auto; /* 기본값 */
        /* flex-basis: 0; */
        /* flex-basis: 50%; */
        /* flex-basis: 300px; */
        /* flex-basis: 10rem; */
        /* flex-basis: content; */
    }
```
#### order
* 각 아이템들의 시각적 나열 순서를 결정하는 속성
* 숫자값이 들어가며, 작은 숫자일 수록 먼저 배치
* 시각적” 순서일 뿐, HTML 자체의 구조를 바꾸는 것은 아니므로 접근성 측면에서 사용에 주의
```
    예시) 

    .item:nth-child(1) { order: 3; } /* A */
    .item:nth-child(2) { order: 1; } /* B */
    .item:nth-child(3) { order: 2; } /* C */
```
### align-self
* align-items의 아이템 버전
* align-items가 전체 아이템의 수직축 방향 정렬 이라면, align-self는 해당 아이템의 수직축 방향 정렬
* 기본값은 auto
* 기본적으로 align-items 설정을 상속
* align-self는 align-items보다 우선권이 있음
```
    .item {
        align-self: auto;
        /* align-self: stretch; */
        /* align-self: flex-start; */
        /* align-self: flex-end; */
        /* align-self: center; */
        /* align-self: baseline; */
    }
```
<br>

### [개구리게임 으로 배우는 Flexbox](https://flexboxfroggy.com/#ko)



