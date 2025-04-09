const box = document.querySelector('article');

// box.style.backgroundColor = 'hotpink';
box.style['background-color'] = 'hotpink';

// const colorName = box.style.backgroundColor;
// console.log(colorName);

// 자스는 html외의 css파일은 접근불가하므로
// css에 있는 스타일 정보를 가져오는 것이 아닌
// 화면에 이미 렌더링된 결과화면을 다시 역으로 계산해서 가져옴
// const styleInfo = getComputedStyle(box);
// console.log(styleInfo.backgroundColor);
