INTRODUCTION
-----

### 초기 셋팅
* node 설치
* npm 설치
* android studio 나 xcode 설치, 만약에 하기 싫다면 자신의 휴대폰에 expo 설치
* 터미널에서 npm install -g expo-cli 설치

### Expo 란
* create-react-app 과 같음
* React Native의 무료로 사용할 수 있는 써드 파티 라이브러리
* Utility 덕분에 Native 기능을 손 쉽게 사용할 수 있는 반면 Expo에서 제공하는 Ecosystem에 제한
* 여러가지 기능이 있지만 가장 대표적 기능은 핸드폰에서 내가 현재 개발하고 있는 앱을 바로바로 확인 할 수 있게 해주는 것

### RN CLI 란
* 네이티브로 어플리케이션을 개발
* 필요한 기능이 있는 경우, 모듈을 직접만들어 사용
* 초기 구성이 오래 걸림
* 배포하기 불편

### 시뮬레이터에서 관리자 모드
* cmd + D (ios) 나 cmd + M (android) 키를 눌러주면 관리자 모드로 접속할 수 있음
* 실제 휴대폰에서 관리자 모드
    * 휴대폰을 흔들어 주면 관리자 모드로 접속할 수 있음
* Reloading
    * 코드에 변화가 생겼을 시, reload 해보려면, cmd + R키를 눌러주거나, 관리자 모드에서 Reload 를 눌러주면 됨
    * 자동 Reloading
        * 관리자 모드에서 Enable Live Reload 를 눌러주면 됨 앱의 상태를 유지하면서 자동 Reloading을 하고 싶다면 Enable Hot Reloading 을 눌러주면 됨
* red box error
    * console.error(); 명령어로 에러를 출력해 볼 수 있음

* yellow box warning
    * console.warn(); 명령어로 경고메세지를 출력해 볼 수 있음
* Chrome 개발자 도구
    * 관리자 모드에서 Debug JS Remotely를 눌러주면 된다. 그럼 자동으로 웹페이지로 연결됨
    * cmd + option + I키를 눌러주면 콘솔창이 뜨면서 디버깅 할 수 있음
* Inspector
    * 관리자 모드에서 Toggle Inspector 을 누르고, 화면 부분을 클릭하면, 구성을 볼 수 있음