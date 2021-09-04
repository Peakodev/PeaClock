const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const clock = document.createElement('div')
clock.id = "Pea-clock"

$('body').append(clock)

function showTime(){
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  let session = "AM"

  if(h >= 12) session = "PM",h=h-12;
  if(h==0) h=12;

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  clock.innerText = h + ':' + m + ':' + s + ' ' + session

  setTimeout(showTime,1000)
}

showTime();