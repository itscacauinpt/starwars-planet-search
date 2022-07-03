function hiddenScrollBar() {
  const element = document.getElementById('scroll');
  element.style.visibility = 'visible';
  console.log(element);
}

const TIME_TO_SCROLL = 1000;
const setScrollBarTime = () => setTimeout(hiddenScrollBar, TIME_TO_SCROLL);

export default setScrollBarTime;
