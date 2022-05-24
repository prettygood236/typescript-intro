{
  //- Array : 한가지 타입만 가진다.
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // readonly Array<number>는 불가.
    // fruits.push('1') //- readonly => 변경 불가
  }

  //- Tuple : 서로 다른 타입을 함께 가질 수 있는 배열
  //- -> interface, type alias, class로 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ['name', 12];
  const [name, age] = student;
  console.log(name); // name
  console.log(age); // 123
}
