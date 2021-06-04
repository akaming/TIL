# React Material-UI

## 설치

```
    // with npm
    npm install @material-ui/core

    // with yarn
    yarn add @material-ui/core
```

- SVG Icons 사용 시

  ```
      // with npm
      npm install @material-ui/icons

      // with yarn
      yarn add @material-ui/icons
  ```

## 사용법

1. 사용하고자 하는 항목을 import 한다
2. 사용한다
3. (응용)styles을 이용하여 component를 커스터마이징 한다.

## 기본 스타일 사용

```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Button from '@material-ui/core/Button'; // Button을 import 한다.

    function App() {
    return (
        <Button variant="contained" color="primary"> // 사용한다.
        Hello World
        </Button>
    );
    }

    ReactDOM.render(<App />, document.querySelector('#app'));
```

## 커스터마이징 하기(응용)

- Component에 css값을 변경
- 각 태그마다 선언하는게 아니라 styles을 사용하면 보기 쉽게 변경할 수 있다.

```
    import React from "react";
    import Button from "@material-ui/core/Button";
    import { makeStyles } from "@material-ui/core/styles"; // styles 기능 추가

    const useStyles = makeStyles(theme => ({  // style 요소 선언
    margin: {
        margin: theme.spacing(1),
    }
    }));

    export default function ButtonComponent() {
        const classes = useStyles();   // 생성
        return (
            <div >
            <Button variant="contained" color="primary" className={classes.margin}> // 사용
                Primary
            </Button>
            <Button variant="contained" color="secondary" className={classes.margin}>
                Disabled
            </Button>

            </div>

        );
    }
```

### 홈페이지 참고

- [ttps://material-ui.com/](https://material-ui.com/)

### Templete

- [https://material-ui.com/getting-started/templates/](https://material-ui.com/getting-started/templates/)
