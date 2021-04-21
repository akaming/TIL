# 초보를 위한 React Native

- 무비앱을 만들거임
- 영호, TV프로그램, 검색기능, 추천기능, 즐겨찾기까지 구현할 예정

### step 01 설치

1. npm i -g expo-cli 또는
   yarn global add expo-cli

2. expo init noovies
   expo를 실행하면서 이 안에 noovies 이라는 폴더를 만들거다.
   처음부터 다 만들기 때문에 black enter

3. expo를 시작할때는 vscode 터미널에서 npn run start 또는 yarn start를 치면 된다.

4. ios simulator 를 열고 싶으면 i키를, android를 열고 싶으면 a키를, web을 열고 싶으면 w키를 누르면 된다.

<br>

### step 02 AppLoading

1. app.js 에서 불필요한 코드를 을 지우고 AppLoading 이라는 컴포넌트를 쓸거다.

```
    // 불필요한 코드

    <View style={styles.container}>
      <Text>js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
```

- AppLoading 이 하는일은 splash screen 을 보여주는 역할을 한다.

2. 노마드 코더 강의 에서는 < AppLoading /> 쓰면 되지만 [AppLoading](https://docs.expo.io/versions/latest/sdk/app-loading/) 컴포넌트는 업데이트로 별도의 설치를 요함
   - 터미널로 설치
     ```
     expo install expo-app-loading
     ```
   - AppLoading 에는 몇몇 props를 가지고 있다.
     - StartAsync : promise를 return 하는 function
     - onError : 에러가 났을때
     - onFinish : 끝났을 때
3. App.js에 const [isReady, setIsReady] = useState(false);

```
    import React from 'react';
    import AppLoading from "expo-app-loading";

    export default function App() {
    const [isReady, setIsReady] = useState(false);

    }
```

4. return isReady ? null : < AppLoading / >;

```
    import React from 'react';
    import AppLoading from "expo-app-loading";

    export default function App() {
    const [isReady, setIsReady] = useState(false);
    return isReady ? null : <AppLoading />;
    }
```

- isReady 이면 아무것도 안보여주고 준비가 안되어 있으면 AppLoading 을 보여줄거다.

5. 미리 로딩을 시작하게 하는 fucntiond을 만들자

```
    import React from 'react';
    import AppLoading from "expo-app-loading";

    export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssetes = async () =>{}
    const onFinish = () => setIsReady(true);
    return isReady ? null : <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />;
    }
```

- onError 는 error argument랑 같이 오는 function 이다. 그래서 onError={console.error}은 (e) => console.error 랑 같은거다.

### step 03 이미지 로드하기

1. 이미지 로드 하기
   - cachImages 라고 불리는 function 만들기
   - asset은 external module 이다. 이건 기본적으로 asset에 접근 해준다.
   - 터미널에 expo install expo-asset 친다.
   - images는 이미지들의 array여야만 한다.

```
    import React from 'react';
    import AppLoading from "expo-app-loading";

    // 두가지 옵션이 있다.
    const cacheImages = (images) => images.map(image => {
        if(typeof image === "string"){       // 1. url을 보낼 수 있거나
            return Image.prefetch(image)
        } else {
            return Asset.fromModule(image).downloadAsync();   // 2. module을 보낼 수 있다.
        }
    });

    export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssetes = async () =>{
        const images = cacheImages([
            "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            require("./assets/splash.png"),
        ])
    };
    const onFinish = () => setIsReady(true);
    return isReady ? null : <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />;
    }
```

- 이미지는 [unsplash](https://unsplash.com/)에 있는 이미지 사용
- image.prefetch는 promise를 준다.
- Assets.fromModule은 promise를 준다.
- images는 proise들의 array다.

### step 04 cacheFonts

1. 벡터 아이콘을 설치해야 한다. [expo icons](https://docs.expo.io/guides/icons/#expovector-icons)<br>
   터미널에 명령어 입력

```
    expo install @expo/vector-icons
```

- expo ad
  - 그냥 npm install 같은 거다.
  - expo ad는 expo랑 호환이 되는 package가 있는지 시도해보는 layer가 있다.
- [npm 과 yarn 비교](https://github.com/akaming/TIL/tree/master/NPMvsYARN)
  - node + npm이 기본 이었는데, 몇 가지 npm의 문제점을 해결하기 위해 yarn 나옴
  - 기존 npm은 배포가 쉽고, 종속성을 쉽게 해결할 수 있지만 패키지가 중복으로 설치될 수 있고, 파일이 많은 경우에 문제가 될 수 있다. 페이스북에서는 이런 문제점들을 해결하기 위해서 yarn을 발표
  - yarn 은 npm3보다 패키지 설치 속도가 빠름
  - json 포캣을 사용하지 않음
  - offline 모드가 가능

2. 터미널에 exp add expo-font 입력

3. cacheFonts 함수를 입력

```
    // 상단
    import * ad Font from "expo-font";

    // 메인
    const cachFonts = fonts =>
    fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);
```

- cachFonts에 font를 주고 그 font를 load 할거다.

5. loadAssets의 promise로 return 하기

```
    // loadAssets 함수 안에
    return await Promise.all([...images, ...fonts]);
```

- promise.all이 promise array를 가진다.

6. api 읽기

- expo 사이트를 보면 appLoading Api는 'startAsync는 promise를 return 하는 function 이다.' 라고 되어 있다.
- 그래서 코드 정리를 다시 하자면 <br>
  return await Promise.all([...images, ...fonts]); → return Promise.all([...images, ...fonts]);<br>
  const loadAssetes = async () → const loadAssets = ()

```
    const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
```

7. 정리

- loadAssets 에 있는것들은 미리 로드 될꺼라는거다. (cacheImages 와 cacheFonts)
- loadAssets안에 있는 cacheImages 함수는 image의 로딩 프로세르를 본다는 의미
- url에서 import 되거나 안되면 우리 assets에 있는 이미지를 보게된다.
- font도 마찬가지

### step 05 Stack Navigation

1. [React Navigation](https://reactnavigation.org/docs/getting-started)에 들어가서 Getting started 에 Installation Yarn 명령어를 터미널에 입력
   - 첫번째로 설치 하는건 REACT Navigation 이다.
   ```
       yarn add @react-navigation/native
   ```
2. - libraries는 Expo랑 호환이 되는지 확인
   ```
   expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```
3. App.js에 View 태그 대신 NavigationContainer 태그를 쓴다.

   ```
       return isReady ? (
           <NavigationContainer>

           </NavigationContainer>
       )
   ```

4. App.js 에 import 하기
   ```
       import {NavigationContainer} from "react-navigation/native"
   ```
5. navigation 폴더를 만들고 그 안에 Stack.js를 만들자
6. stack navigaion을 설치 해야 하므로 터미널에 명령어 입력
   ```
       yarn add @react-navigation/stack
   ```
7. export default 안에 코드 쓰기

   - export default 는 '해당 모듈엔 개체가 하나만 있다’
   - 선언부 앞에 export 를 붙이면 내보내기가 가능
   - screens 폴더를 만들어주고 그 안에 Tabs.js 와 Detail.js 을 만들어준다.

   ```
   import React from "react";
    import { createStackNavigator } from "@react-navigation/stack";
    import Detail from "../screens/Detail";
    import Tabs from "./Tabs";

    const Stack = createStackNavigator();

    export default () => (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "black",
            shadowColor: "black",
        },
        headerTintColor: "white",
        }}
    >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
    );
   ```

   - 각 Screen 에는 꼭 **name**을 써줘야 한다.

8. App.js에 render 하기

   ```
       import Stack from "./navigation/Stack";


       return isReady ? (
           <NavigationContainer>
               <Stack />
           </NavigationContainer>
       )
   ```

### step 06 Tabs Navigation
