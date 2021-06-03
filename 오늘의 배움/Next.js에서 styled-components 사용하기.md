넥스트에서 css-in-js 방식인 styled-component를 이용하려면
몇가지 설정이 필요하다.

1. \_document.js 설정
   ssr시에 실행되는 파일인 \_documents.js에
   styled-components의 스타일 코드를 추출하는 로직을 추가한다.

[공식문서](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js)를 참고해서 아래와 같이 getInitialProps method를 작성한다.

```
    import Document from 'next/document'
    import { ServerStyleSheet } from 'styled-components'

    export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
            ),
        }
        } finally {
        sheet.seal()
        }
    }
    }
```

2. babel 설정
   넥스트는 최초 ssr이후 내부 라우팅을 통해 페이지가 이동되면서 csr을 하게되는데 이때, 서버에서 생성하는 해시값과 브라우저에서 생성하는 해시값이 서로 달라서 문제가 발생하게 된다.
   < Prop className did not match. 에러 발생 >

이를 위해 바벨 플러그인 패키지를 설치한다.

npm i -D babel-plugin-styled-components  
or
yarn add babel-plugin-styled-components

그리고 root path에 .babelrc 파일을 생성해 [공식문서](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/.babelrc)를 참고하여 아래와 같이 작성한다.

```
    {
        "presets": ["next/babel"],
        "plugins": [["styled-components", { "ssr": true }]]
    }
```
