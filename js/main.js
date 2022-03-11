document.getElementById("newyork").onclick = vacationNy
document.getElementById("neworleans").onclick = vacationNo
document.getElementById("newmexico").onclick = vacationNm
document.getElementById("italy").onclick = vacationIt
document.getElementById("jamaica").onclick = vacationJm
document.getElementById("amsterdam").onclick = vacationAm
document.getElementById("seattle").onclick = vacationSe
			
function playAudio(url) {
  new Audio(url).play();
	}

function vacationNy() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/PQz1Vdc)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationNo() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/Q6SpB8F)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationNm() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/ctBSQmZ)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationIt() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/LNg1Rqs)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationAm() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/2vM3hk8)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationJm() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/CK78kKx)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}

function vacationSe() {
  document.querySelector('body').style.backgroundImage = "url(https://ibb.co/PjH4gCS)"
  document.querySelector('body').style.color = 'black'
  document.querySelector('body').style.fontFamily = "Arial";
	}
	
