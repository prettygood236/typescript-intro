console.log('Hello World~!');
// -> js, node로 실행 가능

class Car {
  engine: number;
  constructor() {
    this.engine = 1;
  }
}
// -> ts, node로 실행 불가
// 또한 브라우저는 ts를 바로 실행할 수 없다.
// tsc main.ts로 main.js로 변환시켜야 실행 가능.

// 바로 node 실행할 수 있도록 도와주는 툴 -> ts-node
// tsc main.ts -w -> watch모드. ts를 수정할 때마다 js로 컴파일해준다.
