### useState

- 상태 유지값과 그값을 갱신하는 함수를 반환
- 최초로 렌더링을 하는 동안, 반환된 state는 첫 번째 전달된 인자(null)의 값과 같다.

```
    const [state, setState] = useState(null);
```

### useState Hook을 React에서 가져오기

```
    import React, {useState} from 'react';
```

### state 만들기

- state 변수와 해당 state를 갱신할 수 있는 함수가 만들어진다.
  <br>

```
    const [count, setCount] = useState(0);
```

- useState의 인자의 값으로 0을 넘겨주면 count 값을 0으로 초기화 할 수 있다.
  <br>

```
    <button onClick={() => setCount(count + 1)}>
        Click me
    </button>
```

- 사용자가 버튼 클릭을 하면 setCount 함수를 호출하여 state변수를 갱신
- 새로운 count 변수를 Example 컴포넌트에 넘기며 해당 컴포넌트를 리렌더링 한다.

### Hook의 규칙

- 최상위 에서만 Hook을 호출해야 한다.
- 반복문, 조건문 혹은 중첩된 함수내에서 Hook을 호출하면 안된다.
- 오직 React 함수 내에서 Hook을 호출해야 한다.
- Hook을 사용할 때 규칙을 반드시 지키도록 강제하고 싶다면 ESLint 플러그인을 사용 해라

불멸성
