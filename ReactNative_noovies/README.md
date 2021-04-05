초보를 위한 React Native
=======
* 무비앱을 만들거임
* 영호, TV프로그램, 검색기능, 추천기능, 즐겨찾기까지 구현할 예정

### step 01 설치

1. npm i -g expo-cli 또는
yarn global add expo-cli

2. expo init noovies
expo를 실행하면서 이 안에 noovies 이라는 폴더를 만들거다
처음부터 다 만들기 때문에 black enter

3. expo를 시작할때는 vscode 터미널에서 npn run start 또는 yarn start를 치면 됨

4. ios simulator 를 열고 싶으면 i키를, android를 열고 싶으면 a키를, web을 열고 싶으면 w키를 누르면 됨

<br>

### step 02 app.js

1. app.js 에서 불필요한 코드를 을 지우고 AppLoading 이라는 컴포넌트를 쓸거임
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
* AppLoading 이 하는일은 splash screen 을 보여주는 역할을 함

2. 노마드 코더 강의 에서는 < AppLoading  /> 쓰면 되지만 [AppLoading](https://docs.expo.io/versions/latest/sdk/app-loading/) 컴포넌트는 업데이트로 별도의 설치를 요함
    * 터미널로 설치
        ```
        expo install expo-app-loading 
        ```
    * AppLoading 에는 몇몇 props를 가지고 있음
        * StartAsync : promise를 return 하는 function
        * onError : 에러가 났을때
        * onFinish : 끝났을 때 
    
3. App.js에 const [isReady, setIsReady] = useState(false);
```
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import AppLoading from "expo-app-loading";

    export default function App() {
    const [isReady, setIsReady] = useState(false);
    
    }
```

4. return isReady ? null : < AppLoading / >;
```
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import AppLoading from "expo-app-loading";

    export default function App() {
    const [isReady, setIsReady] = useState(false);
    return isReady ? null : <AppLoading />;
    }
```
* isReady 이면 아무것도 안보여주고 준비가 안되어 있으면 AppLoading 을 보여줄거다 
