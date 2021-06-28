1. 필요한 것
   Node.js(LTS)
   mysql

2. https://docs.adonisjs.com/guides/installation 여기서

```
    npm init adonis-ts-app@latest [앱파일]
```

설치하는 도중에 터미널에 CUSTOMIZE PROJECT가 뜨면 - api 클릭 - 기본값 - enlint 는 안하는 쪽(N)

- cd [앱이름]
- node ace serve --watch

3. 만들고 나면은 비쥬얼 스튜디오에 'npm run dev' 해보기
   - 터미널에 node-ace 라고 치면은 node에서 쓸수있는 명령어가 나옴

### Routing

1. start 폴더 밑에 있는 routes.ts 열기
   ```
       Route.get("/list", async () => {
           return [0, 1, 2, 3, 4, 5];
       });
   ```
   만들고 http://127.0.0.1:3333/list 에서 확인 해보기

### Controllers

Controllers는 route에 할당되는 함수들을 용도별로 나눌수 있게 제공해줌

1. 터미널에 controller 만들기
   ```
       node ace make:controller [파일 이름]
   ```
2. app/Controllers/Http 에 controller 파일이 만들어진걸 확인할 수 있음
3. AppController.ts(내가 만든 controller파일)에 예제를 하나 추가 해보기

   ```
       export default calss AppController{
           public async hello() {
               return {hello: 'world'};
           }

           public async list() {
               return [0, 1, 2, 3, 4, 5];
           }
       }
   ```

4. routes.ts 에 AppController.ts 연결 시켜주기
   ```
       Route.get('/', 'AppController.hello');
       Route.get('/list', 'AppController.list');
   ```
   - 이렇게 사용하면 정리가 확실히 간단히 됨

### HTTP 메서드

- GET, POST, PATCH, PUT, DELETE 가 있음
- 웹브라우저에서 주소로 요청을 하는것은 GET 방식 (우리가 실제로 뷰에서 바로 볼수있는 것들)
  - 개발자 도구 열어서 Network에서 Request Method를 확인할 수 있음

### POSTMAN 이용하기

- method를 선택해서 http://127.0.0.1:3333/list 넣어보기

### Restful api

- 메서드를 잘 이용 하고 이름을 리소스 단위로 관리하자

  ```
   나쁜예시)
      Route.get('/', '/getArticles', () => {})
      Route.post('/', '/createArticles', () => {})

      Route.get('/', '/getArticles', () => {})
      Route.get('/', '/createArticles', () => {}) //가져오는 api 인데 작성하는걸로 써놓음(create)
  ```

  ```
      좋은예시)
       Route.get('/', '/articles', () => {}) // 목록
       Route.post('/', '/articles', () => {}) // 신규 생성
       Route.get('/', '/articles/:id', () => {}) // 개별 조회
       Route.patch('/', '/articles/:id', () => {}) // 개별 수정
       Route.delete('/', '/articles/:id', () => {}) // 개별 삭제
  ```

  <br>

- 리소스가 아니고 동작에 관한것도 만들수있음 이런건 restful api를 준수해서 만든건 아니지만 강제성이 없다면 이렇게 만들어도 됨

  ```
      Route.post('/', '/sign-in', () => {})
      Route.post('/', '/sign-out', () => {})
  ```

  - HTTP API 또는 restful 형식을 빌린 HTTP API

### dbeaver

1. 신규추가 하는 버튼 클릭(어뎁터 플러스 아이콘)
2. mySQL5(5버전), mySQL(8버전) // 나는 8버전이므로 그냥 mySQL 클릭 후 다음
3. 1. Sever host: 127.0.1 이런거 넣어주기
   2. Port: 그대로 두기
   3. Database: 따로 입력 안함
   4. Username,Password는 개발환경에는 비번 유무에 따라서 하는거임(나는 안함)
   5. Test Connection 킅릭 후 성공한거 확인 하면 완료 버튼 클릭
4. Database 폴더에 신규 데이터 베이스 추가하기
   1. name: 입력 //예시) community
   2. Charset: utf8mb4
   3. Collation: utf8mb4_general_ci

### Database

1. 터미널에 @adonisjs/lucid 설치하기
   ```
       npm i @adonisjs/lucid
   ```
