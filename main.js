// console.log('hello');
// document.querySelector('h1').innerText = 'title2';
// let myAge = 37;
// const myGender = 'male';
// console.log(DB);

/*
배열과 반복문

배열: 비슷한 성격의 복수 개의 데이터를 그룹핑하기 위한 자료형
배열의 데이터를 손쉽게 제어하기 위한 문법 반복문

for(let i =0; i<최대수치; i++){
  반복할 코드
}
i값이 0부터 최대수치값 만큼 {}안쪽의 구문을 반복처리

배열의 갯수 구하는 법
- 배열명.length

배열 반복처리 내장 함수
- 직접 정의하지 않더라도 자주쓰는 기능들을 묶어서 미리 등록한 함수

배열.forEach(익명함수)
*/

const colors = ['red', 'green', 'blue', 'purple', 'white', 'black'];
// console.log(colors.length);

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach((data, index) => {
//   console.log(data);
//   console.log(index);
//   console.log('------------');
// });

colors.forEach((data, index) => {
  console.log(data);
  console.log(index);
});
