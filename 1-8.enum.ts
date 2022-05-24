// * Enum: 관계가 있는 여러 상수(변하지 않는)값들을 한 곳에 모아서 정의하는 타입 💩
{
  // JavaScript
  // 상수를 정의할 때 아래와 같이 모두 대문자를 사용한다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //. TypeScript
  enum Days {
    Monday, // 0
    // Monday = 1, //. 1부터 시작해서 자동으로 숫자가 할당된다.
    // Monday = 'monday', //. 문자열은 다음 것들이 자동으로 할당되진 않는다.
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Tuesday); // 1
  // const day = Days.Saturday;
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  //. enum으로 지정된 변수에 다른 어떤 숫자도 할당할 수 있는 문제가 있다. 💩
  day = 10; // 어떤 컴파일 에러도 발생하지 않는다.
  console.log(day); // 5

  //. 따라서 enum은 Union type으로 대체하는 것이 좋다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday'; // type이 보장된다.

  /** 안드로이드나 iOS의 코틀린, 스위프트에서 사용자의 데이터를 JSON으로 묶어 다시 다른 클라이언트에게 보내는 경우 등
   * 모바일 클라이언트에서 사용하는 네이티브 프로그래밍언어에서는 Union type이 없기 때문에 enum을 사용한다.
   * 이러한 경우를 제외하고는 enum보다는 union type을 사용하는 것이 좋다.
   */
}
