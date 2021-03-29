LOGIC
-----

### 리액트 네이티브에서 레이아웃에 대한 규칙
* 웹 사이트에서 모든 flex 박스의 디폴트는 row인거에 반해 리액트 네이티브에서 모든 flex box의 디폴트는 flexDirection이 column 이다 
* < View >는 < div > 같은거임

### step01 Loading.js 만들기
* Loading.js을 만들고 아래 코드를 입력
```
    import React from "react";
    import { StyleSheet, Text, View, StatusBar} from 'react-native';

    export default function Loading() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <Text style={styles.text}>Getting the fucking weather</Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: 30,
            paddingVertical: 100,
            backgroundColor: "#FDF6AA"
        },
        text: {
            color: "#2c2c2c",
            fontSize: 30
        }
    })
```
* 코드를 다 입력 했다면 App.js 로 돌아오기

### step02 App.js 에 Loading.js import 시키기
* App.js에 아래 코드 입력
```
    import React from "react";
    import Loading from "./Loading";

    export default function App() {
        return <Loading /;>
    }
```
* 입력 하면 시뮬레이터에 Getting the fucking weather 라는 text가 나오는게 확인 가능

### step03 지역정보 받아오기
* [expo 사이트](https://docs.expo.io/versions/latest/sdk/location/#locationinstallwebgeolocationpolyfill) 들어가기
* 터미널에 밑에 명령어 붙이기
    ```
     expo install expo-location
    ```
* install 을 했다면 이제 import를 해줘야함
* app.js 상단에 밑에 코드 붙이기
    ```
    import * as Location from 'expo-location';
    ```
* app.js에 Location을 import 시켜줬으면 아래처럼 작성
    ```
        export default class extends React.Component {
            getLocation = async() => {
                const location Location.getCurrentPositionAsync();
            }
            componentDidMount() {
                this.getLocation();
            }
            render() {
                return <Loading />;
            }
        }
    ```
    * componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출 된다는 뜻
    * Location.getCurrentPositionAsync(options) 는 await functionality라고함, await는 "기다려"란 뜻이고 지역정보도 가져올때까지 기다리기 때문임
* 위의 코드를 입력하면 사용자에게 권한을 요청해야한다는 문구가 나옴

### step04 권한 인증받기
* 인증이 되었을 때의 처리와 안되었을 때 처리를 try, catch 문법으로 분기설정 하기
* 사용자가 위치접근을 허용하면 try 문법이 실행 되고, 허용을 안하면 catch 문법( Alert.alert("Can't find you.", "So sad");)이 실행됨
    ```
        import React from 'react';
        import { Alert } from 'react-native'
        import Loading from "./Loading";
        import * as Location from 'expo-location'

        export default class extends React.Component {
           
            geoLocation = async() => {
                try{
                    await Location.requestPermissionsAsync();
                    const location = await Location.getCurrentPositionAsync();
                    console.log(location); //console에서 확인하기 위해서 썼음
                } catch(error){
                    Alert.alert("Can't find you.", "So sad");
                }        
            }

            componentDidMount(){
                this.geoLocation();
            }
            render(){
                return <Loading/>;
            }
        }
    ```
* 위의 코드처럼 작성 후 시뮬레이터를 보면 위치 위치 접근 허용 팝업창이 뜨는데 항상(Always Allow)을 누르자
* console.log(location); 을 썼기때문에 시뮬레이터 localhost 또는 터미널에서 보면은 지역정보에 대한 데이터가 나옴

### step05 latitude(위도), longitude(경도) 가져오기

```
    import React from 'react';
    import { Alert } from 'react-native'
    import Loading from "./Loading";
    import * as Location from 'expo-location'

    export default class extends React.Component {
        
        geoLocation = async() => {
            try{
                await Location.requestPermissionsAsync();
                const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync();
                console.log(location); //console에서 확인하기 위해서 썼음
            } catch(error){
                Alert.alert("Can't find you.", "So sad");
            }        
        }

        componentDidMount(){
            this.geoLocation();
        }
        render(){
            return <Loading/>;
        }
    }
```

* 로딩 상태를 확인하는 state 변수를 하나 만들자
    * render를 할 때 isLoading이 true일 때만 제대로 반환하고, 아니면 null을 반환
    ```
        import React from 'react';
        import { Alert } from 'react-native'
        import Loading from "./Loading";
        import * as Location from 'expo-location'

        export default class extends React.Component {
           state = {
               isLoading: true
           };
            geoLocation = async() => {
                try{
                    await Location.requestPermissionsAsync();
                    const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync();
                    this.setState({isLoading:false});
                } catch(error){
                    Alert.alert("Can't find you.", "So sad");
                }        
            }

            componentDidMount(){
                this.geoLocation();
            }
            render(){
                const {isLoading} = this.state;
                return isLoading ? <Loading/> : null;
            }
        }
    ```

### step06 openWeatherApi 이용하기
* [WeatherAPI](https://openweathermap.org) 접속
* WeatherAPI 로그인을 해야함
* 로그인 후 API keys 탭을 눌러서 내 API Key를 복사해오자 (API Key: 3f3e548d93fc93aa74a273efbede8c23)
    ```
    import React from 'react';
    import { Alert } from 'react-native'
    import Loading from "./Loading";
    import * as Location from 'expo-location'

    const API_KEY = "3f3e548d93fc93aa74a273efbede8c23";

    export default class extends React.Component {
        state = {
            isLoading: true
        };

        geoLocation = async() => {
            try{
                await Location.requestPermissionsAsync();
                const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync();
                this.setState({isLoading:false});
            } catch(error){
                Alert.alert("Can't find you.", "So sad");
            }        
        }

        componentDidMount(){
            this.geoLocation();
        }
        render(){
            const {isLoading} = this.state;
            return isLoading ? <Loading/> : null;
        }
    }
    ```
* API 요청 데이터는 JSON 형식인데 이를 fetch하기 위해서 Axios를 설치 해야함
   ```
    // 터미널에 입력
    npm install axios 또는 yarn add axios
   ```
* 이후 axios import를 해줌
    ```
    import React from 'react';
    import {Alert} from 'react-native'
    import Loading from "./Loading";
    import * as Location from 'expo-location'
    import axios from 'axios';

   const API_KEY = "3f3e548d93fc93aa74a273efbede8c23";

    export default class extends React.Component {
        state = {
            isLoading : true
        };
        getWeather = async(latitude, longitude) =>{

        }
        geoLocation = async() => {
            try{
                const response = await Location.requestPermissionsAsync();
                const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync();
                this.getWeather(latitude, longitude);
                this.setState({ isLoading:false });
            } catch(error){
                Alert.alert("Can't find you.", "So sad");
            }        
        }

        componentDidMount(){
            this.geoLocation();
        }
        render(){
            const { isLoading } = this.state;
            return isLoading ? <Loading/> : null;
        }
    }
    ```
* axios를 이용해서 웹 요청을 함, 이때 웹 요청 url을 적을 때 **` (백틱)을 이용** 왜냐하면 lon, lat, appid의 값에 변수를 넣어줘야하기 때문
```
    import React from 'react';
    import {Alert} from 'react-native'
    import Loading from "./Loading";
    import * as Location from 'expo-location'
    import axios from 'axios';

    const API_KEY = "3f3e548d93fc93aa74a273efbede8c23";

    export default class extends React.Component {
        state = {
            isLoading : true
        };
        getWeather = async(latitude, longitude) =>{
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            console.log(data);
        }
        geoLocation = async() => {
            try{
                const response = await Location.requestPermissionsAsync();
                const {coords : {latitude, longitude}}  = await Location.getCurrentPositionAsync();
                this.getWeather(latitude, longitude);
                this.setState({ isLoading:false });
            } catch(error){
                Alert.alert("Can't find you.", "So sad");
            }        
        }

        componentDidMount(){
            this.geoLocation();
        }
        render(){
            const { isLoading } = this.state;
            return isLoading ? <Loading/> : null;
        }
    }
```