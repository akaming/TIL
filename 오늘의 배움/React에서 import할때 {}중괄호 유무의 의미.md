# React에서 import 할때 {}중괄호 유무의 의미

```
    import React from 'react';
    import TodoTemplate from './components/TodoTemplate';
    import { TodoProvider } from './TodoContext';
```

- 위의 파일은 React와 TodoTemplate, TodoProvider라는 변수를 사용할 수 있다. 근데 왜 TodoProvider만 {}안에 들어간걸까?
- 이유는 **export 방식의 차이** 이다.

<br>

모듈을 불러올 때 import 라고 써주는 것처럼, 모듈을 다른 파일로 보내려면 export라고 명시적으로 써줘야 한다.

- **export해줄때 default를 붙인 TodoTemplate의 경우 중괄호 없이** 그냥 import
- **default없이 export 해준 TodoContext의 경우에는 중괄호 안에 담아** import

# export default와 export의 차이

- [export default]: 파일 전체를 export
- [export 변수]: 해당 변수만 export
