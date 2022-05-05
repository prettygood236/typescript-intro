{
  // Javascript

  // old : var // 💩(Hoisting 등 많은 문제가 있다.)
  // var age = 5;
  // age = 1;

  // let : es6
  // 버전호환성 걱정없이 babel, tsc가 js를 최신버전에서
  // 낮은 버전으로 변환해주기 때문에 let을 쓰는 것이 좋다.
  let name = 'hello';
  name = 'hi';

  // const
  const age = 5;
  // age = 5; //. Cannot assign to 'age' because it is a constant.
}

{
  /*
  Javascript

  * Primitive(7) : number, string, boolean, bigint, symbol, null, undefined
  * Object : function, array, ....
  
  */

  //- number
  const num: number = -6;

  //- string
  const str: string = 'hello';

  //- boolean
  const bool: boolean = false;

  //- undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return 1; //undefined;
  }

  //- null
  let person: null; // 💩
  let person2: string | null;

  //- unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  //- any 💩
  let anything: any = 0;
  anything = 'hello';

  //- void : 주로 함수에서 아무것도 리턴하지 않을 때 사용
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //💩

  //- naver : 함수에서 절대 리턴하지 않는 경우에 그것을 명시하기 위해 사용
  function throwErrow(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; //💩

  //- object : Primitive type을 제외한 모든 Object type을 할당할 수 있다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
