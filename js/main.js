document.getElementById("newyork").addEventListener('click', vacationNY)
document.getElementById("neworleans").addEventListener('click', vacationNo)
document.getElementById("newmexico").addEventListener('click', vacationNm)
document.getElementById("italy").addEventListener('click', vacationIt)
document.getElementById("jamaica").addEventListener('click', vacationJm)
document.getElementById("amsterdam").addEventListener('click', vacationAm)
document.getElementById("seattle").addEventListener('click', vacationNY)
			
function playAudio('audio_file.mp3') {
  new Audio('audio_file.mp3').play();
	}

function vacationNy() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/VmpMksg/IMG-2456.jpg)"
	playAudio('Damian Marley - Welcome To Jamrock.mp3')
	}
function vacationNo() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/THjYXKB/IMG-7565-CR2.jpg)"
	}

function vacationNm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/xGkt64B/IMG-4777.jpg)"
	}

function vacationIt() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/6XtFwpq/IMG-5992.jpg)"
	}

function vacationAm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/K2sxhrN/20170316-141222-HDR.jpg)"
	}

function vacationJm() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/RT0bxTL/IMG-7482-CR2.jpg)"
	}

function vacationSe() {
  document.querySelector('body').style.backgroundImage = "url(https://i.ibb.co/kBC0Xcd/IMG-4886.jpg)"
	}
	