2. 설치가 되면 꼭 configure 해야함
   ```
       node ace configure @adonisjs/lucid
   ```
3. config/database.ts 가 생긴걸 확인할 수 있음
4. start/.env 수정
   ```
       MYSQL_USER=root
       MYSQL_DB_NAME=community
   ```

### Schema migrations

- 데이터베이스 구조를 여기서 관리할 수 있음
  ```
      node ace make:migration [파일이름] // 파일명 예시) articles
  ```
- database/migration 에 새로운 articles 파일이 생성된걸 확인할 수 있음
- 실행해보기
  ```
      node ace migration:run
  ```
- 그러면 dbeaver 에 Database/community/ articles 라는 테이블이 만들어지는걸 확인할 수 있음

### articles.ts 작성 해보기

    ```
    예시)
        table.string('subject');  // 제목
        table.string('author');   // 작성자
        table.text('content');    // 본문
    ```

- 본문은 길어질 수 있으므로 text로 만듬
- 파일을 수정을 하고 node ace migration:run 하면은 전부다 최신상태 라는 문구가 나온다.
  - migration은 파일이 추가가 되는게 아닌이상 변경된 사항을 다시 추적하지 않는다.
- 해결방법

  ```
      node ace migration:rollback

      rollback 후에 run을 하면 된다

      node ace migration:run
  ```

- dbeaver 에 articles를 새로고침 하면은 subject, author, content 가 추가된걸 확인할 수 있다.

### dbeaver data 추가 하기

- dbeaver 에 만든 articles 테이블에 Data 탭을 누른다.
- 하단에 + 버튼을 눌러서 추가한다.
  - 입력 하면 save 을 눌러서 저장
- dbeaver 에 넣는 이유는 더미 데이터 를 넣을려고 하는거고 실제로는 데이터베이스를 만들때 sql 이라는 고유한 문법을 통해서 만든다.

### ORM

- ORM은 프로그램이 DB를 객체에 연결하는 것 자체를 뜻하며 model은 이때 연결된 객체를 말함
- 터미널로 model을 만들어보자
  ```
      node ace make:model Article
  ```
  - 테이블 이름은 복수형이 권장 되는 것처럼 모델명은 단수형 으로 만들어야 함
- app/Models/Article.ts 이 생성된걸 확인할 수 있다.
- Article.ts 에 articles.ts에 있는 subject, author, content 를 정의 해줘야함
  ```
    public subject : string;
    public author : string;
    public content : string;
  ```
  ❗️ 데이터베이스 상에서는 content는 일정길이 이상 넘어가니깐 Text 라고 표현을 하고 자바스크립트 상에서는 그래도 string 이기 때문에 string 으로 표현을 해준다.
- column 이라는 decorator 이라는 할당 해준다.

  ```
      @column()
      public subject : string;

      @column()
      public author : string;

      @column()
      public content : string;
  ```

### ArticleController 만들기

```
    node ace make:controller ArticleController
```

<br>

- 만들어진 ArticleController 에 함수들을 만들어보자

```
    public async list(){

    }

    public async create(){

    }

    public async read(){

    }
```

### Routes 할당 하기

- routes.ts에 할당을 해보자

```
    Route.get('/articles', 'ArticlesController.list')   //ArticlesController 안에 있는 list
```

### ArticlesController.ts에 읽어오는 부분 작업 해보기

1. model import 하기
   ```
       import Article from "App/Models/Article";
   ```
2. Article에 있는 모든 데이터를 불러온다.
   ```
        public async list() {
           const articles = await Article.all();
           return articles;
       }
   ```
3. postman 으로 확인

### ArticlesController.ts에 저장하는 부분 작업 해보기

1. ArticlesController.ts 쓰기

```
    //ArticlesController

    public async create(){
        const article = new Article();
        article.subject = 'ORM을 이용해 입력한 제목';
        article.content = 'OPM을 이용해 입력한 본문';
        article.author = '작성 이름';
        await article.save();

        return article;
    }
```

2. Route 하기

```
    Route.post("/articles", "ArticlesController.create"); //ArticlesController 안에 있는 create
```

