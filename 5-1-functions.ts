{
  function checkNotNulll(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNull(123);
  console.log(result);
  checkNotNull(null);

  // 다른 type에 대해서도 checkNotNull 같은 함수를 사용하고 싶다면?

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  //. 사용자가 type을 결정할 수 있고 컴파일할 떄 type을 보장받을 수 있다!.
  const number: number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
