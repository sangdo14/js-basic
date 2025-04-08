const btnCall = document.querySelector('.btnCall');
const mobileMenu = document.querySelector('.mobileMenu');
const btnClose = document.querySelector('.btnClose');

//메뉴 활성화 처리 이벤트
btnCall.addEventListener('click', () => {
  mobileMenu.classList.add('on');
});

//메뉴 비활성화 처리 이벤트
btnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('on');
});
