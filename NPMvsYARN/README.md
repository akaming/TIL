# npm 과 yarn 기본 명령들 비교

| npm 명령                             | yarn 명령                           | 설명                                                          |
| ------------------------------------ | ----------------------------------- | ------------------------------------------------------------- |
| npm init                             | yarn init                           | 프로젝트 초기화                                               |
| npm install                          | yarn or yarn install                | package.json 의 패키지 설치                                   |
| npm install –save [package name]     | yarn add [package name ]            | 패키지를 프로젝트 의존성 수준으로 추가 (dependencies)         |
| npm install –save-dev [package name] | yarn add -D[or –dev] [package name] | 패키지를 프로젝트 개발 의존성 수준으로 추가 (Devdependencies) |
| npm install –global [package name]   | yarn global add [package name]      | 패키지를 전역 수준으로 추가                                   |
| npm update –save                     | yarn upgrade                        | 프로젝트의 패키지 업데이트                                    |
| npm run [script name]                | yarn [script name]                  | package.json의 scripts에 지정된 명령 실행                     |
| npm uninstall –save [package name]   | yarn remove [package name]          | 패키지 삭제                                                   |
| npm cache clean                      | yarn cache clean                    | 캐시 삭제                                                     |
