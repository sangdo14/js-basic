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
function plus(n1, n2) {
  let result = n1 + n2;
  console.log(result);
}

const minus = function (num1, num2) {
  console.log(num1 - num2);
};

// es6버전의 정의형 함수 (화살표함수: Arrow function)
const divider = (n1, n2) => {
  let result = n1 / n2;
  console.log(result);
};

const multiple = (n1, n2) => {
  console.log(n1 * n2);
};

// 함수호출
plus(2, 3);
plus(345, 1234);
minus(3, 2);
divider(4, 2);
multiple(10, 10);
