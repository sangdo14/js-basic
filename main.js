/*
자바스크립트에서의 형변환
기본 자료형이 변견되는 현상
- 문자열 --> 숫자화
- 숫자 --> 문자화

실무에서 형변환이 일어나는 대표적 사례
문자 + 숫자를 더했을때 더해지는 숫자(변수)값이 자동으로 문자화 되는 현상
*/

//숫자가 문자화되는 대표적인 예시
// let str = '1';
// let num1 = 1;
// let num2 = 2;
// console.log(str + num1 + num2);
// console.log(num1 + num2 + str);

//변수가 문자화되는 대표적인 예시
// let myName = '남상도';
// console.log('제 이름은 ' + myName + '입니다.');

//위와 같은 번거로움을 개선하고자 ES6에서는 문자열 템플릿 문법이 생김
// console.log(`제 이름은 ${myName}입니다.`);

/*
  문자를 숫자로 형변환 처리:
  parseInt(문자화된 숫자) : 정수 변환
  parseFloat(문자화된 숫자) : 실수 변환

*/
let num = '3.5';
console.log(typeof num);

//문자화된 숫자값을 정수로 형변환하여 다시 num변수에 재할당
let num3 = parseFloat(num);
console.log(typeof num3);
console.log(num3);

let num4 = parseFloat(num);
console.log(typeof num4);
console.log(num4);

let num2 = parseInt(num3);
console.log(typeof num2);
console.log(num2);

const userInfo = (name, age, gender) => {
  if (!name || !age || !gender) {
    console.error(`올바른 정보를 입력하세요.`);
  } else {
    console.log(`${name}님의 나이는 ${age}이고 성별은 ${gender}입니다.`);
  }
};

userInfo('백설공주', '17', '여성');
userInfo('남상도', '37');
