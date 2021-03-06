{
  // JavaScript

  // old : var // ๐ฉ(Hoisting ๋ฑ ๋ง์ ๋ฌธ์ ๊ฐ ์๋ค.)
  // var age = 5;
  // age = 1;

  // let : es6
  // ๋ฒ์ ํธํ์ฑ ๊ฑฑ์ ์์ด babel, tsc๊ฐ js๋ฅผ ์ต์ ๋ฒ์ ์์
  // ๋ฎ์ ๋ฒ์ ์ผ๋ก ๋ณํํด์ฃผ๊ธฐ ๋๋ฌธ์ let์ ์ฐ๋ ๊ฒ์ด ์ข๋ค.
  let name = 'hello';
  name = 'hi';

  // const
  const age = 5;
  // age = 5; //. Cannot assign to 'age' because it is a constant.
}

{
  /*
  JavaScript

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
  let name: undefined; // ๐ฉ
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return 1; //undefined;
  }

  //- null
  let person: null; // ๐ฉ
  let person2: string | null;

  //- unknown ๐ฉ
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  //- any ๐ฉ
  let anything: any = 0;
  anything = 'hello';

  //- void : ์ฃผ๋ก ํจ์์์ ์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์์ ๋ ์ฌ์ฉ
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //๐ฉ

  //- naver : ํจ์์์ ์ ๋ ๋ฆฌํดํ์ง ์๋ ๊ฒฝ์ฐ์ ๊ทธ๊ฒ์ ๋ช์ํ๊ธฐ ์ํด ์ฌ์ฉ
  function throwErrow(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; //๐ฉ

  //- object : Primitive type์ ์ ์ธํ ๋ชจ๋  Object type์ ํ ๋นํ  ์ ์๋ค. but // ๐ฉ
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
