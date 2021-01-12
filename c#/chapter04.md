묵시적 변환(Implicit Conversion)
------
* 기본 자료형 간의 변환을 컴파일러가 '알아서' 해줌
    * 모든 기본 자료형 간의 변환이 가능한 것은 아님
* 특별한 문법이 필요하지 않음
```
    int num1 = 100000;
    long num2 = num1;
```
### 묵시적 형 변환 테이블(C#)
|From|To|
|----|----|
|sbyte|short,int,long,float,double,decimal|
|byte|short,ushort,int,uint,long,ulong,float,double,decimal|
|char|ushort,int,uint,long,ulong,float,double,decimal|
|short|int,long,float,double,decimal|
|ushort|int,uint,long,ulong,float,double,decimal|
|int|long,float,double,decimal|
|uint|long,ulong,float,double,decimal|
|long|float,double,decimal|
|ulong|float,double,decimal|
|float| double|