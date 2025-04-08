/*
  DOM스크립트

  DOM (Document Object Model)
  -html태그를 브라우져가 해석해서 자바스크립트가 제어 가능한 형태로 변환된 객체

  1. DOM선택
  2. DOM 정보 출력
  3. DOM 텍스트 정보 변경
  4. DOM 스타일 정보 변경
  5. DOM 속성 정보 변경
  6. DOM에 이벤트 연결
*/

// h1 태그 요소를 돔스크립트로 선택
// const h1 = document.querySelector('h1');
// const link = document.querySelector('a');
// console.log(h1);
// console.dir(h1);
// console.dir(link);

//DOM의 텍스트 변경
// h1.innerText = '김영희';
// h1.innerHTML = '<span>김판섭</span>';

//DOM스타일 변경
// h1.style.color = 'aqua';

//DOM 속성 변경

// const span = document.querySelector('span');
// console.dir(span);
// span.style.color = 'red';

/*
  이벤트 (event)
  - 웹상에서 사용자, 혹은 시스템에 일으키는 행동

  사용자 이벤트
  -click, mouseenter, mouseleave, scroll, resize

  시스템 이벤트
  - load, error, pending, fulfilled, rejected

  이벤트 연결 (이벤트 바인딩)
  DOM.addEventListener('이벤트명', 이벤트 핸들러)
*/

const h1 = document.querySelector('h1');
const a = document.querySelector('a');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
console.dir(h1);
console.dir(a);

// h1.addEventListener('click', () => {
//   console.log('h1 요소 클릭');
// });

/*
  미션1 - btn1클릭시 h1요소의 텍스트를 김영희로 변경
  미션2 - btn2클릭시 h1요소의 글자색을 orange로 변경
  미션3 - btn3클릭시 링크 정보 네이트로 변경
*/

btn1.addEventListener('click', () => {
  h1.innerText = '김영희';
});

btn2.addEventListener('click', () => {
  h1.style.color = 'orange';
});

btn3.addEventListener('click', () => {
  a.innerText = '네이트';
  a.href = 'https://www.nate.com/';
  a.target = '_blank';
});

/*

*/
const btns = document.querySelectorAll('button');
console.log(btns);

btns[0].addEventListener('click', () => {
  h1.innerText = '김영희';
});
