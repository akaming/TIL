# Class Component VS Function Component

### Class Component

- 기본적으로 클래스형 컴포넌트와 함수형 컴포넌트가 하는 동작은 같다.
- 하지만 클래스형 컴포넌트는 보다 더 많은 기능을 제공해 주는 것이 함수형 컴포넌트와의 가장 큰 차이점이다.
- state를 이용한 상태를 나타내거나 component lifecyle에 정의된 메서드를 이용해 원하는 순서에 특정한 동작을 하도록 할 수 있다.
- state를 정의할 수 있고 render함수의 return값에 따라 원하는 UI를 보여줄 수 있다.
- componentWillMount(), componentDidMount()등과 같은 lifecycle에 정의된 메서드를 이용할 수 도 있다.
- 예전에는 이러한 동작들이 클래스형 컴포넌트에서만 가능했기 때문에 복잡한 작업을 할 때에는 클래스를 정의하여 클래스형 컴포넌트를 사용하는 것이 거의 불가피했었다. 하지만 React 버전 16.8에 새로 추가된 Hook으로 인해 상황은 달라졌다.
  ```
      class ClassComp extends React.Component {
          state = {
              // ...
          };
          render() {
              return (
                  <div className="container">
                      // ...
                  </div>
              );
          }
      }
  ```

### Function Component

- React 버전 16.8이 나오기 전까지 Function Component는 비교적 간단한 동작을 하는데에 사용되었다.
- state는 물론이고, lifecyle에 정의된 함수를 사용하지 못했기 때문이다.

```
    function FuncComp(props) {
        return (
            <div className="container">
                // ...
            </div>
        )
    }
```
