## spread

```
    const slime = {
        name: '슬라임'
    };

    const cuteSlime = {
        ...slime,
        attribute: 'cute'
    };

    const purpleCuteSlime = {
        ...cuteSlime,
        color: 'purple'
    };

    console.log(slime);
    console.log(cuteSlime);
    console.log(purpleCuteSlime);


    // console창
    {name: "슬라임"}
    {name: "슬라임", attribute: "cute"}
    {name: "슬라임", attribute: "cute", color: "purple"}
```

- 여기서 사용한 ... 문자가 바로 spread 연산자 이다.
- spread 연산자는 배열에서도 사용 할 수 있다.

  ```
      const animals = ['개', '고양이', '참새'];
      const anotherAnimals = [...animals, '비둘기'];
      console.log(animals);
      console.log(anotherAnimals);


      // console창
      ["개", "고양이", "참새"]
      ["개", "고양이", "참새", "비둘기"]
  ```

* 배열에서 spread 연산자를 여러번 사용 할 수도 있다.

  ```
      const numbers = [1, 2, 3, 4, 5];

      const spreadNumbers = [...numbers, 1000, ...numbers];
      console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
  ```

<br>

## rest

- rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다름
- rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능

```
    const purpleCuteSlime = {
        name: '슬라임',
        attribute: 'cute',
        color: 'purple'
    };

    const { color, ...rest } = purpleCuteSlime;
    console.log(color);
    console.log(rest);


    // console 창
    purple
    Object {name: "슬라임", attribute: "cute"}
```

- rest는 객체와 배열에서 사용 할 때는 이렇게 비구조화 할당 문법과 함께 사용
- 주로 사용 할 때는 위와 같이 rest라는 키워드를 사용하게 된다.
- 추출한 값의 이름이 꼭 rest 일 필요는 없다.

  ```
      const purpleCuteSlime = {
          name: '슬라임',
          attribute: 'cute',
          color: 'purple'
      };

      const { color, ...cuteSlime } = purpleCuteSlime;
      console.log(color);
      console.log(cuteSlime);
  ```

- 이어서 attribute 까지 없앤 새로운 객체를 만들고 싶다면 이렇게 해주면 된다.

  ```
      const purpleCuteSlime = {
          name: '슬라임',
          attribute: 'cute',
          color: 'purple'
      };

      const { color, ...cuteSlime } = purpleCuteSlime;
      console.log(color);
      console.log(cuteSlime);

      const { attribute, ...slime } = cuteSlime;
      console.log(attribute);
      console.log(slime);


      // console 창
      purple
      Object {name: "슬라임", attribute: "cute"}
      cute
      Object {name: "슬라임"}
  ```