3. dbeaver 에서 새로고침 하면 ArticlesController create에서 썻던 내용들이 들어와 있는걸 확인할 수 있음
4. postman http://127.0.0.1:3333/articles 을 get 과 post 로 확인 해보기

### 동적 라우트 써보기

1. routes.ts 에 써보기
   ```
       Route.get('/articles/:id', 'ArticlesController.read');
   ```
2. ArticlesController read에 params 써보기
   ```
       public async read({ params }) {
           return params;
       }
   ```
3. postman 에서 get 으로 http://127.0.0.1:3333/articles/1 확인해보기 (뒤에 숫자는 계속 바뀔수있음 그게 동적 라우팅)
   ```
       // 예시 : http://127.0.0.1:3333/articles/1 넣어서 postman에서 확인 할 경우
       {
           "id": "1"
       }
   ```
4. 위에서 봤던것 처럼 "id": "1" 이런식으로 나옴 여기 id는 routes에서 입력한 패턴 Route.get('/articles/:id' 과 실제 주소지에서 입력된 값(http://127.0.0.1:3333/articles/1 , 여기 값이라고 하면은 1) 이런것들을 adonis가 파싱을 해서 전달해 주고 context 중에서 params을 전달해 주는 것이다.

5. 구조분해 할당 해주기
   ```
       public async read({params}){
           const {id} = params;    // id를 params 안에서 구조분해 할당 해서 하나를 받기
           const article = await Article.find(id);  //find라는 함수 이용하기 (ORM 에서 많이 사용하는 함수)
           return article;
       }
   ```
6. postman 으로 확인 해보면 데이터가 들어간걸 확인할 수 있다.
   ```
   // 예시 : http://127.0.0.1:3333/articles/1 넣어서 postman에서 확인 할 경우
       {
           "id": 2,
           "subject": "두번째",
           "author": "유저 1",
           "content": "본문 내용 입력",
           "created_at": null,
           "updated_at": null
       }
   ```

### CRUD operations

- Create(생성), Read(읽기), Update(추가), Delete(삭제) 을 묶어서 CRUD 라고 함
- update, delete 도 한번 해보자

```
     public async Update({ params }) {
        const { id } = params;
        const article = await Article.findOrFail(id);

        article.subject = '변경된 제목';
        awiat article.save();

        return article
    }
```

- findOrFail 라는 함수는 쿼리의 첫번째 결과를 반환 하고 결과를 찾을수 없을 때에는 404 에러가 던져지는 함수임
- const article = await Article.find(id); 이렇게 find로 하면은 null 접근할 수 있는 가능성이 있기 때문에 findOrFail 함수를 사용함
- postman 에서 patch로 확인 해보기
- 삭제도 해보기

```
    public async Delete({ params }) {
    const { id } = params;
    const article = await Article.findOrFail(id);

    article.subject = "변경된 제목";
    await article.delete(); // 삭제

    return "ok";
  }
```

- postman 에서 delete 로 하고 dbeaver에서 확인 하면 삭제 된걸 확인할 수 있다.

### 실제 사용자가 입력한 데이터 넣어보기

- subject, content, author 를 body 안에 넣어보자
- body 안에 form-data, x-www-form-urlencoded(기본적으로 제일 많이 사용) 를 많이 사용한다.
- 요청한 내용은 {request} 안쪽에 나온다.
- 자세한 내용은 https://docs.adonisjs.com/guides/routing, https://docs.adonisjs.com/guides/controllers, https://docs.adonisjs.com/guides/request 확인하기

  ```
      public async create({ request }) {
          const subject = request.input("subject");
          const content = request.input("content");
          const author = request.input("author");

          const article = new Article();
          article.subject = subject;
          article.content = content;
          article.author = author;
          await article.save();

          return article;
  }
  ```

- 포스트맨과 디비버에서 확인할 수 있다.

  ```
      const subject = request.input("subject");
      const content = request.input("content");
      const author = request.input("author");

      👇
      // 위 코드를 이렇게 쓸수도 있음
      const data = request.only(['subject', 'content', 'author']);
      return data;

      👇
      // 또는 구조분해 할당을 해서 쓸수도 있음
      const {
          subject,
          content,
          author
      } = request.only(['subject', 'content', 'author']);
      return data;
  ```

  ```
      const subject = request.input("subject");
      const content = request.input("content");
      const author = request.input("author");

      const article = new Article();
      article.subject = subject;
      article.content = content;
      article.author = author;

      await article.save();

      return article;

      👇
      // 이렇게 수정 가능함
      const data = request.only(['subject', 'content', 'author']);

      return data;

      const article = new Article();
      article.merge(data);

      await article.save();

      return article;
  ```

- input에 기본값 넣어보기
  ```
      const subject = request.input("subject",'제목없음');
  ```
  - postman 에서 subject를 없이 http://127.0.0.1:3333/articles를 post로 요청하면 "subject"에 "제목없음" 이 라는 기본값이 들어가는걸 확인할 수 있다.

### Create 에서 요청한 내용을 Update에 반영 해보기

1. Update에는 당연히 rquest가 필요함
   ```
       public async Update({request, params }) {}
   ```
2. request를 받기
   ```
       const data = request.only(['subject','author','content'])
   ```
3. article에 merge 시키기
   ```
       article.merge(data);
   ```
4. 최종적을 완성된 코드는 아래와 같다

   ```
        public async Update({ request, params }) {
           const { id } = params;
           const article = await Article.findOrFail(id);
           const data = request.only(["subject", "author", "content"]);

           article.merge(data);
           await article.save(); // 저장
           return article;
       }
   ```

5. postman 에서 확인해보기
   - PATCH 예시: http://127.0.0.1:3333/articles/7 로 subject(key) : 업데이트를 통해 변경된 제목 , content: content도 같이 변경, author: 익명의 게시자 라고 요청을 하면은 articles/7이 변경된걸 확인할 수 있다.

### 정렬해서 출력하기

1. const articles = await Article.all(); 을 const articles = await Article.query().orderBy('created_at', 'desc');
   - orderBy 이후 정렬하고자 하는 열의 이름을 써주고, asc 는 오름차순, desc는 내림차순
   - postman 에서 get 으로 http://127.0.0.1:3333/articles 확인 해보자

### 페이지 매기기

1. paginate 라는 함수 이용하기
   ```
       const articles = await Article.query()
       .orderBy('created_at', 'desc')
       .paginate(1, 4);
   ```
   - paginate(페이지 번호, 한 페이지에 몇개씩 보여줄지)
   - 한 페이지에 최대 20개씩 밖에 안보여준다.
2. postman 에서 get 으로 http://127.0.0.1:3333/articles 확인 해보자

### 쿼리스트링(Query String)

- query parameters( 물음표 뒤에 = 로 연결된 key value pair 부분)을 url 뒤에 덧붙여서 추가적인 정보를 서버 측에 전달하는 것을 쿼리스트링 이라고 한다.
- 그래서 GET 방식은 요청하는것을 Params 를 통해서 많이 하고 body에다는 안한다. 그렇기 때문에 GET방식으로 요청한 url을 보면
  http://127.0.0.1:3333/articles?page=1 이런식으로 나오는걸 확인할 수 있다.
- 쿼리는 자주 쓰는거라서 request 라고 제공을 한다.
  ```
      public async list({request}) {
          return request.qs();
      }
  ```
  - qs속성을 사용하여 쿼리 문자열을 개체로 정의할 수 있다.
- .paginate(1, 4) 이렇게 따로 쓴거를 qs로 전달해보자
  ```
      public async list({ request }) {
          const { page } = request.qs();
          const articles = await Article.query()
          .orderBy("created_at", "desc")
          .paginate(page, 4);
          return articles;
      }
  ```
- paginate 에서 페이지 번호 기본값은 1이지만 명시적으로 처리할 수 도 있다.
  ```
      paginate(page || 1, 4)
  ```
- paginate 에서 perPage를 지정할 수 도 있다.

  ```
      // perPage가 있으면 그 값을 쓰고 없다면 기본이 4다.
      const {page, perPage} = request.qs();

      public async list({ request }) {
          const { page } = request.qs();
          const articles = await Article.query()
          .orderBy("created_at", "desc")
          .paginate(page || 1, perPage || 4);
          return articles;
      }
  ```

### 유저모델을 만들고 인증처리

#### users 테이블 생성

1. migration rollback 하기
   ```
       node ace migration:rollback;
   ```
2. rollback 하고 migrations에 있는 파일들 지우기
3. migration default 만들기
   ```
       node ace make:migration default
   ```
4. migration default 파일에서 createTable his.tableName 을 'users' 라고 넣어보기

   ```
       import BaseSchema from '@ioc:Adonis/Lucid/Schema'

       export default class Defaults extends BaseSchema {
       protected tableName = 'defaults'

       public async up () {
           this.schema.createTable('users', (table) => {
           table.increments('id')

           /**
           * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
           */
           table.timestamp('created_at', { useTz: true })
           table.timestamp('updated_at', { useTz: true })
           })
       }

       public async down () {
           this.schema.dropTable('users')
       }
       }

   ```

5. eamil, password, name, avatar 넣기
   ```
       table.string('email');
       table.string('password');
       table.string('name');
       table.string('avatar');
   ```
6. node ace migration:run 해서 생성하기
7. dbeaver 에서 확인 해보면 articles 라는 테이블은 사라지고 users 라는 테이블이 생긴걸 확인할 수 있다.

### User model 만들기

1. node ace make:model User
2. User model 에 이메일, 패스워드, 이름, 아바타 추가 해주기

   ```
       @column()
       public email: string;

       @column()
       public password: string;

       @column()
       public name: string;

       @column()
       public avatar: string;
   ```

#### routes.ts 추가

1. sign-in, sign-up 추가하기
   ```
       Route.post('/sign-in', () => { });
       Route.post('/sign-up', () => { });
   ```
2. AuthController 연결
   ```
        Route.post("/sign-up", "AuthController.signUp"); // 회원가입
        Route.post("/sign-in", "AuthController.signIn"); // 로그인
   ```

### 계정생성 만들기

1. 이메일, 패스워드 등 request를 받아야 되므로 request 추가

   ```
       // AuthController.ts

       public async singUp({request}){
           const {email, password, name} = request.only(['emil','password','name']);
       }
   ```

2. ```
       const user = await User.create({
           email,
           password,
           name,
       });

       return user;
   ```

3. postman body 에 넣어보기
4. postman body 에 넣은 이메일, 패스웓, 네임을 dbeaver에서 확인 가능하다

#### 조건 추가

1. email은 다른 사람과 중복되지 않게 만들기

   ```
       // migtations 에 _default.ts

       table.string('email').unique()
   ```

2. password는 json에서 확인 못하게 만들기
   - column 에 serializeAs 옵션 추가
   ```
       // User.ts
       @column({serializeAs: null})
       public password: sitrng;
   ```
3. node ace migration:rollback 후 다시 run 하기
4. dbeaver 에서 다시 확인을 해보기

### 암호화 복호화

- 패스워드 같은경우는 복호화가 불가능한 암호화, 그런것들을 [Hashing](https://docs.adonisjs.com/guides/security/hashing#sidenav-open) 이라고 한다.

1. 기본값이 argon를 써보자
   - argon 라이브러리 설치
   ```
       npm i phc-argon2
   ```
   - 근데 나는 이상하게 안된다. 그래서 아래꺼로 설치함
   ```
       npm install --save @phc/argon2
   ```
2. password 할당하기

   ```
       //AuthController.ts

       const user = await User.create({
           email,
           password: await Hash.make(password),
           name,
       });
   ```

3. Hash import 하기
   ```
       import Hash from "@ioc:Adonis/Core/Hash";
   ```
4. postman 에서 확인 해보기
   - 그러면 아까랑 똑같은 값인데 password가 없어진걸 확인할 수 있고, dbeaver(데이터베이스) 에서는 password가 암호화 된걸 확인할 수 있다.

#### Hooks 을 이용해서 passowrd를 update(변경)쪽에서도 이용할 수 있게 만들기

- Hooks 이란 어떤 특정 이벤트 시점을 말한다.
- beforSave(): save 동작이 일어나기 전, beforFind(): find를 하기전 등등 많이 hooks 이 있는걸 볼 수 있다.

  ```
      //User.ts
      import Hash from "@ioc:Adonis/Core/Hash";
      import { BaseModel, column, beforeSave } from "@ioc:Adonis/Lucid/Orm";

      @beforeSave()
      public static async hashPassword(user: User) {
          if (user.$dirty.password) {
          user.password = await Hash.make(user.password);
          }
      }
  ```

- user.$dirty.password : 원본데이터에 패스워드가 있을경우 라는 뜻 /
  user.password = await Hash.make(user.password) : 유저 패스워드에 해쉬를 한번 해서 저장 해라 라는 뜻
- 이렇게 하면은 authocontroller 에서 Hash를 굳이 처리 하지 않아도 된다.

### 로그인 만들어보기

1. 이메일 과 패스워드 받기

   ```
       //AuthController.ts

       public async signIn({request}){
           const email = request.input('email');
           const password = request.input('password');
       }
   ```

2. findByOrFail 이용해서 값을 찾기
   ```
       const user = await User.findByOrFail('email', email);
   ```
   - findByOrFail 은 일치하는 모델이 없으면 오류를 발생함

#### 사용자가 입력한 값 검증

1. Hash의 varify 이용해서 비교하기
   ```
       Hash.verify(user.password, password)
   ```
2. 성공, 실패 두가지로 나누기
   ```
       // 비동기니깐 await 처리
       if ( await Hash.verify(user.password, password)) {
           return user;
       }
       else {
           throw Error('비밀번호 불일치');
       }
   ```
3. 응답을 좀 더 자세하게 제어하기 위해서 [response](https://docs.adonisjs.com/guides/response) 이용하기

   ```
       public async signIn({request, response}){
           const email = request.input('email');
           const password = request.input('password');

           const user = await User.findByOrFail('email', email);

           if ( await Hash.verify(user.password, password)) {
                return user;
            }
            else {
                response.status(403);   //403은 권한이 없음
                return  {message: '비밀번호 불일치'};
            }
       }
   ```

### 로그인 인증을 유지할 수 있는 token 이용하기

1. [@adonisjs/auth 설치하기](https://docs.adonisjs.com/guides/auth/introduction)
   ```
       npm i @adonisjs/auth
   ```
2. 설정하기
   ```
       node ace configure @adonisjs/auth
   ```
   - 질문1: lucid (lucid가 ORM 이름)
   - 질문2: API tokens
   - 질문3: 인증할때 사용할 모델은 User
   - 질문4: users 모델에 대한 테이블을 만어놨기 때문에 false
   - 질문5: data base 로 셋팅
   - 질문6: api token 에 대한 table을 만들꺼냐는 질문에는 없기 때문에 y
3. 설정까지 끝나면 migrations 폴더에 token.ts가 만들어진걸 볼 수 있다.
4. generate를 이용하기

   ```
      public async signIn({request, auth, response}){
          const email = request.input('email');
          const password = request.input('password');

          const user = await User.findByOrFail('email', email);

          if ( await Hash.verify(user.password, password)) {
               const token = await auth.use('api').generate(user);
               return token;
           }
           else {
               response.status(403);   //403은 권한이 없음
               return  {message: '비밀번호 불일치'};
           }
      }
   ```

5. postman 에서 post http://127.0.0.1:3333/sign-in 으로 이메일과 패스워드를 친다음 보내면 token 이 만들어지는걸 볼 수 있다.
6. user 하고 token 정보를 둘다 주는 쪽으로 만들려면 return 을 할때 같이 쓰면 된다.
   ```
       if ( await Hash.verify(user.password, password)) {
           const token = await auth.use('api').generate(user);
           return {
               user,
               token
            };
       }
   ```

### 내정보 api 만들기

1. routes.ts 에 마이페이지 라우팅 하기

   - 두가지 이슈가 있음
     1. api 를 호출한 사람이 정확히 누구인지 알수가 있어야 그 정보가 나감
     2. 누군지 모르겠으면 내 정보를 안보여줘야 함
   - start/kernel.ts 에 Auth 등록해주기

   ```
       //kernel.ts

       Server.middleware.registerNamed({
           auth: () => import("App/Middleware/Auth")
       });

   ```

2. 두가지 이슈를 해결하기 위해서는 [middleware](https://docs.adonisjs.com/guides/auth/middleware) 라는 옵션을 걸어준다.
   ```
       Route.get('/me', 'UserController.me').middleware('api');
   ```
3. Controllers/Http UserController.ts 에 me 라는 api 만들기
   ```
       export default class UsersController {
           async me() {
               return "내 정보";
           }
       }
   ```
4. 그런 다음 postman get http://127.0.0.1:3333/me 하게 되면은 401 에러가 나오는걸 볼 수 있다. (401 인증정보가 아예 없는 경우)
5. postman post http://127.0.0.1:3333/sign-in 에 token 을 복사해서 postman get http://127.0.0.1:3333/me 의 authorization 탭 안에 bearer token 에 값을 아까 복사한 token을 넣어보기 그리고 전송을 하면은 "내 정보" 라는 글귀가 뜨는게 보임
6. auth 넣어보기
   ```
      export default class UsersController {
          async me({auth}) {
              return auth.user;
          }
      }
   ```
7. postman 에서 확인을 하면은 내 정보가 확인되는걸 볼 수 있다.

### 인증이 필요한 것들은 group으로 묶기

1. group 으로 묶으면 .middleware('api'); 를 한번만 쓸 수 있음

   ```
       // route.ts

       Route.group(()=>{
            Route.get('/me', 'UserController.me');
       }).middleware('api');
   ```

### 게시글 api 만들기

1. articles 마이그레이션 만들기

   ```
       // migrations/_defaults.ts

       this.schema.createTable("articles", (table) => {
           table.increments("id");

           table.integer("user_id").unsigned();
           table.string("subject");
           table.text("content", "longText");

           /**
           * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
           */
           table.timestamp("created_at", { useTz: true });
           table.timestamp("updated_at", { useTz: true });
       });
   ```

   - context 는 내용이 많기 때문에 longText를 추가 한다.
   - table.integer("user_id").unsigned();
     - integer는 정수 이고 id에는 음수가 안들어가기 때문에 옵션 unsigned을 추가한다.

2. articles 에 대한 내용이 삭제(down) 되는 내용도 추가하기
   ```
        public async down() {
           this.schema.dropSchemaIfExists("articles");
           this.schema.dropSchemaIfExists("users");
       }
   ```
   - dropSchemaIfExists("articles"): dropSchemaIfExists는 articles 가 있을때만 지우라는 옵션이다
3. migtation rollback 후 run 한다음 dbeaver 확인하기
4. Article 모델 변경하기

   ```
       // Models/Artocle.ts

       @column()
       public userId: number; //카멜케이스로 작성하기
   ```

   - user_id 추기하고 author는 필요없으니 삭제

### Swagger 만들기

1.  npm i --save adonis5-swagger 으로 설치
2.  그 다음 node ace invoke adonis5-swagger
3.  그러면 config/swagger.ts 가 생기는걸 볼 수 있음
4.  swagger.ts 에 uiUrl: 'docs' 라고 있는데 url 에 http://127.0.0.1:3333/docs/ 이렇게 치면은 swagger가 나옴
5.  swagger.ts 에 options title, description 수정

    ```
    options: {
        definition: {
        openapi: "3.0.0",
            info: {
            title: "커뮤니티 API",
            version: "1.0.0",
            description: "커뮤니티 API 입니다.",
        },
    },

    ```

6.  필요한 Controller.ts 에 적기

    ```
        //예시 : AuthControlle.ts
        /**
        * @swagger
        * /sign-in:
        *   post:
        *     tags:
        *       - Auth
        *     summary: 로그인
        *     requestBody:
        *        content:
        *          application/x-www-form-urlencoded:
        *             schema:
        *              type: object
        *              properties:
        *                 user_id:
        *                  type: string
        *                  description: id
        *                  example: user1
        *                 password:
        *                  type: string
        *                  description: password
        *                  example: password
        *              required:
        *                - user_id
        *                - password
        *     responses:
        *       200:
        *         description: 로그인 성공
        *       401:
        *         description: 로그인 권한 없음
        *       403:
        *         description: 등록되지 않은 회원 정보
        */
    ```

    <br>

### 프로젝트 만들기 순서

1. migration 만들기
2. model 만들기
3. controller 만들기
