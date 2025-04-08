// console.log('hello');
// document.querySelector('h1').innerText = 'title2';
// let myAge = 37;
// const myGender = 'male';
// console.log(DB);

/*
함수(function)
: 자주쓰는 구문들을 그룹핑해서 통째로 재활용하기 위한 코드 모음집

함수 만드는 방법
- 선언적 함수 : function 키워드로 선언방식 (호출 위치가 자유로움)
- 대입형 함수 : 변수에 화살표 함수를 대입하는 방식 (선언 이후에만 사용가능)

매개변수 (parameter) : 함수 외부에서 특정 값을 내부로 전달해주는 통로명
인자 (argument) : 매개변수를 통해 실제 전달되는 실질적인 값
*/

// plus란 이름의 선언적 함수 생성
// function plus(n1, n2) {
//   let result = n1 + n2;
//   console.log(result);
// }

// const minus = function (num1, num2) {
//   console.log(num1 - num2);
// };

// // es6버전의 정의형 함수 (화살표함수: Arrow function)
// const divider = (n1, n2) => {
//   let result = n1 / n2;
//   console.log(result);
// };

/*
  조건문
: 조건식을 만들어서 조건식이 ture, false인지에 따라서 코드 분기처리하는 식

if(조건식1){
  조건식1이 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
  조건식1이 거짓이면 다음 조건식2로 넘어감
}else if(조건식2){
  조건식2가 참이면 이 코드블록 안쪽의 구문이 실행되면서 조건문 종료
  조건식2가 거짓이면 다음 조건식2로 넘어감
}else {
  만약 위의 조건식이 거짓이면 이곳의 구문을 실행하고 조건문 강제 종료
}
*/

const calculator = (n1, n2, how) => {
  let result;
  if (how === '+') {
    result = n1 + n2;
  } else if (how === '-') {
    result = n1 - n2;
  } else if (how === '*') {
    result = n1 * n2;
  } else if (how === '/') {
    result = n1 / n2;
  } else {
    result = '산술 기호를 잘못 입력하셨습니다.';
  }

  console.log(result);
};

calculator(9, 3, '+');
calculator(9, 3, '-');
calculator(9, 3, '*');
calculator(9, 3, '/');
calculator(9, 3, '');
