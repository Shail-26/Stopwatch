let sec=0;
let min=0;
let hr=0;
let buttonStartElement = document.querySelector('.js-start-button');
let buttonResetElement = document.querySelector('.js-reset-button');
let result = document.querySelector('.js-show-result');
let button = false;
let intervalId;

buttonStartElement.addEventListener('click', function(){
  if(!button){
    intervalId = setInterval(function(){
      stopWatch();
    },1000);
    button = true;
    buttonStartElement.innerHTML = 'Stop';
  } else if(button){
    buttonStartElement.innerHTML = 'Start';
    clearInterval(intervalId);
    button = false;
  }
})

buttonResetElement.addEventListener('click', function(){
  sec = 0;
  min = 0;
  hr = 0;
  result.innerHTML = `${String(hr).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
})

function stopWatch(){
  sec++;
  //console.log(sec);
  while(sec>=60){
    min++;
    sec = sec - 60;
  } 
  //console.log(min);
  while(min>=60){
    hr++;
    min = min - 60;
  }
  //console.log(hr);
  result.innerHTML = `${String(hr).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
}

/*
function onlySec(){
  result.innerHTML = `${String(sec).padStart(2, '0')}`;
}
function minSec(){
  result.innerHTML = `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
}
function allTime(){
  result.innerHTML = `${String(hr).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')}`;
}
*/

