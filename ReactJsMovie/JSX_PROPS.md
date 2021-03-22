JSX&PROPS
=============
* 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 bable이 JSX를 JavaScript로 변환을 해줌
* Babel은 자바스크립트의 문법을 확장해주는 도구
* JSX가 JavaScript로 제대로 변환이 되려면 지켜주어야 하는 몇 가지 규칙이 있음
    * 꼭 닫혀야 하는 태그
        * 태그는 꼭 닫혀있어야 함
    * 꼭 감싸져야 하는 태그
        * 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
        * 하지만, 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않은 상황도 있음, 예를 들어 스타일 관련 설정을 하다가 복잡해지게 되는 상황도 올 수 있고, table관련 태그를 작성할 때에도 내용을 div같은걸로 감싸기엔 애매 함. 그럴땐, 리액트의 **Fragment** 라는것을 사용하면 됨
    * JSX 안에 자바스크립트 값 사용하기
        * JSX내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줌
        ```
        import React from 'react';
        import movie from './movie';

        function App() {
        const name = 'react';
        return (
            <>
            <movie />
            <div>{name}</div>
            </>
        );
        }

        export default App;
        ```
    * style 과 className
        * JSX 에서 태그에 style과 CSS class를 설정하는 방법은 HTML 에서 설정하는 방법과 다름, 우선 인라인 스타일은 객체 형태로 작성을 해야 하며, background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor 처럼 camleCase 형태로 네이밍 해주어야 함
        * CSS class를 설정할 때에는 class= 가 아닌 className= 으로 설정 해야함
    * 주석
        * JSX 내부의 주석은 {/* 이런 형태로 */} 작성해야 함
        * 열리는 태그 내부에서는 // 이런 형태로 주석작성이 가능함
<br>

### Fragment
* DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화 할 수 있음
* 사용법
    ```
    class Columns extends React.Component {
        render() {
            return (
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
            );
        }
    }
    ```
* 단축 문법
    ```
    class Columns extends React.Component {
        render() {
            return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
            );
        }
    }
    ```
### Component
* 컴포넌트는 개념적으로 props를 input으로 하고 UI가 어떻게 보여야 하는지 정의하는 React Element를 output으로 하는 **함수**
* UI를 재사용할 수 있고 독립적인 단위로 쪼개어 생각 할 수있어야 함
* 그래서 컴포넌트는 React.Component를 상속받아 정의하지만 컴포넌트 간에는 상속보다는 **합성**을 사용하길 권장 
* 쉽게 생각하면 데이터를 입력받아 DOM Node를 출력하는 함수 
